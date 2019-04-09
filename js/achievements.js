var achievements = {};

$(document).ready(function() {
    $.ajax(
        {
            url: "/data/achievements.json",
            success: function(result) {
                loadHackathon(result["hackathons"]);
                $('#allAchievementsContainer').html(achievements['hackathons']);
            }
        }
    );
});

function getHTMLString(data) {

    var classID = Math.floor(Math.random()*3);
    var className = ['green','red','blue'];
    var hackathonResult = Number(data.position) == 1 ? "1st Prize" : data.position == 2 ? "2nd Prize" : "3rd Prize";

    var developers = data.developers;
    var developersString = '';
    for (var i=0; i<developers.length; i++) {
        developersString+=`<div class="dev">
                                <img src="${developers[i].img}" width="100px" class="dev-image">
                                <h3 class="dev-name">${developers[i].name}</h3>
                           </div>`;
    }

    var returnString = `<div class="hackathon-details">
                                <div class="hackathon-grid">
                                    <div class="flip-card">
                                        <div class="flip-card-front">
                                            <h3 class="subtopic">${data.name}</h3>
                                            <div class="content">
                                                <img src="${data.img}" class="hackathon-image">
                                                <div class="text-content">
                                                    <p class="hackathon-desc">
                                                        ${data.desc}
                                                        <h4 class="hackathon-prize"><strong>${hackathonResult}</strong></h4>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flip-card-back">
                                            <h3 class="subtopic">Participants</h3>
                                            <div class="participants">
                                                ${developersString}
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                        </div>`;

    
    return returnString;
}

function loadHackathon(hackathons) {
    // Populate Hackathons
    achievements['hackathons'] = hackathons.map(hackathon => getHTMLString(hackathon)).join();
}

function loadPlacements(placements) {
    // Populate Alumni's Placements
    achievements['placements'] = placements.map(placement => getHTMLString(placement)).join();
}

function loadMasters(masters) {
    // Populate Alumni's masters
    achievements['masters'] = masters.map(college => getHTMLString(college)).join();
}

// funtion to highlight selected tab on "Achievements" Bar
$("#achievementButtons button").on("click", function() {
    var buttons = $('#achievementButtons').children();
    for (button of buttons) {
        $(button).removeClass("active-batch");
    }
    $(this).addClass("active-batch");
   
    //if "Our Alumni" tab selected, make "Placements" as selected Tab on "alumniButtons"
    if (this == buttons[1])
    {
        let allbuttons = $('#alumniButtons').children();
        for (allbutton of allbuttons) {
            $(allbutton).removeClass("active-batch");
        }
        $(allbuttons[0]).addClass("active-batch");
    }
});

// function to highlight selected tab on "alumniButtons" Bar
$("#alumniButtons button").on("click", function() {
   var buttons = $("#alumniButtons").children();
   for (button of buttons) {
       $(button).removeClass("active-batch");
   }
   $(this).addClass("active-batch");
});


// Event Listeners
function clickAllHackathons() {
    $('#allAchievementsContainer').html(achievements['hackathons']);
    //hide alumniButton Bar
    $("#alumniButtons").css("display", "none");
}

function clickOurAlumni() {
    clickAllPlacements();

    //show alumniButton
    $("#alumniButtons").css("display", "inline-block");
}

function clickAllPlacements() {
    $('#allAchievementsContainer').html(achievements['placements']);
}

function clickAllMasters() {
    $('#allAchievementsContainer').html(achievements['masters']);
}