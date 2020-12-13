import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { UserAuth } from 'src/app/shared/interfaces/user/user-auth.model';

@Component({
  selector: 'app-user-team-input-shell',
  templateUrl: './user-team-input-shell.component.html',
  styleUrls: ['./user-team-input-shell.component.scss']
})
export class UserTeamInputShellComponent implements OnInit, OnDestroy {

  preloader$: Observable<Boolean>;
  team$: Observable<ITeamDetails>;
  authUser$: Observable<UserAuth>;
  file: File;
  title: string;
  sub: Subscription;
  generalForm: FormGroup;
  id: string;
  captainId: string;
  isNew: boolean;
  
  constructor(
    public fb: FormBuilder,
    private _teamService: TeamService,
    private _userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.id = p.id;
    });
    this._teamService.loadTeamDetails(this.id);
    this.preloader$ = this._userService.isLoading$.asObservable();
    this.authUser$ = this._userService.userAuth$.asObservable();
    this.team$ = this._teamService.teamDetails$.asObservable();
    this.sub = this.team$.subscribe(team => {
      this.defineIsNew(team),
      this.loadForm(team)
    });
  }

  defineIsNew(team: ITeamDetails): void {
    if (team?.id == '' ){
      this.isNew = true;
      this.authUser$.subscribe(user => {
        this.captainId = user.id.toString();
      });
      this.title = "Team aanmaken";
    } else {
      this.isNew = false;
      this.title = "Team bewerken";
    }
  }

  loadForm(team: ITeamDetails): void {
    if (this.isNew) {
      this.generalForm = this.fb.group({
        name: [team.name, Validators.required],
        location: [team.location, Validators.required],
        companyName: [team.companyName, Validators.required],
        captainId: [{value: this.captainId, disabled: true}, Validators.required],
      });
    } else if (!this.isNew) {
      this.generalForm = this.fb.group({
        name: [team.name, Validators.required],
        location: [team.location, Validators.required],
        companyName: [team.companyName, Validators.required],
        captainId: [team.captain.id, Validators.required],
      });
    } else {
      this.generalForm = this.fb.group({
        name: ['', Validators.required],
        location: ['', Validators.required],
        companyName: ['', Validators.required],
        captainId: ['', Validators.required],
      });
    }
  }

  onFileChanged(file: File): void {
    this.file = file;
    this.generalForm.markAsDirty();
  }

  submitForm(): void {
    const formData = new FormData();
    formData.append('name', this.generalForm.get('name').value);
    formData.append('location', this.generalForm.get('location').value);
    formData.append('companyName', this.generalForm.get('companyName').value);
    formData.append('captainID', this.generalForm.get('captainId').value);

    if (this.file) {
      formData.append('image', this.file);
    }

    if (this.isNew) {
      this._teamService.createTeam(formData);
    } else {
      this._teamService.updateTeam(this.id, formData);
    }

    this.router.navigate(['/app/user/team']);

  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
