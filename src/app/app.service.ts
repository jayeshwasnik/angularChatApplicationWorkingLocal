import { Injectable } from '@angular/core';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

//to use http params
import{HttpHeaders,HttpParams} from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public baseUrl="https://chatapi.edwisor.com/api/v1";
  
  public apiKey='NzE3YTZlODRmYzI3NzczMDc3MjM2YjJmOTFmZTkzMTM5YTk0ZjQ0NmI5YjUyYTQ3ODhhYzQ3OThhZjI5ODEzMzdiYzVmMDRhMDcyMWQzZjQ5MWIzNmEwOTRmNjQ5ODcyZmUzZmYzOGI1NzY2ZGE1NmRjMTVkYWRlM2NmZWYxZmRkNw==';

  constructor(public http:HttpClient) { }

  public userSignup(data):Observable<any>{
    const params=new HttpParams()
    .set("firstName",data.firstName)
      .set("password",data.password)
        .set("lastName",data.lastName)
          .set("email",data.email)
            .set("mobileNumber	",data.mobileNumber	)
              .set("apiKey",this.apiKey);
              return this.http.post(`${this.baseUrl}/users/signup`,params);
    

  }

  

  public setUserInfoInLocalStorage(data){
    localStorage.setItem("userInfo",JSON.stringify(data));
  }

  public userLogin(data){
    const params=new HttpParams()
      .set("password",data.password)
          .set("email",data.email);
   return this.http.post(`${this.baseUrl}/users/login`,params);

  }

}
