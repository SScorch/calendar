var currentDate = new Date();
var currentYear = currentDate.getYear()+1900;
var currentMonth = currentDate.getMonth();
window.onload = function() {
	document.getElementById("month").value = currentMonth+1;
	document.getElementById("year").value = currentYear;
	calendar(currentMonth, currentYear);
}
function calendar(month, year) {
	var d = new Date(year, month);
	var table = '<table><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Нд</th></tr><tr>';
	
	for (var i=0; i<getDay(d); i++) {
		table += '<td></td>';
	}
	while(d.getMonth() == month) {
		table += '<td>'+d.getDate()+'</td>';
		if (getDay(d) % 7 == 6) { 
			table += '</tr><tr>';
		}
		d.setDate(d.getDate()+1);
	}

	if (getDay(d) != 0) {
		for (var i=getDay(d); i<7; i++) {
			table += '<td></td>';
		}
	}

	table += '</tr></table>';
	document.getElementById("calendar").innerHTML = table;

	function getDay(date) { 
		var day = date.getDay();
		if (day == 0) day = 7;
		return day - 1;
	}
	
	
 }
