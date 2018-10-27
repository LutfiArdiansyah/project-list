import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public api_url;
  // public api_url = 'http://localhost/Codeigniter/project_list/';

  constructor(private http: HttpClient) {
      this.api_url = location.origin + '/project_list/';
  }

  getData(link: string): Observable<any> {
    return this.http.get<any>(this.api_url + link);
  }

  postData(link: string, data: any): Observable<any> {
    return this.http.post<any>(this.api_url + link, data);
  }
}
