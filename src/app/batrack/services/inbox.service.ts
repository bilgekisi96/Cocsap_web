import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from './message.model';


@Injectable({
  providedIn: 'root'
})
export class InboxService {

  private messages: Message[] = [
    {
      id: 1,
      sender: 'Alice',
      subject: 'Meeting Reminder',
      body: 'Don’t forget the meeting tomorrow at 10 AM.',
      timestamp: new Date(),
      read: false
    },
    {
      id: 2,
      sender: 'Bob',
      subject: 'Project Update',
      body: 'The project is on track and should be completed by next week.',
      timestamp: new Date(),
      read: true
    }
    // More messages...
  ];


  constructor() { }

  getMessages(): Observable<Message[]> {
    return of(this.messages);
  }

  markAsRead(id: number): void {
    const message = this.messages.find(msg => msg.id === id);
    if (message) {
      message.read = true;
    }
  }

  deleteMessage(id: number): void {
    this.messages = this.messages.filter(msg => msg.id !== id);
  }


}
