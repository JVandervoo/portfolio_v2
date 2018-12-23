import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { BaseRoutes } from './components/base/base-routes.module';

const routes: Routes = [
    {
        path: "",
        component: BaseComponent,
        children: BaseRoutes
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
