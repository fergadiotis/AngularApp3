import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ScheduleFormComponent } from './components/schedule-form/schedule-form.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ScheduleFormComponent,
        ScheduleListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }