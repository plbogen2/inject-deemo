import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MyService } from './service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    {{url}}
  `,
})
export class PlaygroundComponent {
  private readonly service = inject(MyService);
  url: string;

  constructor() {
    this.url = this.service.getData();
  }
}

bootstrapApplication(PlaygroundComponent);
