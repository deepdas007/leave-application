import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewLeave } from 'src/app/models/viewLeave';
import { ViewEmployeeService } from 'src/app/services/view-employee/view-employee.service';
import { ViewLeaveService } from 'src/app/services/view-leave/view-leave.service';
import { DetailsLeaveComponent } from '../details-leave/details-leave.component';

@Component({
  selector: 'app-view-leave',
  templateUrl: './view-leave.component.html',
  styleUrls: ['./view-leave.component.css'],
})
export class ViewLeaveComponent implements OnInit {
  leaves: ViewLeave[] = [];

  constructor(
    private viewLeaveService: ViewLeaveService,
    private viewEmployeeService: ViewEmployeeService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.viewLeaveService.viewLeaveData().subscribe((data) => {
      // console.log('Recieved Data', data);
      this.leaves = data;
    });

    // this.viewEmployeeService.fetchEmployee().subscribe((data) => {
    //   console.log('List of Employees', data);
    // });
  }

  openDetails(leave: ViewLeave) {
    this.dialog.open(DetailsLeaveComponent, {
      data: leave,
      height: '100vh',
      width: '50vw',
    });
  }
}
