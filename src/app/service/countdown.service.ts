import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  getTimeLeft(target: Date) {
    const diff = target.getTime() - Date.now();

    return {
      days: Math.floor(diff / 1000 / 60 / 60 / 24),
      hours: Math.floor(diff / 1000 / 60 / 60) % 24,
      minutes: Math.floor(diff / 1000 / 60) % 60,
      seconds: Math.floor(diff / 1000) % 60,
    };
  }
}