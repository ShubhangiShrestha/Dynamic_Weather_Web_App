const currDate=document.getElementById("date");

let wIcon=document.getElementById("weatherIcon");

const getCurrentDay = () => {
	var weekday= new Array(7);
	weekday[0]="Sun";
	weekday[1]="Mon";
	weekday[2]="Tue";
	weekday[3]="Wed";
	weekday[4]="Thu";
	weekday[5]="Fri";
	weekday[6]="Sat";
	const now= new Date();
	let day=weekday[now.getDay()];
	console.log(day);
	return day;
};
const getCurrentTime = () => {
	var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var currentTime = new Date();
	var month= months[currentTime.getMonth()+1];
	var date= currentTime.getDate();
	var hours= currentTime.getHours();
	var mins=currentTime.getMinutes();
	let period="AM";
	if(hours>11){
		period="PM";
		if(hours > 12){
			hours-=12;
		}
		if(mins<10){
			mins = "0"+mins;
		}
	}
	return `${month} ${date} | ${hours}:${mins}${period}`;
};

currDate.innerHTML = `${getCurrentDay()} | ${getCurrentTime()}`;