'use strict';

function setAlarm(time, callback) {
	return (now) => {
		now = new Date();
		let hours = now.getHours();
		let minutes = now.getMinutes();
		if (hours < 10) {
			hours = '0' + hours;
		} else if (minutes < 10) {
			minutes = '0' + minutes;
		}
		now = hours + ':' + minutes;
		if (now === time) {
			callback();
		}
	}
}

function setDailyRhythm(wakeUpTime, bedTime) {
	setInterval(setAlarm(wakeUpTime, () => alert('Доброе утро, Вася!')), 1000);
	setInterval(setAlarm(bedTime, () => alert('Доброй ночи, Вася!')), 1000);
}

setDailyRhythm('07:39', '23:21');