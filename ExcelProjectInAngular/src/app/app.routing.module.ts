import {NgModule} from "@angular/core"
import {RouterModule,Routes} from "@angular/router"
import { ExcelhomeComponent } from './home/excelhome/excelhome.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { StudentdashboardComponent } from './home/studentdashboard/studentdashboard.component';
import { EmicalculatorComponent } from './home/emicalculator/emicalculator.component';
import { CanDeactivateGuard } from './home/Authguard/candeactivate.guard';


const Routes :Routes = [
    { path: 'home', component: ExcelhomeComponent,children:[{
    path: 'login', component: LoginComponent},
   
    { path: 'signup', component: SignupComponent}
    ] },
    { path: 'studentdashboard', component: StudentdashboardComponent,children:[{
        path: 'emicalculator', component: EmicalculatorComponent}  ] },
    // {
    //     path: 'emicalculator',component: EmicalculatorComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports :[
        RouterModule.forRoot(Routes),
    
    ],
    exports:[ RouterModule]
})

export class AppRoutingModule{}
    
