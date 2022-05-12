import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrimeNGConfig } from 'primeng/api';
import { ViewLeave } from 'src/app/models/viewLeave';
import { UpdateLeaveService } from 'src/app/services/updateLeave/update-leave.service';

@Component({
  selector: 'app-details-leave',
  templateUrl: './details-leave.component.html',
  styleUrls: ['./details-leave.component.css'],
})
export class DetailsLeaveComponent implements OnInit {
  userData: Object[] = [];

  minDateValue!: Date;
  maxDateValue!: Date;
  invalidDates: Array<Date> = [];

  newForm: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ViewLeave,
    public formBuilder: FormBuilder,
    private updateLeaveService: UpdateLeaveService,
    private primengConfig: PrimeNGConfig
  ) {
    this.newForm = this.formBuilder.group({
      emp_id: data.emp_id,
      leaveStartDate: [''],
      leaveEndDate: [''],
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.userData.push(this.data);
    console.log(this.userData);

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
  }

  updateForm() {
    this.updateLeaveService.onUpdate(this.newForm.value).subscribe((data) => {
      console.log('Successfully Changed Database');
    });
  }
}
