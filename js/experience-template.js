var experienceTemplate = function (id, title, company, experiences, open) {
    return '' +
        '<div class="panel">' +
        '   <div role="tab" id="heading' + id + '">' +
        '       <div class="row">' +
        '           <div class="col-md-8 col-sm-9">' +
        '               <li>' +
        '                   <div>' +
        '                       <a role="button" data-toggle="collapse" data-parent="#experience-accordion"href="#collapse' + id + '" aria-expanded="true" aria-controls="collapse' + id + '">' +
        '    ' + title + '<div class="experience-abridged company"> - ' + company + '</div></a>' +
        '                   </div>' +
        '               </li>' +
        '           </div>' +
        '           <div class="col-md-4 col-sm-3 experience-full">' +
        '               <div class="company">' + company + '</div>' +
        '           </div>' +
        '       </div>' +
        '   </div>' +
        '   <div id="collapse' + id + '" class="panel-collapse collapse"' + (open && ' in') + ' role="tabpanel" aria-labelledby="heading' + id + '">' +
        '       <div class="panel-body">' +
        '           <div class="row">' +
        '               <div class="col-md-11">' +
        '                   <ul>' + (function experiencesTemplate() {
            var lis = ''
            experiences.forEach(function (experience) {
                lis += '<li>' + experience + '</li>'
            });
            return lis;
        })() +
        '                   </ul>' +
        '               </div>' +
        '           </div>' +
        '       </div>' +
        '   </div>' +
        '</div>'
};
var jsFullstackPostOffice = experienceTemplate(1, 'Lead JavaScript Fullstack Developer', 'Post Office',[
    'Set up the project for success with build infrastructure that scaled to build, test, deploy and promote ' +
    'over 60 JavaScript fullstack applications to production',

    'Provided technical governance to 8 global teams to ensure code quality, scalability and resilience',

    'Infected a ‘reuse before use’ culture, by creating a self sustained contribution model for creating ' +
    'and sharing common UI, Server and Build componentry. It is estimated that new products will be ' +
    'delivered in 25% of the time'
],true);
var otherTrainingEtc = experienceTemplate(2, 'DevOps Expert and Trainer', 'Visa & Internally',[
    'Delivered the internal IBM DevOps technical workshop, encouraging participants to invest in open source.',
    'Automated performance test and analysis in the development pipeline with bespoke written Maven and Jenkins plugins, ' +
    'published in this <a href="http://www.ibm.com/developerworks/rational/library/agile-lifecycle-performance-engineering/">DevelopWorks article</a>',
    'Developed a Rational Team Concert plugin to streamline the CI promotion process, published in this ' +
    '<a href="http://www.ibm.com/developerworks/library/d-extend-customize-rational-team-concert-continuous-integration/index.html">DevelopWorks article</a>.'
]);

var visaUiDevOps = experienceTemplate(3, 'Fullstack Java / JavaScript Developer', 'Visa & IKEA',[
    'Rapidly developed prototype MEAN apps for bid and exploritory work.',
    'Developed hotfixes for sev 1 production defects out of hours as the dedicated on call UI SME.',
    'Created Java REST services using Spring, Jersey and Oracle ATG.'
]);

var accordionNode = document.currentScript.parentNode;
$(accordionNode).append([jsFullstackPostOffice,otherTrainingEtc,visaUiDevOps]);

$(document).ready(function() {
    $(accordionNode).find('[aria-controls=collapse1]').trigger('click');
});