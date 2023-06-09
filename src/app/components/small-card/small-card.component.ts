import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.css',
    './small-card.responsive.component.css',
  ],
})
export class SmallCardComponent {
  @Input()
  photo: string = '';
  @Input()
  title: string = '';
  @Input()
  id: string = '0';
}
