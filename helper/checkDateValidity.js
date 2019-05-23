function includeOtherJSFile(path) {
	document.write("<script type='text/javascript' src='" + path + "'></script>");
}
function ifDateValid(string) {
	var myCurrentDate = new Date();
	var currentYear = myCurrentDate.getFullYear();
	var currentMonth = myCurrentDate.getMonth() + 1;
	var currentDate = myCurrentDate.getDate();
	var year = string.substring(0, 4);
	var month = string.substring(4, 6);
	var date = string.substring(6);
	if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
		switch (month) {
			case "01":
				validDate = 31;
				break;
			case "02":
				validDate = 29;
				break;
			case "03":
				validDate = 31;
				break;
			case "04":
				validDate = 30;
				break;
			case "05":
				validDate = 31;
				break;
			case "06":
				validDate = 30;
				break;
			case "07":
				validDate = 31;
				break;
			case "08":
				validDate = 31;
				break;
			case "09":
				validDate = 30;
				break;
			case "10":
				validDate = 31;
				break;
			case "11":
				validDate = 30;
				break;
			case "12":
				validDate = 31;
				break;
		}
	}else{
		switch (month) {
			case "01":
				validDate = 31;
				break;
			case "02":
				validDate = 28;
				break;
			case "03":
				validDate = 31;
				break;
			case "04":
				validDate = 30;
				break;
			case "05":
				validDate = 31;
				break;
			case "06":
				validDate = 30;
				break;
			case "07":
				validDate = 31;
				break;
			case "08":
				validDate = 31;
				break;
			case "09":
				validDate = 30;
				break;
			case "10":
				validDate = 31;
				break;
			case "11":
				validDate = 30;
				break;
			case "12":
				validDate = 31;
				break;
		}
	}
	if (year < 2010 || month == "00" || date == "00" || month > 12) {
		result = false;
		return result;
	}else{
		if (year > currentYear) {
			result = false;
			return result;
		}
		if ((year == currentYear && month > currentMonth) || (year == currentYear && month == currentMonth && date > currentDate)) {
					result = false;
			return result;
		}
		if (date > validDate) {
			result = false;
			return result;
		}
	}
	return result = true;
}