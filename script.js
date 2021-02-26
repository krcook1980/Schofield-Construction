$("#button").click(function() {
    bodyContent = "From " + $(".contact").val() + " at " + $(".email").val() + " phone " + $(".phone").val() + " says " + $(".message").val();
    
    console.log(bodyContent);
    Email.send({
      SecureToken : "b8b15915-b696-4c2b-91dc-780fdd215e01",
      To : 'scott@schofieldconstruction.com',
      From : "kcookwebdevelopment@gmail.com",
      Subject : "Portfolio Contact Me",
      Body : bodyContent
  }).then(function (message) {
    $("#status").empty();
    console.log(message);
    if (message=="OK"){
      $("#status").append("<p>"+"Thank you, I will get back to you soon!"+"</p>");
    }
    else {
      $("#status").append("<p>"+"I'm sorry, something went wrong. Please submit again."+"</p>")
    }
  })
})

$(document).ready(function() {
    $('.has-animation').each(function(index) {
      $(this).delay($(this).data('delay')).queue(function(){
        $(this).addClass('animate-in');
      });
    });
  });
  