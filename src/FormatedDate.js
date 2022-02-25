export default function FormatedDate(props) {
  let weeks = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let week = weeks[props.date.getDay()];
  let day = props.date.getDate();
  let year = props.date.getUTCFullYear();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.date.getMonth()];
  return `${week}, ${day} ${month}, ${year}`;
}
