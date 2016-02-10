var experienceTemplate = function (id, title, company, experiences, open) {
    return '' +
        '<div class="panel">' +
        '   <div role="tab" id="heading' + id + '">' +
        '       <div class="row">' +
        '           <div class="col-md-8 col-sm-9">' +
        '               <li>' +
        '                   <div>' +
        '                       <a role="button" data-toggle="collapse" data-parent="#experience-accordion"href="#collapse' + id + '" aria-expanded="true" aria-controls="collapse' + id + '">' +
        '    ' + title + '</a>' +
        '                   </div>' +
        '               </li>' +
        '           </div>' +
        '           <div class="col-md-4 col-sm-3">' +
        '               <p class="company">' + company + '</p>' +
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
var jsFullstackPostOffice = experienceTemplate(1, 'Lead JavaScript Fullstack Developer', 'The Post Office',[
    'Set up the project for success with build infrastructure that scaled to build, test, deploy and promote ' +
    'over 60 JavaScript fullstack applications to production',

    'Provided technical governance to 8 global teams to ensure code quality, scalability and resilience',

    'Infected a ‘reuse before use’ culture, by creating a self sustained contribution model for creating ' +
    'and sharing common UI, Server and Build componentry. It is estimated that new products will be ' +
    'delivered in 25% of the time'
],true);
var visaUiDevOps = experienceTemplate(2, 'UI Developer / DevOps Engineer', 'Visa',[
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
    'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat. Duis aute irure dolor in',
    'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
    'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
]);
var javaDeveloperAndDevOpsEngineer = experienceTemplate(3, 'Java Developer / DevOps Engineer', 'IKEA',[
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
    'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat. Duis aute irure dolor in',
    'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
    'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
]);
var accordionNode = document.currentScript.parentNode;
$(accordionNode).append([jsFullstackPostOffice,visaUiDevOps,javaDeveloperAndDevOpsEngineer]);

$(document).ready(function() {
    $(accordionNode).find('[aria-controls=collapse1]').trigger('click');
});