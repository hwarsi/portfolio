function days() {
    var cday = current_date.getDay();
    var day1 = $("#day1");
    var day2 = $("#day2");
    var day3 = $("#day3");
    var day4 = $("#day4");
    var day5 = $("#day5");
    var day6 = $("#day6");
    var day7 = $("#day7");

if (cday === 0){
day1.text('Sunday');
day2.text('Monday');
day3.text('Tuesday');
day4.text('Wednesday');
day5.text('Thursday');
day6.text('Friday');
day7.text('Saturday');
} if (cday === 1){
    day1.text('Monday');
    day2.text('Tuesday');
    day3.text('Wednesday');
    day4.text('Thursday');
    day5.text('Friday');
    day6.text('Saturday');
    day7.text('Sunday');
} if (cday === 2){
    day1.text('Tuesday');
    day2.text('Wednesday');
    day3.text('Thursday');
    day4.text('Friday');
    day5.text('Saturday');
    day6.text('Sunday');
    day7.text('Monday');
} if (cday === 3){
    day1.text('Wednesday');
    day2.text('Thursday');
    day3.text('Friday');
    day4.text('Saturday');
    day5.text('Sunday');
    day6.text('Monday');
    day7.text('Tuesday');
} if (cday === 4){
    day1.text('Thursday');
    day2.text('Friday');
    day3.text('Saturday');
    day4.text('Sunday');
    day5.text('Monday');
    day6.text('Tuesday');
    day7.text('Wednesday');
} if (cday === 5){
    day1.text('Friday');
    day2.text('Saturday');
    day3.text('Sunday');
    day4.text('Monday');
    day5.text('Tuesday');
    day6.text('Wednesday');
    day7.text('Thursday');
} if (cday === 6){
    day1.text('Saturday');
    day2.text('Sunday');
    day3.text('Monday');
    day4.text('Tuesday');
    day5.text('Wednesday');
    day6.text('Thursday');
    day7.text('Friday');
}}



