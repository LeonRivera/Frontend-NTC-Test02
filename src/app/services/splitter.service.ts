import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplitterService {

  private baseUrl: string = "https://netc-test32.uc.r.appspot.com/api/v1";
  // private baseUrl: string = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient, private router:Router) { }


  splitSentence(input:string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/test/splitsentence?input=${input}`)
   

  }


}
