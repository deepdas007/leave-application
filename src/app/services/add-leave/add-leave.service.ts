import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddLeave } from 'src/app/models/addLeave';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddLeaveService {
  constructor(private http: HttpClient) {}

  addLeaveApplication(formData: AddLeave) {
    return this.http.post<{ name: string }>(
      environment.API_URL + '/leaves.json',
      formData
    );
  }
}
