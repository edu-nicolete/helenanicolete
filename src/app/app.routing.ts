import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {InicioComponent} from './inicio/inicio.component';

const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        pathMatch: 'full',
    }
    // , {
    //     path: 'perfil',
    //     component: AdminLayoutComponent,
    //     children: [
    //         {
    //             path: '',
    //             loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    //         }]
    // },
    // {
    //     path: '**',
    //     redirectTo: 'venda'
    // }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: false
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
