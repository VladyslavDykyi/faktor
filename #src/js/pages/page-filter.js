$('.select-search').select2({
	theme: "search",
});
$('.select-no-search').select2({
	minimumResultsForSearch: -1,
	theme: "search",
});

//
// btn_filter.addEventListener('click', () => {
// 	.classList.toggle('active');
// });
const btn_filter = document.querySelector('.filter-content-filter button');
const btn_close = document.querySelector('.filter-form-close');
const filter_form = document.querySelector('.filter-form');
const body = document.querySelector('body');

btn_close.addEventListener('click', () => {
	btn_filter.classList.remove('active');
	filter_form.classList.remove('active');
	body.classList.remove('lock');
});
openfilter(btn_filter,filter_form);

function openfilter(btn_filter,filter_form) {
	const btn = btn_filter;

	const menu = filter_form;
	const body = document.querySelector('body');
	const toggleActive = () => {

		if (window.innerWidth <= 1024) {
			body.classList.toggle('lock');
		}
		btn.classList.toggle('active');
		menu.classList.toggle('active');
	}
	btn.addEventListener('click', e => {
		e.stopPropagation();
		toggleActive();
	});
	document.addEventListener('click', e => {
		const target = e.target;
		const its_menu = target === menu || menu.contains(target);
		const its_btn = target === btn;
		const is_select2 = target.closest('.select2-container'); // Перевіряємо, чи клікають по Select2
		const menu_is_active = menu.classList.contains('active');
		
		if (!its_menu && !its_btn && menu_is_active && !is_select2) {
			toggleActive();
		}
	});
}