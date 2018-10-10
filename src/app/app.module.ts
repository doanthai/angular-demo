import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [ /* exported these compoennt is avaiable in this component */
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [ /* imported these component is avaiable in all component that declaration below. */
    BrowserModule,
    FormsModule,
  ],
  providers: [], /* auto inject component for Dependence injection */
  bootstrap: [AppComponent]
})
export class AppModule {
}
