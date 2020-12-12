import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TeamService } from 'src/app/services/team.service';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';

@Component({
  selector: 'app-admin-team-details-shell',
  templateUrl: './admin-team-details-shell.component.html',
  styleUrls: ['./admin-team-details-shell.component.scss'],
})
export class AdminTeamDetailsShellComponent implements OnInit {

  team$: Observable<ITeamDetails>;

  constructor(
    public fb: FormBuilder,
    private _teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.team$ = this._teamService.teamDetails$.asObservable();
  }

  createForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    location: ['', [Validators.required, Validators.minLength(3)]],
    imageUrl: ['', [Validators.required]],
    contactName: ['', [Validators.required, Validators.minLength(3)]],
    contactPhone: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
  });

  submitForm() {
    
  }

}
