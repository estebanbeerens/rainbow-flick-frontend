import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IChanllenge } from 'src/app/shared/interfaces/match/challenge.model';

@Injectable({
  providedIn: 'root',
})
export class ChallengeService {
  challenge$ = new BehaviorSubject<IChanllenge>(null);
  constructor() {}
}
