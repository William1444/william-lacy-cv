function skill(skill, products, percentage, progressClazz) {
    return '' +
        '<div>' +

        '   <div class="row skill-full">' +
        '       <div class="col-lg-3 col-md-2 col-sm-12">' +
        '           <p class="section-heading">' + skill + '</p>' +
        '      </div> ' +
        '       <div class="col-lg-9 col-md-10 col-sm-12">' +
        '           <label class="products">' + products + '</label>' +
        '      </div>' +
        '   </div>' +

        '       <p class="skill-abridged">' + skill + ' <span class="products">' + products + '</span></p>' +

        '   <div class="progress">' +
        '       <div class="progress-bar ' + progressClazz + '" role="progressbar" aria-valuenow="' + percentage + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + percentage + '%">' +
        '           <span class="sr-only">' + percentage + '% Complete (warning)</span>' +
        '   </div>' +
        '</div>';
}
var skillsEl = document.currentScript.parentNode;

$(skillsEl).append([
    skill('JS', 'AngularJS, Node.js, Express, REST', 84, 'progress-bar-3'),
    skill('HTML/CSS','HTML5, HTML5 Messaging, Less, Sass',58, 'progress-bar-1'),

    skill('DevOps','Docker, Linux, Puppet, Jenkins, JMeter, Bluemix, git',86, 'progress-bar-4'),
    skill('NoSql','mongodb, cloudant, couchdb',78, 'progress-bar-2'),
    skill('Java','spring, hibernate, jersey, maven, SQL',61, 'progress-bar-5')
]);
