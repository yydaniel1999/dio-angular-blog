import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: [
    './big-card.component.css',
    './big-card.responsive.component.css',
  ],
})
export class BigCardComponent {
  @Input()
  photo: string = '';
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  @Input()
  id: string = '0';
}
