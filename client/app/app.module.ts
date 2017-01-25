import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { createNewHosts, removeNgStyles } from '@angularclass/hmr';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {
  }

  public hmrOnInit(store) {
    console.log('HMR store', store);
  }

  public hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
