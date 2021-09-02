var members = {};

$(document).ready(function() {
    $.ajax(
        {
            url: "/data/members.json",
            success: function(result) {
                load2018Alumni(result[2018]);
                load2019Alumni(result[2019]);
                load2020Alumni(result[2020]);
                load2021Alumni(result[2021]);
                loadFourthYears(result[2022]);
                loadThirdYears(result[2023]);
                loadSecondYears(result[2024]);
                $('#allMembersContainer').html(members['fourthYears']+members['thirdYears']+members['secondYears']);
            }
        }
    );
});

function getHTMLString(person) {

    var classID = Math.floor(Math.random()*3);
    var className = ['green','red','blue'];
    var returnString = `<div class="member-container">
                            <div class="basic-details">
                                <img src="${person.img}" class="member-image">
                                <h3 class="member-name">${person.name}</h3>
                            </div>
                            <div class="inner-details ${className[classID]}">
                                <div class="social-info">`;

    if (person.github_url!="") {
        returnString+=`<span><a href="${person.github_url}"><i id="githubLogo" class="fab fa-github textLogo"></i></a></span>`;
    }

    if (person.linkedin_url!="") {
        returnString+=`<span><a href="${person.linkedin_url}"><i id="linkedinLogo" class="fab fa-linkedin-in textLogo"></i></a></span>`;
    }

    if (person.additional_url!="") {
        returnString+=`<span><a href="${person.additional_url}"><i id="globeLogo" class="fas fa-globe"></i></a></span>`;
    }

    returnString+=`</div></div></div>`;
    
    return returnString;
}

function loadFourthYears(fourthYears) {
    // Populate Fourth Years
    members['fourthYears'] = fourthYears.map(fourthYear => getHTMLString(fourthYear)).join('');
}

function loadThirdYears(thirdYears) {
    // Populate Third Years
    members['thirdYears'] = thirdYears.map(thirdYear => getHTMLString(thirdYear)).join('');
}

function loadSecondYears(secondYears) {
    // Populate Second Years
    members['secondYears'] = secondYears.map(secondYear => getHTMLString(secondYear)).join('');
}

function load2018Alumni(alumnis2018) {
    //  Populate 2019 alumnis
    members['alumnis2018'] = alumnis2018.map(alumni2018 => getHTMLString(alumni2018)).join('');
}

function load2019Alumni(alumnis2019) {
    //  Populate 2019 alumnis
    members['alumnis2019'] = alumnis2019.map(alumni2019 => getHTMLString(alumni2019)).join('');
}

function load2020Alumni(alumnis2020) {
    //  Populate 2020 alumnis
    members['alumnis2020'] = alumnis2020.map(alumni2020 => getHTMLString(alumni2020)).join('');
}

function load2021Alumni(alumnis2021) {
    //  Populate 2021 alumnis
    members['alumnis2021'] = alumnis2021.map(alumni2021 => getHTMLString(alumni2021)).join('');
}

// function to highlight selected tab on batchButton
$("#batchButtons button").on("click", function() {
    var buttons = $('#batchButtons').children();
    for (button of buttons) {
        $(button).removeClass("active-batch");
    }
    $(this).addClass("active-batch");
});

// function to highlight selected tab on "allMembersButtons" Bar
$("#allMembersButtons button").on("click", function() {
    var buttons = $('#allMembersButtons').children();
    for (button of buttons) {
        $(button).removeClass("active-batch");
    }
    $(this).addClass("active-batch");
   
    // if "presentMembers" tab selected, make "all" as selected Tab on "batchButtons"
    if (this == buttons[0])
    {
        let allbuttons = $('#batchButtons').children();
        for (allbutton of allbuttons) {
            $(allbutton).removeClass("active-batch");
        }
        $(allbuttons[0]).addClass("active-batch");
    }

    //if "Alumni" tab selected, make "all" as selected Tab on "alumniButtons"
    else if (this == buttons[1])
    {
        let allbuttons = $('#alumniButtons').children();
        for (allbutton of allbuttons) {
            $(allbutton).removeClass("active-batch");
        }
        $(allbuttons[0]).addClass("active-batch");
    }
});

// function to highlight selected tab on alumniButtons Bar
$("#alumniButtons button").on("click", function() {
   var buttons = $("#alumniButtons").children();
   for (button of buttons) {
       $(button).removeClass("active-batch");
   }
   $(this).addClass("active-batch");
});


// Event Listeners
function clickAllPresentMembers() {
    $('#allMembersContainer').html(members['fourthYears']+members['thirdYears']+members['secondYears']);
    //hide alumniButton Bar
    $("#alumniButtons").css("display", "none");
    //display present members batchButton
    $("#batchButtons").css("display", "inline-block");
}

function clickFourthYears() {
    $('#allMembersContainer').html(members['fourthYears']);
}

function clickThirdYears() {
    $('#allMembersContainer').html(members['thirdYears']);
}

function clickSecondYears() {
    $('#allMembersContainer').html(members['secondYears']);
}

function clickAllAlumni() {
    $('#allMembersContainer').html(members['alumnis2018']+members['alumnis2019']+members['alumnis2020']+members['alumnis2021']);

    //hide present members batchButton
    $("#batchButtons").css("display", "none");
    //show alumniButton
    $("#alumniButtons").css("display", "flex");
}

function click2018Alumni() {
    $('#allMembersContainer').html(members['alumnis2018']);
}

function click2019Alumni() {
    $('#allMembersContainer').html(members['alumnis2019']);
}

function click2020Alumni() {
    $('#allMembersContainer').html(members['alumnis2020']);
}
function click2021Alumni() {
    $('#allMembersContainer').html(members['alumnis2021']);
}
