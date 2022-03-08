import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }

  index(callback: any, link?: string) {
    this.http.get(link || environment.api_url + 'blogs').subscribe({
      next: (response) => {
        callback(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  show(id: number, callback: any) {
    this.http.get(environment.api_url + 'blogs/'+ id).subscribe({
      next: (response) => {
        callback(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
