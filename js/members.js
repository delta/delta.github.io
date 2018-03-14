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
                    $('#allMembersContainer').append('<div class="member-container"><img src="images/member.png" width="120px" class="member-image"><h3 class="member-name">'+members[i].name+'</h3>')
                }

                // Pupulate Third Years
                var members = result.thirdYears;
                for (var i = 0;i<members.length;i++) {
                    $('#allMembersContainer').append('<div class="member-container"><img src="images/member.png" width="120px" class="member-image"><h3 class="member-name">'+members[i].name+'</h3>')
                }

                // Populate Second Years
                var members = result.secondYears;
                for (var i = 0;i<members.length;i++) {
                    $('#allMembersContainer').append('<div class="member-container"><img src="images/member.png" width="120px" class="member-image"><h3 class="member-name">'+members[i].name+'</h3>')
                }
            }
        }
    );
})