//IMPORTANT: Set this variable to the port where you're hosting to access members data
var port='8000';

$(document).ready(function() {
    $.ajax(
        {
            url: "http://localhost:"+port+"/data/members.json", //REMINDER : Set port variable at line 2
            success: function(result) {

                // Populate Fourth Years
                var members = result.fourthYears;
                for (var i = 0;i<members.length;i++) {
                    $('#allMembersContainer').append('<div class="member-container"><div class="basic-details"><img src="images/member.png" class="member-image"><h3 class="member-name">'+members[i].name+'</h3></div><div class="inner-details"><h5>Interests</h5><h5>Full Stack Development, Music</h5><div class="social-info"><span><a href="https://www.linkedin.com/in/gautham-kumar" target="_blank"><i id="linkedinLogo" class="fab fa-linkedin-in textLogo"></i></a></span><span><a href="https://www.github.com/gauthamk97" target="_blank"><i id="githubLogo" class="fab fa-github textLogo"></i></a></span></div></div></div>');
                }

                // Pupulate Third Years
                var members = result.thirdYears;
                for (var i = 0;i<members.length;i++) {
                    $('#allMembersContainer').append('<div class="member-container"><div class="basic-details"><img src="images/member.png" class="member-image"><h3 class="member-name">'+members[i].name+'</h3></div><div class="inner-details"><h5>Interests</h5><h5>Full Stack Development, Music</h5><div class="social-info"><span><a href="https://www.linkedin.com/in/gautham-kumar" target="_blank"><i id="linkedinLogo" class="fab fa-linkedin-in textLogo"></i></a></span><span><a href="https://www.github.com/gauthamk97" target="_blank"><i id="githubLogo" class="fab fa-github textLogo"></i></a></span></div></div></div>');
                }

                // Populate Second Years
                var members = result.secondYears;
                for (var i = 0;i<members.length;i++) {
                    $('#allMembersContainer').append('<div class="member-container"><div class="basic-details"><img src="images/member.png" class="member-image"><h3 class="member-name">'+members[i].name+'</h3></div><div class="inner-details"><h5>Interests</h5><h5>Full Stack Development, Music</h5><div class="social-info"><span><a href="https://www.linkedin.com/in/gautham-kumar" target="_blank"><i id="linkedinLogo" class="fab fa-linkedin-in textLogo"></i></a></span><span><a href="https://www.github.com/gauthamk97" target="_blank"><i id="githubLogo" class="fab fa-github textLogo"></i></a></span></div></div></div>');
                }
            }
        }
    );
})