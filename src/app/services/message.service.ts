import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMessage } from 'src/app/shared/interfaces/message/message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageStore = new BehaviorSubject<string[]>([]);
  public message$ = this.messageStore.asObservable();

  setMessage(message: string) {
    this.messageStore.next([...this.messageStore.value, message]);
  }
  setMessages(messages: string[]) {
    messages.forEach((message) => this.messageStore.next([...this.messageStore.value, message]));
  }
}
