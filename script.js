console.log(moment().format());
console.log(moment().format("h A"));

// Define hours variable
var hours = [9,10,11,12,1,2,3,4,5];

// display local storage
if (localStorage !== null) {
    for (var i=0; i<hours.length; i++) {
    currentKey = hours[i];
    var content = localStorage.getItem(currentKey);
    $("#input"+currentKey).val(content);
};
};

// save button
$(".saveBtn").on("click", function() {
    event.preventDefault();
    var relatedInput = $(this).parent().siblings(".input-info").children("textarea").val();
    var time = hours[$(this).attr("value")];
    localStorage.setItem(time, relatedInput);
});

// past present or future?
var currentHour = moment().startOf("hour");

for (var j=9;j<18;j++) {
    var test = j;
    var convert = moment(test, "hh").format("h");
    if (currentHour.isAfter(moment(test,'h'))) {
        $("#input"+ convert).attr("class","past")
    }
    else if (currentHour.isSame(moment(test,'h'))) {
        $("#input"+convert).attr("class","present")
    }
    else if (currentHour.isBefore(moment(test,'h'))) {
        $("#input"+convert).attr("class","future")
    }
}

//display day
$("#currentDay").text(moment().format('MMMM Do, YYYY'));