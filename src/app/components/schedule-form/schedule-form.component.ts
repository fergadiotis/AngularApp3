import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleService } from '../../services/schedule.service';

@Component({
    selector: 'app-schedule-form',
    templateUrl: './schedule-form.component.html',
    styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
    scheduleForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private scheduleService: ScheduleService
    ) {
        this.scheduleForm = this.fb.group({
            title: ['', Validators.required],
            date: ['', Validators.required],
            startTime: ['', Validators.required],
            endTime: ['', Validators.required],
            description: ['']
        });
    }

    ngOnInit(): void { }

    onSubmit(): void {
        if (this.scheduleForm.valid) {
            this.scheduleService.addSchedule({
                id: 0,
                ...this.scheduleForm.value,
                date: new Date(this.scheduleForm.value.date)
            });
            this.scheduleForm.reset();
        }
    }
}