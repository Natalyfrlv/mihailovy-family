import { Component, OnInit } from '@angular/core';
import { CountdownService } from '../../service/Countdown.service';
@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit {
  targetDate: Date = new Date('2026-03-19T12:00:00');
  timeLeft: any;
  constructor(private countdown: CountdownService) {}

  ngOnInit() {
    this.timeLeft = this.countdown.getTimeLeft(this.targetDate);
    setInterval(() => {
      this.timeLeft = this.countdown.getTimeLeft(this.targetDate);
    }, 1000);
  }
}