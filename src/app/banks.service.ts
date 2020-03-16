import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  
  constructor(private http: HttpClient,) { }

  getBankDetailByCity(City:string): Observable<any[]> {
    debugger;
    var api = '';
    api = "https://vast-shore-74260.herokuapp.com/banks?city=";
    api = api + City;
    return this.http.get<any[]>(api);
  }
  postuser(data: any): Observable<any> {
    return this.http.post<any[]>("api", data,);
  }
}
