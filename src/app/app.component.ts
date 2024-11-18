import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
    <header class="app-header">
      <h1 class="app-title">AngularApp3</h1>
      <p class="app-subtitle">Schedule Management System</p>
    </header>
    <main class="content-wrapper">
      <app-schedule-form></app-schedule-form>
      <app-schedule-list></app-schedule-list>
    </main>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp3';
}