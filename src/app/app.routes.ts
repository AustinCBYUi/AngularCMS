import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { ClientComponent } from './shared/components/client/client.component';
import { AddClientComponent } from './shared/components/add-client/add-client.component';
import { ViewClientComponent } from './shared/components/view-client/view-client.component';
import { EditClientComponent } from './shared/components/edit-client/edit-client.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: 'clients/:id', component: ViewClientComponent },
  { path: 'edit-client/:id', component: EditClientComponent }
];
