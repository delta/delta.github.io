var hackerTalks;

$(document).ready(function() {
    $.ajax(
        {
            url: "/data/hackertalks.json",
            success: function(result) {
                $('#theTalkContainer').html(getHTMLString(result["2018"]));
                hackerTalks = result;
            }
        }
    );
})

function getHTMLString(hackerTalk) {

    let returnString = `<section id="hackerTalksPics">
                              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                    <!-- Indicators -->
                                    <ol class="carousel-indicators">
                                    `;

    let carouselImages = hackerTalk.carouselImages;
    for (let i=0;i<carouselImages.length;i++) {
        let isActive = (i == 0) ? 'class="active"' : '';
        returnString += `<li data-target="#myCarousel" data-slide-to="${i}" ${isActive}></li>`;
    }

    returnString += `</ol>
                          <!-- Wrapper for slides -->
                          <div class="carousel-inner">
                          `;
    
    for (let i=0;i<carouselImages.length;i++) {
        let className = (i == 0) ? "item active" : "item";
        returnString += `<div class="${className}">
                              <img src="${carouselImages[i]}" alt="HackerTalks" class="carouselImage">
                        </div>`;
    }

    returnString += `</div>
                          <!-- Left and right controls -->
                          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                                <span class="sr-only">Previous</span>
                          </a>
                          <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                                <span class="sr-only">Next</span>
                          </a>
                      </div>
                      </section>           
    
                      <section id="hackerTalksDetails">
                          <h1 class="subtopic">The Talks</h1>
                          <img id="htPoster" src="${hackerTalk.htPoster}" width="400px">
                          `;
    
    if (hackerTalk.feedbackUrl !== "") {
        returnString += `<p class="subtitle">
                              If you attended the talk, we'd love to hear from you! Provide your feedback <a href="${hackerTalk.feedbackUrl}" target="_blank">here</a>.
                        </p>
                        `;
    }
                       
    returnString += `</section>
                          <section id="resources">
                                <h1 class="subtopic">Resources</h1>
                                `;              
    
    let talks = hackerTalk.talks;
    for(let i=0;i<talks.length;i+=2) {
        let talk1 = talks[i];
        let talk2 = (i+1 < talks.length) ? talks[i+1] : "";
        
        returnString += getTalkRowString(talk1, talk2);                    
    }

    returnString += `</section>`;

    return returnString;
}

function getTalkRowString(talk1, talk2) {
    let returnString = ""

    let className = (talk2 !== "") ? "col-md-6" : "";
    returnString += `<div class="row">
                          <div class="${className}">
                              <div class="talk">
                                    <h3 class="subtopic">${talk1.title}</h3>
                                    <p class="talk-info">
                                    `;
    
    for (const [key, value] of Object.entries(talk1.resources)) { 
        if (value !== "") {
            returnString += `<a href="${value}">${key}</a><br />`;
        }
    }

    returnString += `</p></div></div>`;

    if (talk2 !== "") {
        returnString += `<div class="${className}">
                              <div class="talk">
                                    <h3 class="subtopic">${talk2.title}</h3>
                                    <p class="talk-info">
                                    `;
    
        for (const [key, value] of Object.entries(talk2.resources)) { 
            if (value !== "") {
                returnString += `<a href="${value}">${key}</a><br />`;
            }
        }

        returnString += `</p></div></div>`;
    }

    returnString += `</div>`;

    return returnString;
}

// function to highlight selected years tab
$("#yearsButton button").on("click", function() {
    var buttons = $('#yearsButton').children();
    for (button of buttons) {
        $(button).removeClass("active-button");
    }
    $(this).addClass("active-button");
});

function loadTalks(year) {
    $('#theTalkContainer').html(getHTMLString(hackerTalks[year]));
}
