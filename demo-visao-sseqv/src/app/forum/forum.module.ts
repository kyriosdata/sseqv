import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'article/:article',
    component: ArticleComponent
  }
];

@NgModule({
  declarations: [HomeComponent, UserProfileComponent, ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ForumModule { }
