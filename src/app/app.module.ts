import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { HomeComponent } from './components/home/home.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadbarComponent,
    HomeComponent,
    CourseDetailsComponent,
    ListCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
