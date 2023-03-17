

$(document).ready(function () {
	// updBasket();

	const today = new Date();
	const yyyy = today.getFullYear();
	let mm = today.getMonth() + 1; // Months start at 0!
	let dd = today.getDate();

	if (dd < 10) dd = '0' + dd;
	if (mm < 10) mm = '0' + mm;

	const formattedToday = yyyy + '-' + mm + '-' + dd;


	$('.js-example-basic-single').select2({
		minimumResultsForSearch: -1,
		theme: "my",
	});
	$('#modal1').on('click', (e) => {
		if (!e.target.parentElement.parentElement.classList.contains('successfully')) {
			$('#exampleModal1').arcticmodal();
			$.ajaxSetup({
				headers: {
					'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
				}
			});

			$.ajax({
				type: 'post',
				url: '/email/verification-notification',
				contentType: false,
				cache: false,
				processData: false,
				success: function (result) {
					document.querySelector('.arcticmodal-container').querySelector('.arcticmodal-close').click()
					$('#exampleModal2').arcticmodal();
				}
			});
		} else {
			return;
		}
	});
	$('#modal2').on('click', (e) => {
		if (!e.target.parentElement.parentElement.classList.contains('successfully')) {
			$('#exampleModal2').arcticmodal();
		} else {
			return;
		}
	});
	$('#modal3').on('click', (e) => {
		console.log();
		if (!e.target.parentElement.parentElement.classList.contains('successfully')) {
			$('#exampleModal3').arcticmodal();
		} else {
			return;
		}
	});
	$('#final_expiration_date').daterangepicker({
		"singleDatePicker": true,
		"startDate": $('#final_expiration_date').val() ? $('#final_expiration_date').val() : formattedToday,
		"endDate": $('#final_expiration_date').val() ? $('#final_expiration_date').val() : formattedToday,
		'locale': {
			format: 'YYYY-MM-DD'
		}
	}, function (start, end, label) { });

	$('#ad_is_active_until').daterangepicker({
		"singleDatePicker": true,
		"startDate": $('#ad_is_active_until').val() ? $('#ad_is_active_until').val() : formattedToday,
		"endDate": $('#ad_is_active_until').val() ? $('#ad_is_active_until').val() : formattedToday,
		'locale': {
			format: 'YYYY-MM-DD'
		}
	}, function (start, end, label) { });

	$('.date').on('apply.daterangepicker', function (ev, picker) {
		$(this).attr('value', picker.startDate.format('YYYY-MM-DD'));
	});
});


fileFields('.file-inp');

function fileFields(inp) {
	const avatar = document.querySelectorAll(inp);
	for (let i = 0; i < avatar.length; i++) {
		avatar[i].addEventListener('input', function() {
			let reader = new FileReader();
			reader.onload = function (e) {
				avatar[i].parentElement.nextElementSibling.lastElementChild.setAttribute('src', e.target.result);
				avatar[i].parentElement.nextElementSibling.firstElementChild.srcset = e.target.result;
			}
			reader.readAsDataURL(this.files[0]);
			avatar[i].parentElement.nextElementSibling.lastElementChild.classList.add('active');
			avatar[i].parentElement.classList.add('none');
			avatar[i].parentElement.parentElement.classList.add('active');
			deleteFile(avatar[i].parentElement.nextElementSibling.nextElementSibling.firstElementChild);
		});
	}
	function deleteFile(button) {
		button.addEventListener('click', () => {
			button.parentElement.previousElementSibling.firstElementChild.srcset = '';
			button.parentElement.previousElementSibling.lastElementChild.src = '';
			button.parentElement.previousElementSibling.previousElementSibling.classList.remove('none');
			button.parentElement.previousElementSibling.lastElementChild.classList.remove('active');
			button.parentElement.parentElement.classList.remove('active');
		});
	}
}



