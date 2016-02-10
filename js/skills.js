function skill(skill, products, percentage, progressClazz) {
    return '' +
        '<div>' +

        '   <div class="row skill-full">' +
        '       <div class="col-lg-5 col-md-5 col-sm-12">' +
        '           <h4>' + skill + '</h4>' +
        '      </div> ' +
        '       <div class="col-lg-7 col-md-7 col-sm-12">' +
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
    skill('REST','',65, 'progress-bar-3'),
    skill('js', 'AngularJS, Node.js, Express', 85, 'progress-bar-4'),
    skill('Continuous Integration','Docker, Linux, Puppet, Jenkins, Bluemix',85, 'progress-bar-1'),
    skill('NoSql','mongodb, cloudant, couchdb',60, 'progress-bar-2'),
    skill('Java','spring, hibernate, jersey',58, 'progress-bar-5')
]);
