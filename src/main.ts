import { bootstrapApplication } from '@angular/platform-browser';
import { UserListComponent } from './app/user-list/user-list.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(UserListComponent, {
  providers: [importProvidersFrom(HttpClientModule)]
}).catch(err => console.error(err));
