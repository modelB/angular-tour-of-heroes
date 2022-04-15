import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  template: `
    <div *ngIf="messageService.messages.length">
      <div class="header-wrap">
        <h2>Messages</h2>
        <button type="button" class="clear" (click)="messageService.clear()">
          Clear messages
        </button>
      </div>
      <div class='messages' *ngFor="let message of messageService.messages">
        {{ message }}
      </div>
    </div>
  `,
  styles: [
    `
  button
    height: 25px
    margin-left: 135px
    &:hover
      background-color: black
  .header-wrap
    display: flex
    align-items: center
  .messages
    display: flex
    justify-content: flex-start
  `,
  ],
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}
