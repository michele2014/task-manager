import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router'; 
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth-service/auth.service';
import { AuthGuardService } from './guards/auth-guard/auth-guard.service';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild([{
      path: 'users',
      component: UserListComponent
    }, {
      path: 'users/:id/edit',
      component: UserEditComponent
    }, {
      path: 'login',
      component: LoginComponent
    }])
  ],
  declarations: [UserEditComponent, UserListComponent, LoginComponent, UserDetailComponent],
  providers: [AuthService, AuthGuardService]
})
export class UserModule { }
