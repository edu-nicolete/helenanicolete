import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { VendaComponent } from '../../venda/venda.component';
import { IncluirComponent } from '../../incluir/incluir.component';
import { NotificacaoComponent } from '../../notificacao/notificacao.component';
import { ModalNotificacaoComponent } from '../../notificacao/notificacao.component';
import { MatDialogModule } from '@angular/material/dialog';
// import { TablesComponent } from '../../tables/tables.component';
// import { TypographyComponent } from '../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LbdModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    MatDialogModule
  ],
  declarations: [
    IncluirComponent,
    VendaComponent,
    NotificacaoComponent,
    ModalNotificacaoComponent,
    // TablesComponent,
    // TypographyComponent,
    // IconsComponent,
    // MapsComponent,
    // UpgradeComponent
  ]
})

export class AdminLayoutModule {}
