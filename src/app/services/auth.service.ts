import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@envs/environment.development';
import { ApiHttpService } from '@core/services/api-http.service';

import { AuthRegister_Dto, Response_I } from "@luiexplica/ia-dev-services"
import Backend_Api from '../core/api/axiosBase';
import { handlerError } from '../core/api/handlerError';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  apiUrl = signal(environment._SERVICE + "/auth");
  // api = inject(ApiHttpService);

  register(data: AuthRegister_Dto) {

    const url = `${this.apiUrl()}/register`;
    return Backend_Api.post(url, {
      ...data
    });
    // let r: Response_I = handlerError(error);

  }

}
