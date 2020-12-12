import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatchService } from 'src/app/services/match.service';
import { TeamService } from 'src/app/services/team.service';
import { IChanllenge } from 'src/app/shared/interfaces/match/challenge.model';
import { ITeamDetails } from 'src/app/shared/interfaces/team/team-details.model';
import { ChallengeService } from 'src/app/shared/services/challenge.service';

@Component({
  selector: 'app-user-match-create-shell',
  templateUrl: './user-match-create-shell.component.html',
  styleUrls: ['./user-match-create-shell.component.scss'],
})
export class UserMatchCreateShellComponent implements OnInit {
  challenge$: Observable<IChanllenge>;
  teams$: Observable<ITeamDetails[]>;
  generalForm: FormGroup;

  constructor(
    private _challengeService: ChallengeService,
    private _teamService: TeamService,
    private _matchService: MatchService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this._teamService.loadTeams();
    this.teams$ = this._teamService.teams$.asObservable();
    this.challenge$ = this._challengeService.challenge$.asObservable();

    this._challengeService.challenge$.subscribe((result) => {
      this.loadForm(result);
    });
  }

  loadForm(challenge: IChanllenge): void {
    this.generalForm = this.fb.group({
      table: [challenge.table.id, Validators.required],
      dateTimePlanned: [challenge.dateTimePlanned, Validators.required],
      awayTeam: [challenge.awayTeam, Validators.required],
      homeTeam: [challenge.homeTeam, Validators.required],
      time: ['', Validators.required],
    });
  }

  onSubmitPress(value) {
    console.log('submit', value);
    this._matchService.challengeMatch(value);
  }
}
