$(document).ready(function() {
	$('button').click(function() {
		var fizzBuzz = function (number) {
		$('.list').empty();
		for (i = 1; i <= number; i++) {
			if (i%15 === 0) {
				$('.list').append('fizz buzz' + '<br/>');
			}
			else if (i%3 === 0) {
				$('.list').append('fizz' + '<br/>');
			}
			else if (i%5 === 0) {
				$('.list').append('buzz' + '<br/>');
			}
			else {
				$('.list').append(i + '<br/>');
			}
		};
		};
		if(+$('input').val()) {
			fizzBuzz($('input').val());
		}
		else {
			alert('Please supply a number');
		}
	$('input').val('');
	});	
});