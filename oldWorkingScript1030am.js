var i;
var j;
var k;
var groupNum;
var group = [];
var finishedGroups = [];
var newOrder = [];
var people = ["Erik", "Aaron", "Alicia", "Casie", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Luke", "Mary", "Michael", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "Brian", "Chelsea"];
var newNumPerGroup = [];
var buttonValue;
var groupButtonValue;

function buildNumPerGroup(people, buttonValue, groupSize) {
    newNumPerGroup = [];
    var peopleLength = people.length;
    var btnVal = buttonValue;
    console.log("People length: " + peopleLength + " Button Value: "+ btnVal);
    if (buttonValue != undefined) {
        var baseGroupVal = Math.floor(peopleLength / btnVal);
    } else {
        var baseGroupVal = groupSize;
    }

    console.log("Base group value: " + baseGroupVal);

    for (k = 0; k < buttonValue; k++){
        newNumPerGroup.push(baseGroupVal);
    }
    var remainder = peopleLength % btnVal;
    console.log("Remainder of peopleLength / buttonValue: " + remainder);
    for (k = 0; k < remainder; k++){
        newNumPerGroup[k]+=1;
    }
    console.log("Number of people per group: " + newNumPerGroup);
    return newNumPerGroup;
}

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

function defineGroupButtonBuilder(){
    for (k = 2; k < 11; k++) {
        $(".header").append("<button class='peopleSizeBtn' value='" + k + "'>" + k + "</button>");
    }
}

function buildGroups(btnVal, groupSizeBtn) {
    peopleForGroups = people.slice(0);
    newOrder = [];
    finishedGroups = [];
    if (btnVal != undefined){
        buttonValue = btnVal;
    } else {
        buttonValue = groupSizeBtn;
    }
    numPerGroup = buildNumPerGroup(peopleForGroups, buttonValue, 0);
    newOrder = shuffleArray(peopleForGroups);

    console.log("People array: " + peopleForGroups);
    console.log("Shuffled people: " + newOrder);

    for (j = 0; j < numPerGroup.length; j++) {
        group = [];
        groupNum = j + 1;
        console.log("////// Group " + groupNum + " //////");
        var length = numPerGroup[j];
        for ( k = 0; k < length; k++) {
            var person = newOrder.pop();
            group.push(person);
        }
        finishedGroups.push(group);
        console.log(group);
    }
}

function displayGroups() {

}

$(document).ready(function(){
    buttonBuilder();
    $(".header").append("<br><button class='generateBtn' value='generate'>Generate Groups</button><br>");
    $(".header").append("<p>Or choose how many people per group</p>");
    defineGroupButtonBuilder();
    $(".header").append("<br><button class='groupGenerateBtn' value='generate'>Generate Groups</button><br>");

    $(".header").on('click', ".groupBtn", function(){
        buttonValue = $(this).val();
        console.log("Button Value: "+buttonValue);
        if (buttonValue != undefined){
            groupButtonValue = undefined;
        }
    });

    $(".header").on('click', ".peopleSizeBtn", function(){
        groupButtonValue = $(this).val();
        console.log("Group Button Value: "+groupButtonValue);
        if (groupButtonValue != undefined){
            buttonValue = undefined;
        }
    });

    //--------Pick how many groups--------
    $(".header").on('click', ".generateBtn", function(){
        if (buttonValue == undefined) {
            alert("Please choose how many groups you would like");
        } else {
            buildGroups(buttonValue, undefined);
            $(".displayGroups").empty();
            $(".displayGroups").animate({fontSize: '1em'}, "slow");
            for (i = 0; i < finishedGroups.length; i++) {
                groupNum = i + 1;
                //$(".displayGroups").append("<div class='group" + groupNum + "'>Group " + groupNum+"<br>");
                $(".displayGroups").append("<div class='group"+groupNum+"'>Group " + groupNum + "<br></div>");
                for (k = 0; k < finishedGroups[i].length; k++) {
                    $(".group"+groupNum).hide().slideDown("slow").append("<br>" + finishedGroups[i][k] + "");

                }
            }
            $(".displayGroups").animate({fontSize: '1.25em'}, "slow");

            $(".displayGroups").css({backgroundColor: '#07AA9E'});
            $(".displayGroups").css({margin: '15px auto 15px auto'});
            $(".displayGroups").css({width: 'auto'});
        }
    });

    //--------Pick how many people per group-------
    $(".header").on('click', ".groupGenerateBtn", function(){
        if (buttonValue == undefined) {
            alert("Please choose how many people per group");
        } else {
            buildGroups(undefined, groupButtonValue);
            $(".displayGroups").empty();
            $(".displayGroups").animate({fontSize: '1em'}, "slow");
            for (i = 0; i < finishedGroups.length; i++) {
                groupNum = i + 1;
                //$(".displayGroups").append("<div class='group" + groupNum + "'>Group " + groupNum+"<br>");
                $(".displayGroups").append("<div class='group"+groupNum+"'>Group " + groupNum + "<br></div>");
                for (k = 0; k < finishedGroups[i].length; k++) {
                    $(".group"+groupNum).hide().slideDown("slow").append("<br>" + finishedGroups[i][k] + "");

                }
            }
            $(".displayGroups").animate({fontSize: '1.25em'}, "slow");

            $(".displayGroups").css({backgroundColor: '#07AA9E'});
            $(".displayGroups").css({margin: '15px auto 15px auto'});
            $(".displayGroups").css({width: 'auto'});
        }
    });
});