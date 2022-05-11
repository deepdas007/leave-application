import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ViewEmployeeService {
  constructor(private http: HttpClient) {}

  fetchEmployee() {
    return this.http.get(environment.API_URL + '/employee.json');
  }
}
