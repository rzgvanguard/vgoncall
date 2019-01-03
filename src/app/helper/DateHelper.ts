export class DateHelper {
    public convertMonthToString(monthInt: Number): String {
        if (monthInt == 1) {
            return "January";
        }
        else if (monthInt == 2) {
            return "Februray";
        }
        else if (monthInt == 3) {
            return "March";
        }
        else if (monthInt == 4) {
            return "April";
        }
        else if (monthInt == 5) {
            return "May";
        }
        else if (monthInt == 6) {
            return "June";
        }
        else if (monthInt == 7) {
            return "July";
        }
        else if (monthInt == 8) {
            return "August";
        }
        else if (monthInt == 9) {
            return "September";
        }
        else if (monthInt == 10) {
            return "October";
        }
        else if (monthInt == 11) {
            return "November";
        }
        else if (monthInt == 12) {
            return "December";
        }
        else {
            return "Not Found";
        }
    }

    public static dateFromDay(year: number, day: number): Date {
        var date = new Date(year, 0); // initialize a date in `year-01-01`
        return new Date(date.setDate(day)); // add the number of days
    }
}