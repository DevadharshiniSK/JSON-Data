import{HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }
  GetallUsers(){
    return this.http.get("http://localhost:3000");
  }
}
