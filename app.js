class Timer {
  constructor() {
    const setTimerSection = document.getElementById("setTimerSection");
    const timerSection = document.getElementById("timerSection");
    const startButton = document.getElementsByClassName("startButton");
    const exitButton = document.getElementsByClassName("exitButton");
    const clockDiv = document.getElementById("clock");
    this.setTimerSection = setTimerSection;
    this.timerSection = timerSection;
    this.startButton = startButton[0];
    this.exitButton = exitButton[0];
    this.clockDiv = clockDiv;
    this.init();
  }
  init() {
    this.startButton.addEventListener("click", this.startTimer);
    this.exitButton.addEventListener("click", this.exitTimer);
  }

  startTimer = () => {
    const value = this.getInput().value;
    if (value && parseInt(value)) {
      this.setTimerSection.classList.add("hide");
      this.timerSection.classList.remove("hide");
      this.refreshClock(value);
      this.timer();
    } else {
      alert("value can not be empty");
    }
  };

  exitTimer = () => {
    const input = this.getInput();
    this.setTimerSection.classList.remove("hide");
    this.timerSection.classList.add("hide");
    this.refreshClock("");
    input.value = "";
  };
  getInput = () => {
    const timerInput = document.getElementById("timerInput");
    return timerInput;
  };
  refreshClock = (value) => {
    this.clockDiv.textContent = value;
  };
  timer = () => {
    const value = parseInt(this.clockDiv.textContent);
    if (value > 0) {
      setTimeout(() => {
        this.refreshClock(value - 1);
        this.timer();
      }, 1000);
    }
  };
}

new Timer();
