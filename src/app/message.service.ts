import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    if (confirm('Are you sure u wanna clear?')) { //Could this be the issue?
      this.messages = [];
    }
  }
}
