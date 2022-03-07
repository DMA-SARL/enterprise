import { BlogDetailComponent } from './pages/blogs/blog-detail/blog-detail.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About',
    }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {
      title: 'Services',
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact',
    }
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: {
      title: 'Faq',
    }
  },
  {
    path: 'blogs',
    component: BlogsComponent,
    data: {
      title: 'Blogs',
    }
  },
  {
    path: 'blogs/:blog',
    component: BlogDetailComponent,
    data: {
      title: 'Blog detail',
    }
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'Page not found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
