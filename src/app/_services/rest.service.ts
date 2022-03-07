import { ContactService } from './contact.service';
import { CommentsService } from './comments.service';
import { BlogsService } from './blogs.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public blogs: BlogsService,
              public comments: CommentsService,
              public contact: ContactService) { }
}
