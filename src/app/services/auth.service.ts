import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@envs/environment.development';

import { AuthRegister_Dto, Response_I } from "@luiexplica/ia-dev-services"

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  service = signal(environment._SERVICE + "/auth");
  private http = inject(HttpClient);

  register(data: AuthRegister_Dto){

    const url = this.service() + '/register';

    this.http.post<Response_I>(url, data).subscribe((res) => {
      console.log('res', res);
    });

  }

}
