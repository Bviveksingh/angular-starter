import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { AddBlogComponent } from './admin/add-blog/add-blog.component';
import { AllBlogsComponent } from './admin/all-blogs/all-blogs.component';
import { UpdateBlogComponent } from './admin/update-blog/update-blog.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AlertDialogBodyComponent } from './alert-dialog-body/alert-dialog-body.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { TagComponent } from './material-components/tag/tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddBlogComponent,
    AllBlogsComponent,
    UpdateBlogComponent,
    LoginComponent,
    HomepageComponent,
    BlogDetailsComponent,
    AlertDialogBodyComponent,
    DialogBodyComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents:[DialogBodyComponent,AlertDialogBodyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
