import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  index(blogId: number, callback: any, page?: number) {
    const url = environment.api_url + 'blogs/'+ blogId +'/comments' + page ? '?page=' + page : '';

    this.http.get(url).subscribe({
      next: (response) => {
        callback(response);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Done');
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
      },
      complete: () => {
        console.log('Done');
      }
    });
  }
}
