import Countdown from './modules/countdown.js';
import Tooltip from './modules/tooltip.js';
import SmashGame from './modules/engine.js';
import Modal from './modules/modal.js';

Tooltip();

const halloweenTime = new Countdown('31 October 2024 00:00:00 GMT-0300');
halloweenTime.init();

    // function updateCountdown() {
        // const units = {
        //     days: 'dia',
        //     hours: 'hora',
        //     minutes: 'minuto',
        //     seconds: 'segundo'
        // }
        // function formatTime(number, unit) {
        //     const unitString = number === 1 ? unit : unit + 's'
        //     return `${number} <span class="subtitle">${unitString}</span>`
        // }
        // daysElement.innerHTML = formatTime(halloweenTime.total.days, units.days)
        // hoursElement.innerHTML = formatTime(halloweenTime.total.hours, units.hours)
        // minutesElement.innerHTML = formatTime(halloweenTime.total.minutes, units.minutes)
        // secondsElement.innerHTML = formatTime(halloweenTime.total.seconds, units.seconds)
    // }

    // updateCountdown()

    // setInterval(updateCountdown, 1000)


const modal = new Modal('#open', '#close', '#modalPlay', '.container-modal', '#title', '#text');
const game = new SmashGame('.square', '.enemy', '#time', '#score', '#play', modal);

game.init();
modal.init();
