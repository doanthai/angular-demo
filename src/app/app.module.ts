import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './component/app/app.component';
import {HeroesComponent} from './component/heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { AppRoutingModule } from './router/app-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ /* exported these compoennt is avaiable in this component */
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
  ],
  imports: [ /* imported these component is avaiable in all component that declaration below. */
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [], /* auto inject component for Dependence injection */
  bootstrap: [AppComponent]
})
export class AppModule {
}
