var i;
var j;
var k;
var groupNum;
var group = [];
var finishedGroups = [];
var newOrder = [];
var people = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];
var numPerGroup = [0,0, [10, 10], [7,7,6], [5, 5, 5, 5], [4, 4, 4, 4, 4], [4, 4, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3, 2], [3, 3, 3, 3, 2, 2, 2, 2], [3, 3, 2, 2, 2, 2, 2, 2, 2], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2] ];

function buildNumPerGroup(peopleArray)

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
        $(".header").append("<button class='groupBtn' value='" + j + "'>" + j + "</button>");
    }
}

function buildGroups(btnVal) {
    people = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];
    newOrder = [];
    finishedGroups = [];
    buttonValue = btnVal;
    newOrder = shuffleArray(people);

    console.log("People array: " + people);
    console.log("Shuffled people: " + newOrder);

    for (j = 0; j < numPerGroup[buttonValue].length; j++) {
        group = [];
        groupNum = j + 1;
        console.log("////// Group " + groupNum + " //////");
        var length = numPerGroup[buttonValue][j];
        for ( k = 0; k < length; k++) {
            var person = newOrder.pop();
            group.push(person);
        }
        finishedGroups.push(group);
        console.log(group);
    }
}

$(document).ready(function(){
    buttonBuilder();
    $(".header").append("<br><button class='generateBtn' value='generate'>Generate Groups</button>");

    $(".header").on('click', ".groupBtn", function(){
        var buttonValue = $(this).val();
        console.log("Button Value: "+buttonValue);
        buildGroups(buttonValue);
    });

    $(".header").on('click', ".generateBtn", function(){
        $(".displayGroups").empty();
        $(".displayGroups").animate({fontSize: '1em'}, "slow");
        for (i = 0; i < finishedGroups.length; i++) {
            groupNum = i + 1;
            //$(".displayGroups").append("<div class='group" + groupNum + "'>Group " + groupNum+"<br>");
            $(".displayGroups").append("<div>Group " + groupNum+"<br></div>");
            for (k = 0; k < finishedGroups[i].length; k++) {
                $(".displayGroups").hide().slideDown("slow").append("<br>" + finishedGroups[i][k] + "");
            }
            $(".displayGroups").append("");
        }
        $(".displayGroups").animate({fontSize: '1.25em'}, "slow");
        $(".displayGroups").css({backgroundColor: '#07AA9E'});
        $(".displayGroups").css({margin: '15px auto 15px auto'});
        $(".displayGroups").css({width: 'auto'});
    });
});