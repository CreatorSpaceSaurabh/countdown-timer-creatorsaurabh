import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countdown';
  remainingDays : any;
  remainingHours : any;
  remainingMinutes : any;
  remainingSeconds : any;

  ngOnInit(){
    setInterval(this.countdown,1000);
  }

  ngAfterViewInit(){
    setInterval(()=>{
      this.countdown();
    },1000);
  }

  countdown(){
    const countDate = new Date('June 16, 2021 00:00:00').getTime();
    // console.log("\n\n countdown=",countDate);
    const now = new Date().getTime();
    const differenceDate = countDate - now;

    // Timing logic
    const second = 1000;        //1sec equals 1000ms
    const minute = second * 60  // 1min equals 60sec
    const hour = minute * 60    // 1 hr equals 60min
    const day = hour * 24       // 1 day equals 24hours

    // Calculate remaining days logic
    this.remainingDays = Math.floor(differenceDate / day) ;
    this.remainingHours = Math.floor((differenceDate % day) / hour);
    this.remainingMinutes = Math.floor((differenceDate % hour) / minute);
    this.remainingSeconds = Math.floor((differenceDate % minute) / second);


  }
}
