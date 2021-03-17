// // /*
// //  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
// //  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
// //  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// // /*
// //  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
// //  * остатка % и делим его на количество миллисекунд в одном часе
// //  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
// //  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// // /*
// //  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
// //  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
// //  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// // /*
// //  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
// //  * миллисекунд в одной секунде (1000)
// //  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);


new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});


class CountdownTimer {
  intervalId = null;

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`),
    };
  }

  timer() {
    if (this.targetDate > Date.now()) {
      this.intervalId = setInterval(() => {
        if (this.targetDate - 1001 < Date.now()) {
          clearInterval(intervalId);
        }
        const time = this.targetDate - Date.now();
        this.updateClockFace(time);
      }, 1000);
    }
  }
  updateClockFace(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

newCountDownTimer.timer();