import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Provides the service at the root level
})
export class MyService {
  getData() {
    return 'Data from MyService';
  }
}