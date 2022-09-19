import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { InrToUsdPipe } from './pipes/inr-to-usd.pipe';
import { ReplacePipe } from './pipes/replace.pipe';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ChildComponent, InrToUsdPipe, ReplacePipe],
  imports: [BrowserModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
