'use strict';
(() => {
	const container = document.querySelector('.faq-wrapper');
	
	const open = (item, elem) => {
		item.classList.add('open');
		elem.style.maxHeight = elem.scrollHeight + 'px';
		elem.style.opacity = 1;
	}
	
	const close = (item, elem) => {
		item.classList.remove('open');
		elem.style.maxHeight = 0;
		elem.style.opacity = 0;
	}
	
	container.addEventListener('click', e => {
		const target = e.target.closest('.faq-question');
		if (!target) return;
		
		const item = target.closest('.faq-item');
		const elem = item.querySelector('.faq-answer');
		
		// Перевіряємо, чи пункт уже відкритий, і відповідно перемикаємо його стан
		if (item.classList.contains('open')) {
			close(item, elem);
		} else {
			// Закриваємо всі інші відкриті пункти перед відкриттям нового
			container.querySelectorAll('.faq-item.open').forEach(openItem => {
				const openElem = openItem.querySelector('.faq-answer');
				close(openItem, openElem);
			});
			open(item, elem);
		}
	});
})();
