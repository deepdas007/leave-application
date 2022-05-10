import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css'],
})
export class AddLeaveComponent implements OnInit {
  emp_id: string = '';
  f_name: string = '';
  l_name: string = '';
  leaveStartDate!: Date;
  leaveEndDate!: Date;
  minDateValue!: Date;
  maxDateValue!: Date;
  invalidDates: Array<Date> = [];
  leaveReason: string = '';

  leaveForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private primengConfig: PrimeNGConfig
  ) {
    this.leaveForm = this.formBuilder.group({
      emp_id: [''],
      f_name: [''],
      l_name: [''],
      leaveStartDate: [''],
      leaveEndDate: [''],
      leaveReason: [''],
    });
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
    console.log('This is min value', this.minDateValue);
  }

  onFormSubmit() {
    console.log('Form Value -', this.leaveForm.value);

    this.crudService.AddLeave(this.leaveForm.value).subscribe(
      (data) => {
        console.log('Leave Application Added Successfully!', data);
        // this.ngZone.run(() => this.router.navigateByUrl('/view-leave'))
      },
      (error) => {
        console.log('ERROR ON FORM SUBMIT -', error);
      }
    );
  }
}
