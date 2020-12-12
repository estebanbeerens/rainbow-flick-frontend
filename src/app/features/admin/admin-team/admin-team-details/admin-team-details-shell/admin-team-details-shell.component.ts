import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { IUserDetails } from 'src/app/shared/interfaces/user/user-details.model';

@Component({
  selector: 'app-admin-team-details-shell',
  templateUrl: './admin-team-details-shell.component.html',
  styleUrls: ['./admin-team-details-shell.component.scss'],
})
export class AdminTeamDetailsShellComponent implements OnInit, OnDestroy {

  preloader$: Observable<Boolean>;
  team$: Observable<ITeamDetails>;
  users$: Observable<IUserDetails[]>;
  title: string;
  sub: Subscription;
  generalForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private _teamService: TeamService,
    private _userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this._teamService.loadTeamDetails(p.id);
    });
    this.preloader$ = this._userService.isLoading$.asObservable();
    this.users$ = this._userService.users$.asObservable();
    this.team$ = this._teamService.teamDetails$.asObservable();
    this.sub = this.team$.subscribe(team => {
      this.defineIsNew(team),
      this.loadForm(team)
    });
  }

  defineIsNew(team: ITeamDetails): void {
    if (team?.id == '' ){
      this.title = "Team aanmaken";
      this._userService.loadUsers();
    } else {
      this.title = "Team bewerken";
    }
  }

  loadForm(team: ITeamDetails): void {
    if (team) {
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

  submitForm() {
    
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
