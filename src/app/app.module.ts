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
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildComponent,
    InrToUsdPipe,
    ReplacePipe,
    RedElementDirective,
    AboutComponent,
    UserComponent,
    PageNotFoundComponent,
    AboutMeComponent,
    AboutCompanyComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
