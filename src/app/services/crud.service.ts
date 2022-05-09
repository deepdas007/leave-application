import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LeaveApp } from './leaveApp';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

   // Add
  AddLeave(data: LeaveApp): Observable<any> {
    let API_URL = `${this.REST_API}/add-leave`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

   // Get all objects
  GetLeaves() {
    return this.http.get(`${this.REST_API}`);
  }

  // Get single object
  GetLeave(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/read-leave/${id}`;
    return this.http.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

  // Update
  updateLeave(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update-leave/${id}`;
    return this.http.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }

  // Delete
  deleteLeave(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-leave/${id}`;
    return this.http.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
