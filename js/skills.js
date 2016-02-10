function skill(skill, products, percentage, progressClazz) {
    return '' +
        '<div>' +

        '   <div class="row skill-full">' +
        '       <div class="col-lg-4 col-md-3 col-sm-12">' +
        '           <h4>' + skill + '</h4>' +
        '      </div> ' +
        '       <div class="col-lg-8 col-md-9 col-sm-12">' +
        '           <label style="padding-top: 0.9em">' + products + '</label>' +
        '      </div>' +
        '   </div>' +

        '       <h4 class="skill-abridged">' + skill + ' <span class="products" style="padding-top: 0.9em">' + products + '</span></h4>' +

        '   <div class="progress">' +
        '       <div class="progress-bar ' + progressClazz + '" role="progressbar" aria-valuenow="' + percentage + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + percentage + '%">' +
        '           <span class="sr-only">' + percentage + '% Complete (warning)</span>' +
        '   </div>' +
        '</div>';
}
var skillsEl = document.currentScript.parentNode;

$(skillsEl).append([
    skill('js', 'AngularJS, Node.js, Express, REST', 85, 'progress-bar-3'),
    skill('HTML/CSS','HTML5, HTML5 Messaging, Less, Sass',65, 'progress-bar-1'),

    skill('DevOps','Docker, Linux, Puppet, Jenkins, JMeter, Bluemix',85, 'progress-bar-4'),
    skill('NoSql','mongodb, cloudant, couchdb',60, 'progress-bar-2'),
    skill('Java','spring, hibernate, jersey, maven, SQL',58, 'progress-bar-5')
]);
