import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';

@Component({
  selector: 'app-user-team-input-shell',
  templateUrl: './user-team-input-shell.component.html',
  styleUrls: ['./user-team-input-shell.component.scss']
})
export class UserTeamInputShellComponent implements OnInit {

  team$: Observable<ITeamDetails>;

  generalForm: FormGroup;
  sub: Subscription;
  title: String = 'Team aanmaken';
  id: string = '0';
  
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // TODO : Check if new team or existing (title = team bewerken / title = nieuw team)
    // this.sub = this.team$.subscribe(team => {
    // this.id = team.id;
    //   this.defineIsNew(team),
    //   this.loadForm(team)
    // });
  }
  
  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }

  defineIsNew(team: ITeamDetails): void {
    if (team.id == '' ){
      this.title = "Team aanmaken";
    }else{
      this.title = "Team bewerken";
    }
  }

  loadForm(team: ITeamDetails): void {
    this.generalForm = this.fb.group({
      name: [team.name, Validators.required],
      location: [team.location, Validators.required],
      companyName: [team.companyName, Validators.required],
      captainId: [team.captain.id, Validators.required],
      imageURL: [team.imageURL],
    });
  }

}
