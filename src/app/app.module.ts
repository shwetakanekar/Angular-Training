import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { InrToUsdPipe } from './pipes/inr-to-usd.pipe';
import { ReplacePipe } from './pipes/replace.pipe';
import { RedElementDirective } from './red-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildComponent,
    InrToUsdPipe,
    ReplacePipe,
    RedElementDirective,
  ],
  imports: [BrowserModule, FormsModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
