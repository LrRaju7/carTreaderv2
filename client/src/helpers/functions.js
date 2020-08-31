import moment from 'moment';

export const daysCalculator = (date) => {
  console.log(date)
  let d = new Date(date)
	var given = moment(d, "DD/MM/YYYY");
	var current = moment().startOf('day');

//Difference in number of days
	let res = moment.duration(given.diff(current)).asDays() 
	if (res > 1) return res + ' days';
	return res + ' day'

}

export const calculateTimeLeft = (datetime) => {
  const difference = +new Date(datetime) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};