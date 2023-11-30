import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// se debe importtar la libreria que se va utilizando para poder utilizar los componentes
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';



// aca se inmgresan los componentes que se van creando
@NgModule({
  declarations: [
    AppComponent,

  ],
  // los module se ponen siempre en los imports
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
