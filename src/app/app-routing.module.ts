import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { NoteBookComponent } from './components/note-book/note-book.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registerUser', component: RegisterUserComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'notebook', component: NoteBookComponent },
  { path: 'admindashboard', component: AdminDashboardComponent },
  { path: 'userProfile', component: UserProfileComponent },
  {path:'products',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
