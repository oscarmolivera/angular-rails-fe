import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalsListComponent } from './proposals/proposals-list.component';
import { ProposalsNewComponent } from './proposals/proposals-new.component';
import { ProposalsShowComponent } from './proposals/proposals-show.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent},
  { path: 'documents', component: DocumentsComponent },
  { path: 'proposals', component: ProposalsListComponent },
  { path: 'proposals/new', component: ProposalsNewComponent },
  { path: 'proposal/:id', component: ProposalsShowComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
