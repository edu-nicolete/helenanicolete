import { Routes } from '@angular/router';

import { VendaComponent } from '../../venda/venda.component';
import { IncluirComponent } from '../../incluir/incluir.component';
import { NotificacaoComponent } from '../../notificacao/notificacao.component';
// import { TablesComponent } from '../../tables/tables.component';
// import { TypographyComponent } from '../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'incluir',      component: IncluirComponent },
    { path: 'venda',           component: VendaComponent },
    { path: 'notificacao',  component: NotificacaoComponent },
    // { path: 'table',          component: TablesComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
];
