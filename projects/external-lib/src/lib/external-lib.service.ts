import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalLibService {

  _message: string;

  constructor() {
    this._message = "External lib service";
  }

  get message(): string {
    return this._message;
  }

  set message(message:string) {
    this._message = message;
  }

}
