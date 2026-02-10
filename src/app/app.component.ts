import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { DressCodeComponent } from './components/dress-code/dress-code.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { WishesComponent } from './components/wishes/wishes.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeroComponent,CountdownComponent, DressCodeComponent,ScheduleComponent,WishesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mihailovy-family';
}
