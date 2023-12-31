import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';


const routes: Routes = [
    
        {
        path: '', component: HomeComponent,
        children: [
            { path: '', component: HomeNavbarComponent }
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }