import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule} from './app-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalsListComponent } from './proposals/proposals-list.component';
import { ProposalsNewComponent } from './proposals/proposals-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalsListComponent,
    ProposalsNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
