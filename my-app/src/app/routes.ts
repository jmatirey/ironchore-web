import { AwardCreateComponent } from './components/awards/award-create/award-create.component';
import { ChoreCreateComponent } from './components/chores/chore-create/chore-create.component';
import { AwardsComponent } from './components/awards/awards.component';
import { KiddashboardComponent } from './components/kiddashboard/kiddashboard.component';
import { KidregisterComponent } from './components/user/kidregister/kidregister.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ChoresComponent } from './components/chores/chores.component';
import { HomeworkListComponent } from './components/kiddashboard/homework-list/homework-list.component';
import { PrizeListComponent } from './components/kiddashboard/prize-list/prize-list.component';

export const appRoutes: Routes = [
  { path: '' , redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: HomeComponent, children: [{ path:'', component: RegisterComponent }]},
  { path: 'login', component: HomeComponent, children: [{ path:'', component: LoginComponent }]},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kidregister', component: KidregisterComponent },
  { path: 'kiddashboard', component: KiddashboardComponent },
  { path: 'chores', component: ChoresComponent },
  { path: 'chorescreate', component: ChoreCreateComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'awardscreate', component: AwardCreateComponent },
  { path: 'homeworks', component: HomeworkListComponent },
  { path: 'prizes', component: PrizeListComponent }
  // { path: '**', component: NotFound }
]