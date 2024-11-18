import { Component, OnInit } from '@angular/core';
// Fix the paths - we only need to go up two levels to reach app folder
import { Schedule } from '../../models/schedule.model';
import { ScheduleService } from '../../services/schedule.service';

@Component({
    selector: 'app-schedule-list',
    templateUrl: './schedule-list.component.html',
    styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
    schedules: Schedule[] = [];

    constructor(private scheduleService: ScheduleService) { }

    ngOnInit(): void {
        this.scheduleService.getSchedules().subscribe(
            schedules => this.schedules = schedules
        );
    }

    deleteSchedule(id: number): void {
        this.scheduleService.deleteSchedule(id);
    }
}