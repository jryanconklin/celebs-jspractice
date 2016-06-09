$(document).ready(function() {
  $("form#celebs").submit(function(event) {
    var gender = $("select#gender").val();
    var dog = $("select#dog").val();
    var age = parseInt($("#age").val());
    var food = $("select#food").val();

    //if (gender === 'female' && age < 35) {
      //$('#gosling').show();
    //} else if (gender === 'female' && age > 35) {
      //$('#clooney').show();
    //} else if (gender === 'male' && age < 45) {
      //$('#swift').show();
    //} if (gender === 'male' && age > 45) {
      //$('#bullock').show();
    //}

    if (gender === "female" && age < 35) {
      $('#gosling').show();
      $('#clooney').hide();
    } else if (age > 35){
      $('#clooney').show();
      $('#gosling').hide();
    }

    if (gender === 'male' && age < 45) {
      $('#swift').show();
      $('#bullock').hide();
    } else if (gender === 'male' && age > 45){
      $('#bullock').show();
      $('#swift').hide();
    }

    event.preventDefault();
  });
});
