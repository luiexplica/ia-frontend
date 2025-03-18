
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  private _http = inject(HttpClient);

  _get<T = any>(url: string) {
    return this._http.get(url).pipe(
      map((resp: any) => {
        const r: T = resp;
        return r;
      }),
      catchError((err) => {
        return err
      })
    );

  }

 _post(url: string, data: any) {
    return this._http.post(url, data).pipe(
      map((resp) => resp),
      catchError((err: HttpErrorResponse) => {
        console.error('[Entire error]', err);
        const error = err.error;
        return throwError(() => error);
      })
    );
  }

  _put<T = any>(url: string, data: any) {
    return this._http.put(url, data).pipe(
      map((resp: any) => {
        const r: T = resp;
        return r;
      }),
      catchError((err) => {
        return err
      })
    );

  }

  _delete<T = any>(url: string) {
    return this._http.delete(url).pipe(
      map((resp: any) => {
        const r: T = resp;
        return r;
      }),
      catchError((err) => {
        return err
      })
    );

  }

}
