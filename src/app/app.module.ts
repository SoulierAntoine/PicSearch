import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormPicComponent } from './components/form-pic/form-pic.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DetailPicComponent } from './components/detail-pic/detail-pic.component';

import { PixabayService } from './services/pixabay.service';




@NgModule({
  declarations: [
    AppComponent,
    FormPicComponent,
    NavbarComponent,
    FooterComponent,
    DetailPicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [PixabayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
