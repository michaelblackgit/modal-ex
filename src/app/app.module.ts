import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ModalContent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalContent
  ],
  entryComponents: [
    ModalContent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
