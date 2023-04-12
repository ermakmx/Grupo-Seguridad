import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { 
  GridModule,
  TableModule,
  ModalModule,
  FormModule,
  BadgeModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserFilterPipe } from './user.pipe';
import { GrupoSeguridadComponent } from './grupo-seguridad/grupo-seguridad.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFilterPipe,
    GrupoSeguridadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    IconModule,
    GridModule,
    TableModule,
    ModalModule,
    FormModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
