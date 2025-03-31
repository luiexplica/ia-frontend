
import { Injectable } from '@angular/core';
import { Response_I } from '@luiexplica/ia-dev-services';
import Backend_Api from '@api/axiosBase';
import { handlerError } from '@api/handlerError';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  async _post<T = any>(url: string, body: any): Promise<Response_I<T>> {
    return new Promise(async (resolve, reject) => {
      try {
        const resp: Response_I<T> = await Backend_Api.post(url, {
          ...body
        });
        resolve(resp);

      } catch (error) {
        const err = handlerError(error);
        reject(err as typeof err);

      }
    });

  }

  async _get<T = any>(url: string): Promise<Response_I<T>> {

    return new Promise(async (resolve, reject) => {

      try {
        const resp: Response_I<T> = await Backend_Api.get(url);
        resolve(resp);

      } catch (error) {
        const err = handlerError(error);
        reject(err as typeof err);

      }

    })

  }

  async _put<T = any>(url: string, body: any): Promise<Response_I<T>> {
    return new Promise(async (resolve, reject) => {
      try {
        const resp: Response_I<T> = await Backend_Api.put(url, {
          ...body
        });
        resolve(resp);

      } catch (error) {
        const err = handlerError(error);
        reject(err as typeof err);

      }

    });
  }

  async _delete<T = any>(url: string): Promise<Response_I<T>> {
    return new Promise(async (resolve, reject) => {
      try {
        const resp: Response_I<T> = await Backend_Api.delete(url);
        resolve(resp);

      } catch (error) {
        const err = handlerError(error);
        reject(err as typeof err);

      }

    });
  }

}
