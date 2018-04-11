var members = {};

$(document).ready(function() {
    $.ajax(
        {
            url: "/data/members.json",
            success: function(result) {
                loadFourthYears(result.fourthYears);
                loadThirdYears(result.thirdYears);
                loadSecondYears(result.secondYears);
                $('#allMembersContainer').html(members['fourthYears']+members['thirdYears']+members['secondYears']);
            }
        }
    );
})

function getHTMLString(person) {

    var classID = Math.floor(Math.random()*3);
    var className = ['green','red','blue'];

    return `<div class="member-container"><div class="basic-details"><img src="images/member.png" 
    class="member-image"> <h3 class="member-name">${person.name}</h3></div><div class="inner-details 
    ${className[classID]}"><div class="social-info"><span><a href="https://www.linkedin.com/in/gautham-kumar" 
    target="_blank"><i id="linkedinLogo" class="fab fa-linkedin-in textLogo"></i></a></span><span>
    <a href="https://www.github.com/gauthamk97" target="_blank"><i id="githubLogo" class="fab fa-github 
    textLogo"></i></a></span></div></div></div>`;
}

function loadFourthYears(fourthYears) {
    // Populate Fourth Years
    members['fourthYears'] = fourthYears.map(fourthYear => getHTMLString(fourthYear)).join();
}

function loadThirdYears(thirdYears) {
    // Populate Third Years
    members['thirdYears'] = thirdYears.map(thirdYear => getHTMLString(thirdYear)).join();
}

function loadSecondYears(secondYears) {
    // Populate Second Years
    members['secondYears'] = secondYears.map(secondYear => getHTMLString(secondYear)).join();
}

function handleActiveTab(selectedTab) {
    var buttons = $('#batchButtons').children();
    for (button of buttons) {
        $(button).removeClass("active-batch");
    }
    $(selectedTab).addClass("active-batch");
}

function clickAll() {
    $('#allMembersContainer').html(members['fourthYears']+members['thirdYears']+members['secondYears']);
    handleActiveTab(event.currentTarget);
}

function clickFourthYears() {
    $('#allMembersContainer').html(members['fourthYears']);
    handleActiveTab(event.currentTarget);
}

function clickThirdYears() {
    $('#allMembersContainer').html(members['thirdYears']);
    handleActiveTab(event.currentTarget);
}

function clickSecondYears() {
    $('#allMembersContainer').html(members['secondYears']);
    handleActiveTab(event.currentTarget);
}