import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AddUser} from 'src/app/add-user'

//import {HttpClientService} from '../Service/http-client.service'
//import { Domain } from 'domain';


@Injectable({
  providedIn: 'root'})
export class HttpClientService {

  private baseUrl='http://localhost:8080/v1';

  constructor(
    private httpClient:HttpClient
  ) { }
 addUser(user:Object):Observable<Object>{
return this.httpClient.post(`${this.baseUrl}`+`/create`,user);
 }
 getUser():Observable<Object>{
   return this.httpClient.get(`${this.baseUrl}` + `/User`);
 }
 //getUserList():Observable<any>{
   //return this.httpClient.get(`${this.baseUrl}`);
 //}
 createUser(adduser:AddUser){
console.log('name'+adduser.name);
 }
 }
