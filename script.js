
var i;
var j;
var k;
var group = [];
var finishedGroups = [];
var newOrder = [];
var people = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];

var numPerGroup = [0,0, [10, 10], [7,7,6], [5, 5, 5, 5], [4, 4, 4, 4, 4], [4, 4, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3, 2], [3, 3, 3, 3, 2, 2, 2, 2], [3, 3, 2, 2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2] ];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function buttonBuilder(){
    for (j = 2; j < 11; j++) {
        $(".container").append("<button class='groupBtn' value='" + j + "'>" + j + "</button>");
    }
}

function buildGroups(btnVal) {
    people = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];
    newOrder = [];
    buttonValue = btnVal;
    var randomizeGroup = people;
    newOrder = shuffleArray(randomizeGroup);

    console.log("People array: " + people);
    console.log("Shuffled people: " + newOrder);

    finishedGroups = [];

    for (j = 0; j < numPerGroup[buttonValue].length; j++) {
        group = [];
        var groupNum = j + 1;
        console.log("////// Group " + groupNum + " //////");
        var length = numPerGroup[buttonValue][j];
        for ( k = 0; k < length; k++) {
            var person = newOrder.pop();
            group.push("<li>" + person + "</li>");
        }
        finishedGroups.push("<div class='" + j + "'+ <ul>"+group+"</ul></div>");
        console.log(group);
    }
}

$(document).ready(function(){

    buttonBuilder();
    $(".container").append("<br><button class='generateBtn' value='generate'>Generate Groups</button>");


    $(".container").on('click', ".groupBtn", function(){
        var buttonValue = $(this).val();
        console.log("Button Value: "+buttonValue);
        buildGroups(buttonValue);
    });

    $(".container").on('click', ".generateBtn", function(){
        for (i = 0; i < finishedGroups.length; i++) {
            var groupNum = i + 1;
            $(".displayGroups").append("Group " + groupNum + "<br>" + finishedGroups[i]);
            //$(".displayGroups").append(finishedGroups[i]);


        }


    });

});