class Clock {
  constructor() {
    let date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // console.log(this.hours);

    // setInterval(this._tick, 1000);

    // this.boundFunction = this._tick.bind(this);
    // setInterval(this.boundFunction, 1000);
    setInterval(this._tick.bind(this), 1000);

  }

  printTime() {
    let hours;
    let minutes;
    let seconds;

    if (this.hours < 10) {
      hours = '0' + this.hours.toString();
    } else {
       hours = this.hours;
    }
    if (this.minutes < 10) {
       minutes = '0' + this.minutes.toString();
    } else {
       minutes = this.minutes;
    }
    if (this.seconds < 10) {
       seconds = '0' + this.seconds.toString();
    } else {
       seconds = this.seconds;
    }

    let time = `${hours}:${minutes}:${seconds}`;
    console.log(time);

  }

  _tick(){
    this.seconds++;
    if (this.seconds >=60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes >= 60) {
      this.minutes = 0;
      this.hours++;
    }
    if (this.hours >= 24) {
      this.hours = 0;
    }
    this.printTime();

  }

}

  const clock = new Clock();
