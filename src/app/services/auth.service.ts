import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@envs/environment.development';

import { AuthRegister_Dto, LoginAuth_Dto, Response_I, Session_Response_I } from "@luiexplica/ia-dev-services"
import Backend_Api from '@api/axiosBase';
import { SessionStoreService } from '@core/store/services/session.store.service';
import { uiService } from '@core/services/ui.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  apiUrl = signal(environment._SERVICE + "/auth");
  sessionStore = inject(SessionStoreService);
  uiService = inject(uiService);

  register(data: AuthRegister_Dto) {
    const url = `${this.apiUrl()}/register`;
    return Backend_Api.post(url, {
      ...data
    });

  }

  async login(login: LoginAuth_Dto): Promise<Response_I<Session_Response_I>> {
    const url = `${this.apiUrl()}/login`;
    return new Promise(async (resolve, reject) => {

      this.sessionStore.onChecking();

      try {
        const resp: Response_I<Session_Response_I> = await Backend_Api.post(url, {
          ...login
        });
        const auth = resp.data!.auth;
        const client = resp.data!.client;

        this.sessionStore.onLogin(auth, client);
        this.setTokenLocalStorage(auth.token);

        resolve(resp);

      } catch (error) {

        this.logout();
        reject(error);

      }

    })
  }

  async checkSession() {
    const url = `${this.apiUrl()}/verify`;
    return new Promise(async (resolve, reject) => {

      this.sessionStore.onChecking();

      try {

        if (!this.getTokenLocalStorage()) {
          throw new Error('No token found in local storage');
        }

        const resp: Response_I<Session_Response_I> = await Backend_Api.get(url);
        const auth = resp.data!.auth;
        const client = resp.data!.client;
        this.sessionStore.onLogin(auth, client);
        this.setTokenLocalStorage(auth.token);

        resolve(resp);

      } catch (error) {

        this.logout();
        reject(error);

      }

    })

  }

  logout() {
    this.sessionStore.onLogout();
    this.removeTokenLocalStorage();

  }

  setTokenLocalStorage(token: string) {
    localStorage.setItem(environment.localStorage.token, token);

  }

  removeTokenLocalStorage() {
    const token = this.getTokenLocalStorage();
    if(token){
      localStorage.removeItem(environment.localStorage.token)
      this.uiService.emitToast({
        title: 'Vuelva pronto..!',
        type: 'success',
      })
    }

  }

  getTokenLocalStorage() {
    return localStorage.getItem(environment.localStorage.token);

  }

}
