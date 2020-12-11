import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMessage } from 'src/app/shared/interfaces/message/message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageStore = new BehaviorSubject<IMessage[]>([]);
  public message$ = this.messageStore.asObservable();

  setMessage(message) {
    this.messageStore.next([...this.messageStore.value, message]);
  }
}
