import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommingSoonComponent } from './pages/comming-soon/comming-soon.component';

const routes: Routes = [
  { path: '', redirectTo: 'comming-soon', pathMatch: 'full' },
  { path: 'comming-soon', component: CommingSoonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
