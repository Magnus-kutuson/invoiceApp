import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { invoiceFeature } from './Stores/reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { InvoiceEffects } from './Stores/effects';
import { provideToastr } from 'ngx-toastr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState(invoiceFeature),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(InvoiceEffects),
    provideAnimationsAsync(),
    provideToastr({ positionClass: 'toast-top-center' }),
  ],
};
