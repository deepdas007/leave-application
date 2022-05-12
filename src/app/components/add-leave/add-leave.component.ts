import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { map, Observable, startWith } from 'rxjs';
import { AddLeaveService } from 'src/app/services/add-leave/add-leave.service';
import { ViewEmployeeService } from 'src/app/services/view-employee/view-employee.service';

interface LeaveTypes {
  name: string;
  value: string;
}

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css'],
})
export class AddLeaveComponent implements OnInit {
  emp_id: string = '';
  emp_username: string = '';
  f_name: string = '';
  l_name: string = '';
  leaveStartDate!: Date;
  leaveEndDate!: Date;
  leaveReason: string = '';
  leaveTypes: LeaveTypes[] = [];
  selectedLeaveType!: LeaveTypes;
  emp_info: Object = {};

  minDateValue!: Date;
  maxDateValue!: Date;
  invalidDates: Array<Date> = [];

  leaveForm: FormGroup;
  emp_details: any[] = [];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private addLeave: AddLeaveService,
    private primengConfig: PrimeNGConfig,
    private viewEmployeeService: ViewEmployeeService
  ) {
    this.leaveForm = this.formBuilder.group({
      emp_id: [''],
      f_name: [''],
      l_name: [''],
      leaveStartDate: [''],
      leaveEndDate: [''],
      selectedLeaveType: [''],
      leaveReason: [''],
    });

    this.leaveTypes = [
      {
        name: 'Paid Leave',
        value: 'paid_leave',
      },
      {
        name: 'Casual Leave',
        value: 'casual_leave',
      },
      {
        name: 'Sick Leave',
        value: 'sick_leave',
      },
      {
        name: 'Marriage Leave',
        value: 'marriage_leave',
      },
      {
        name: 'Maternity Leave',
        value: 'materinity_leave',
      },
      {
        name: 'Paternity Leave',
        value: 'paternity_leave',
      },
    ];
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;
    this.minDateValue = new Date();
    this.minDateValue.setMonth(prevMonth);
    this.minDateValue.setFullYear(prevYear);

    this.maxDateValue = new Date();
    this.maxDateValue.setMonth(nextMonth);
    this.maxDateValue.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
    //console.log('This is min value', this.minDateValue);

    this.viewEmployeeService.fetchEmployee().subscribe((data: any) => {
      console.log('List of Employees', data);
      for (let i = 0; i < data.length; i++) {
        this.emp_details.push(data[i]);
      }
      //console.log('Employee Details', this.emp_details);
    });
  }

  changeInput(event: any) {
    console.log(event);
  }

  onFormSubmit() {
    console.log('Form Value -', this.leaveForm.value);
    this.addLeave
      .addLeaveApplication(this.leaveForm.value)
      .subscribe((data) => {
        //console.log('Application submitted successfully', data);
        this.ngZone.run(() => this.router.navigateByUrl('/view-leave'));
      });
  }
}
