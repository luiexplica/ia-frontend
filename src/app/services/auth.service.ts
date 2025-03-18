import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@envs/environment.development';
import { ApiHttpService } from '@core/services/api-http.service';

import { AuthRegister_Dto, Response_I } from "@luiexplica/ia-dev-services"
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  apiUrl = signal(environment._SERVICE + "/auth");
  api = inject(ApiHttpService);

  register(data: AuthRegister_Dto): Promise<Response_I> {

    const url = `${this.apiUrl()}/register`;
    return new Promise(async (resolve, reject) => {
      this.api._post(url, data).subscribe((resp: Response_I) => {
        resolve(resp);
      }, (err: Response_I) => {
        reject(err as Response_I);
      })

    })
  }

}
