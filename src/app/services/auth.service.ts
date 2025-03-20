import { SessionActions } from './../core/store/actions/session.actions';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@envs/environment.development';

import { AuthRegister_Dto, LoginAuth_Dto, Response_I, Session_Auth_I } from "@luiexplica/ia-dev-services"
import Backend_Api from '../core/api/axiosBase';
import { Store } from '@ngrx/store';
import { SessionStoreService } from '../core/store/services/session.store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  apiUrl = signal(environment._SERVICE + "/auth");
  sessionStoreService = inject(SessionStoreService);

  register(data: AuthRegister_Dto) {
    const url = `${this.apiUrl()}/register`;
    return Backend_Api.post(url, {
      ...data
    });

  }

  async login(login: LoginAuth_Dto): Promise<Response_I<Session_Auth_I>> {
    const url = `${this.apiUrl()}/login`;
    return new Promise(async (resolve, reject) => {

      this.sessionStoreService.onChecking();

      try {
        const resp: Response_I<Session_Auth_I> = await Backend_Api.post(url, {
          ...login
        });

        this.sessionStoreService.onLogin(resp.data!);
        this.setTokenLocalStorage(resp.data!.token);


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

      this.sessionStoreService.onChecking();

      try {
        const resp: Response_I<Session_Auth_I> = await Backend_Api.get(url);
        this.sessionStoreService.onLogin(resp.data!);
        this.setTokenLocalStorage(resp.data!.token)

        resolve(resp);

      } catch (error) {

        this.logout();
        reject(error);

      }

    })

  }

  logout() {
    this.sessionStoreService.onLogout();
    this.removeTokenLocalStorage();

  }

  setTokenLocalStorage(token: string) {
    localStorage.setItem(environment.localStorage.token, token);

  }

  removeTokenLocalStorage() {
    localStorage.removeItem(environment.localStorage.token);

  }

  getTokenLocalStorage() {
    return localStorage.getItem(environment.localStorage.token);

  }

}
