import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Drinks {

  public name: string;
  public pris: number;

  constructor(name: string, pris: number) {

    this.name = name;
    this.pris = pris;
  }
}
