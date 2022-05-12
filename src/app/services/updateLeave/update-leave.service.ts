import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UpdateLeaveService {
  constructor(private http: HttpClient) {}

  onUpdate(form: any) {
    return this.http.post(environment.API_URL + '/leaves.json', form);
  }
}
