import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule} from './app-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentsService } from './documents/documents.service';
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
    NgbModule,
    FormsModule
  ],
  providers: [
    DocumentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
