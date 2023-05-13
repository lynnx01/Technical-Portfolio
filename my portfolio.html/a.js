const words = ['I am the code wizard behind the curtain', 'Beautiful websites, one line of code', 'Turns Designs into reality','and save the world from polluted web-design'];
let part;
let i = 0;
let offset = 0;
const len = words.length;
let forwards = true;
let skipCount = 0;
const skipDelay = 5;
const speed = 100;

const wordflick = () => {
  setInterval(() => {
    if (forwards) {
      if (offset >= words[i].length) {
        skipCount++;
        if (skipCount === skipDelay) {
          forwards = false;
          skipCount = 0;
        }
      }
    } else {
      if (offset === 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skipCount === 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    document.querySelector('.word').textContent = part;
  }, speed);
};

document.addEventListener('DOMContentLoaded', wordflick);



