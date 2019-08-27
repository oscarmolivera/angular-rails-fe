import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule} from './app-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalsListComponent } from './proposals/proposals-list.component';
import { ProposalsNewComponent } from './proposals/proposals-new.component';
import { ProposalsShowComponent } from './proposals/proposals-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalsListComponent,
    ProposalsNewComponent,
    ProposalsShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
