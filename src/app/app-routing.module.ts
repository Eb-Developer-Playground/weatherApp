import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './account/login.component';
import { AuthGuard } from './_helpers';
import { Role } from './_models';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);
const HomeModule = ()=>import('./home/home.module').then(x=>x.HomeModule)

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', loadChildren: HomeModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },

    // otherwise redirect to home(unrecognised routes)
    { path: '', redirectTo: 'home', pathMatch: "full" },
    { path: '**', redirectTo: ' ' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
