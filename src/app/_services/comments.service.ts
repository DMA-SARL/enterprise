import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  index(blogId: number, callback: any, link?: string) {
    const url = link || environment.api_url + 'blogs/'+ blogId +'/comments';

    this.http.get(url).subscribe({
      next: (response) => {
        callback(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  store(blogId: number, data: FormData, callback: any) {
    this.http.post(environment.api_url + 'blogs/'+ blogId +'/comments', data).subscribe({
      next: (response) => {
        callback(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
