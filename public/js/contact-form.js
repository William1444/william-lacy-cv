var form = '<form id="contactForm" action="/contact" method="post">' +
    '           <div class="col-md-6 contact-left">' +
    '               <input name="name" required="required" type="text" class="text" value="Name *" onfocus="this.value = this.value === \'Name *\' ? \'\' : this.value" onblur="if (this.value == \'\') {this.value = \'Name *\';}">' +
    '               <input name="email" required="required" type="email" class="text" value="Email *" onfocus="this.value = this.value === \'Email *\' ? \'\' : this.value" onblur="if (this.value == \'\') {this.value = \'Email *\';}">' +
    '               <input name="phone" required="required" type="tel" class="text" value="Phone *" onfocus="this.value = this.value === \'Phone *\' ? \'\' : this.value" onblur="if (this.value == \'\') {this.value = \'Phone *\';}">' +
    '           </div>' +
    '           <div class="col-md-6 contact-right">' +
    '               <textarea name="message" value="Message *" onfocus="this.value = this.value == \'Message *\' ? \'\' : this.value" onblur="if (this.value == \'\') {this.value = \'Message *\';}">Message *</textarea>' +
    '<span class="success-msg">Thanks! I\'ll be in touch</span>' +
    '               <button class="btn-success has-spinner btn">' +
    '                   <span class="spinner"><i class="glyphicon glyphicon-refresh glyphicon-spin"></i></span>Submit' +
    '               </button>' +
    '           </div>' +
    '           <div class="clearfix"></div>' +
    '       </form>';
var formParent = $(document.currentScript.parentNode);
$(document).ready(function(){
    formParent.append([form]);
    var $form = $(formParent).find('#contactForm');
    var $name = $form.find('[name="name"]');
    var $email = $form.find('[name="email"]');
    var $phone = $form.find('[name="phone"]');
    var $message = $form.find('[name="message"]');
    var $submit = $form.find('button');
    $form.submit(function(event) {

        event.preventDefault();

        var $form = $( this ),
            url = $form.attr( 'action' );
        $submit.toggleClass('active');
        $submit.attr('disabled','true');

        /* Send the data using post */
        var posting = $.post( url, { name: $name.val(), email: $email.val(), phone: $phone.val(), message: $message.val() } );

        posting.done(function() {
            $submit.toggleClass('active');
            $form.addClass('success');
            [$name,$email,$phone,$message].forEach(function($el){
                $el.attr('disabled','disabled');
            })
        });
    });
});