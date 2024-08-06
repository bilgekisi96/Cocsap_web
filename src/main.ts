<<<<<<< HEAD
=======
<<<<<<< HEAD
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
=======
>>>>>>> 1a638437eca69f8c69b80856a63b3aaf442f6ced
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

<<<<<<< HEAD

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
=======
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
>>>>>>> 3ba36a2 (initial commit)
>>>>>>> 1a638437eca69f8c69b80856a63b3aaf442f6ced
