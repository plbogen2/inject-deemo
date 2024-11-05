import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    Hello world!
  `,
})
export class PlaygroundComponent {
  private readonly route = inject(ActivatedRoute);

  constructor() {
    this.route;
  }
}

bootstrapApplication(PlaygroundComponent);
