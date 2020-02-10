import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { AllBlogsComponent } from './admin/all-blogs/all-blogs.component';
import { AddBlogComponent } from './admin/add-blog/add-blog.component';
import { UpdateBlogComponent } from './admin/update-blog/update-blog.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'blog/:id',component:BlogDetailsComponent},
  {path:'admin', component:AdminComponent,
    children:[
      {path:'all-blogs', component:AllBlogsComponent},
      {path:'add-blog', component:AddBlogComponent},
      {path:'update-blog/:id',component:UpdateBlogComponent}
    ]
  },
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
