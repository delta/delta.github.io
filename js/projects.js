var projects = {};

$(document).ready(function() {
    $.ajax(
        {
            url: "/data/projects.json",
            success: function(result) {

                // Remove projects that aren't active
                for (var i=0;i<result.length;i++) {
                    if (!result[i].active) {
                        result.splice(i,1);
                    }
                }

                for (var i=0;i<result.length;i++) {
                    if (i%2==0) {
                        $("#projCol1").append(getHTMLString(result[i]));
                    } else {
                        $("#projCol2").append(getHTMLString(result[i]));
                    }
                }
            }
        }
    );
})

function getHTMLString(project) {
    var returnString = `<div class="project-grid">
                            <h3 class="subtopic">${project.title}</h3>
                            <div class="content">
                                <img class="project-image" src="${project.img}">
                                <div class="text-content">
                                    <p class="project-info">
                                        ${project.desc}
                                        <h4 class="developers-heading"><strong>Developers</strong></h4>
                                        <div class="developers">
                                        `

    var developers = project.developers;
    for (var i=0;i<developers.length;i++) {
        returnString+=`<div class="dev">
                            <img src="${developers[i].img}" width="100px" class="dev-image">
                            <h3 class="dev-name">${developers[i].name}</h3>
                        </div>`;
    }
    
    returnString+=`</div></p></div></div></div>`

    return returnString;
}