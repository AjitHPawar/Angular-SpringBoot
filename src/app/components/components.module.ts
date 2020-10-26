import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NoteBookComponent } from './note-book/note-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterUserComponent,
    DashboardComponent,
    FeedbackComponent,
    NoteBookComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
  ],
  exports: [
    LoginComponent,
    RegisterUserComponent,
    DashboardComponent,
    FeedbackComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
