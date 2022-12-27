import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestService {

  url : string = "http://localhost:3000/Users/"
  constructor(private http : HttpClient) { }

}