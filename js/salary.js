function salaryYearlynumber(e){
var salary = Math.abs(parseInt(e.value));
document.getElementById("salaryMonthly").innerHTML = "$" + Math.abs(salary / 12).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("salaryBiMonthly").innerHTML = "$" + Math.abs(salary / 26).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("salaryBiWeekly").innerHTML = "$" + Math.abs(salary / 24).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("salaryWeekly").innerHTML = "$" + Math.abs(salary / 52).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("salaryDaily").innerHTML = "$" + Math.abs(salary / 260).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("salaryHourly").innerHTML = "$" + Math.abs(salary / 2080).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("salaryMinute").innerHTML = "$" + Math.abs(salary / 124800).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
document.getElementById("salarySecond").innerHTML = "$" + Math.abs(salary / 7488000).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

var checkSalary = document.forms["salaryForm"]["salaryInput"].value;

if (checkSalary == null || checkSalary == "") {
		document.getElementById("salaryMonthly").innerHTML = "$0.00";
		document.getElementById("salaryBiMonthly").innerHTML = "$0.00";
		document.getElementById("salaryBiWeekly").innerHTML = "$0.00";
		document.getElementById("salaryWeekly").innerHTML = "$0.00";
		document.getElementById("salaryDaily").innerHTML = "$0.00";
		document.getElementById("salaryHourly").innerHTML = "$0.00";
		document.getElementById("salaryMinute").innerHTML = "$0.00";
		document.getElementById("salarySecond").innerHTML = "$0.00";
    }

}

document.write("<div id='mainContainer'><h4 class='salaryBox'>Monthly<span id='salaryMonthly' class='salarySpan'>$0.00</span></h4>");
document.write("<h4 class='salaryBox'>Bi Monthly<span id='salaryBiMonthly'>$0.00</span></h4>");
document.write("<h4 class='salaryBox'>Bi Weekly<span id='salaryBiWeekly'>$0.00</span></h4>");
document.write("<h4 class='salaryBox'>Weekly<span id='salaryWeekly'>$0.00</span></h4>");
document.write("<h4 class='salaryBox'>Daily<span id='salaryDaily'>$0.00</span></h4>");
document.write("<h4 class='salaryBox'>Hourly<span id='salaryHourly'>$0.00</span></h4>");
document.write("<h4 class='salaryBox'>Minute<span id='salaryMinute'>$0.00</span></h4>");
document.write("<h4 class='salaryBox'>Second<span id='salarySecond'>$0.00</span></h4></div>");

$('form').submit(false);

$('#salaryInput').focusout(function(event) {
  if(event.which >= 37 && event.which <= 40){
    event.preventDefault();
  }
  $(this).val(function(index, value) {
    return value
      .replace(/\D/g, "")
      //.replace(/([0-9])([0-9]{2})$/, '$1.$2')  
      .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",")
    ;
  });
  if($(this).val()){
  	$(this).val('$' + $(this).val());
	} else {
		$(this).val($(this).val());
	}
});

$('#salaryInput').keyup(function(event) {
   if($(this).val()){
    $('.salaryBox span').addClass('redNumbers');
  } else {
    $('.salaryBox span').removeClass('redNumbers');
  }
});

$('#salaryInput').focus(function(event) {
  if(event.which >= 37 && event.which <= 40){
    event.preventDefault();
  }
  $(this).val(function(index, value) {
    return value
      .replace(/\D/g, "")
      //.replace(/([0-9])([0-9]{2})$/, '$1.$2')  
      .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, "")
    ;
  });
  $(this).val($(this).val());
});


