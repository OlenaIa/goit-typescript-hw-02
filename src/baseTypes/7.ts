/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  monday = 'Monday',
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday"
};

const isWeekend = (day: WeekDays): boolean => {
  if (day === 'Saturday' || 'Sunday') {
    console.log(`${day} is weekend`);
    return true;
  } else {
    console.log(`${day} is workday`);
    return false;
  }
};

isWeekend(WeekDays.monday);



