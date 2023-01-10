const title = $('#topPage');
const time = $('<h2>');
const main = $('.container');
const saveBtn = $('.saveBtn');
const currentHr = dayjs().hour();
const currentTime = dayjs().format('dddd, h:mma, D-MMM');
const hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let i = 0;



$(document).ready(function () {

    //this will add the current time under the title as an h2 and the class gives it css properties
    time.addClass('d-flex justify-content-center');
    time.text(currentTime);
    title.append(time);

    //uses the forEach method to go over the array hour
    //selecting the child of the element 'main' and adding the class depending what condition it is satisfying comparing the currentTime 
    //having trouble with the code if statements
hour.forEach(function(){
    
    let hourSec = $(main).children().eq(i);

    if (hour[i] == currentHr){
    hourSec.addClass('present')
    }else if (hour[i] < currentHr){
    hourSec.addClass('past');
    }else{
    hourSec.addClass('future');
    }

    i++;

});

//Code to save the textarea in loca storage
//Having trouble with it persisting after refresh

saveBtn.on('click', function(){
    let timeblocktext = $(this).siblings('textarea').val();
    
    
    localStorage.setItem(timeblocktext);

})

$(document).ready(function() {
    
    let timeblockText = localStorage.getItem('timeblockText');

    $('#timeblock-text').val(timeblockText);
});

});



//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down
//THEN I am presented with timeblocks for standard business hours
//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist