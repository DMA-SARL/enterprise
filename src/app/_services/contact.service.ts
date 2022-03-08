import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  store(data: FormData, callback: any) {
    this.http.post(environment.api_url + 'contacts', data).subscribe({
      next: (response) => {
        callback(response);
      },
      error: (error)=> {
        console.error(error);
      }
    });
  }
}
