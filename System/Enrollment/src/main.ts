import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Import your root AppComponent
import { appConfig } from './app/app.config';  // Import your application config

bootstrapApplication(AppComponent, appConfig);  // Bootstrapping your app with the config
