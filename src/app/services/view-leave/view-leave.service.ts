import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { ViewLeave } from 'src/app/models/viewLeave';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ViewLeaveService {
  constructor(private http: HttpClient) {}

  viewLeaveData() {
    return this.http
      .get<{ [key: string]: ViewLeave }>(environment.API_URL + '/leaves.json')
      .pipe(
        map((response) => {
          const leaveArr: ViewLeave[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              leaveArr.push({ ...response[key], id: key });
            }
          }

          return leaveArr;
        })
      );
  }
}

// .pipe(
//   map((response) => {
//     const leaveArr: any[] = [];

//     for (const key in response) {
//       if (response.hasOwnProperty(key)) {
//         leaveArr.push({ ...response[key], id: key });
//       }
//     }

//     return leaveArr;
//   })
// )
