
var i;
var j;
var k;
var group = [];
var finishedGroups = [];
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
    buttonValue = btnVal;
    var newOrder = shuffleArray(people);
    finishedGroups = [];

    for (j = 1; j < numPerGroup[buttonValue].length + 1; j++) {
        group = [];
        console.log("////// Group " + j + " //////");
        var length = numPerGroup[buttonValue][j];
        for ( k = 0; k < length; k++) {
            var person = newOrder.pop();
            group.push("<li>" + person + "</li>");
        }
        finishedGroups.push("<ul>"+group+"</ul>");
        console.log(group);
    }

    for (j = 0; j < newOrder.length; j++){
        newOrder[j] = "<li>" + newOrder[j] + "</li>";
        console.log("Add <li> to newOrder: " + newOrder[j]);
    }
    finishedGroups.push("<ul>" + newOrder + "</ul>");
    console.log("People left in newOrder list: " + newOrder);
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

            for (k = 0; k < finishedGroup[i].length; k++){

                
            }
        }
            $(".container").append(finishedGroups);


    });



});