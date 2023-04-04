window.addEventListener("DOMContentLoaded", function () {
	[].forEach.call(document.querySelectorAll('.tel'), function (input) {
		function mask(event) {
			let keyCode;
			event.keyCode && (keyCode = event.keyCode);
			let pos = this.selectionStart;
			if (pos < 1) event.preventDefault();
			let matrix = "+380(__) ___ __ __",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
				});
			i = new_value.indexOf("_");
			if (i !== -1) {
				i < 1 && (i = 2);
				new_value = new_value.slice(0, i);
			}
			let reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type === "blur" && this.value.length < 5) this.value = "";
		}
		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)
	});
});
const inputFile = document.querySelector('[name="user_file"]');
inputFile.addEventListener('input',handleFile, false);

function handleFile() {
	const fileList = this.files;
	const visualFile = document.querySelector('.file');
	visualFile.innerHTML = fileList[0].name;
}
bindTabs('.offer-tab');


function bindTabs(container) {
	if (typeof container === 'string') {
		container = document.querySelector(container);
	}

	const titles = container.querySelectorAll('.offer-nav-item');
	const contents = container.querySelectorAll('.offer-content');

	for (let i = 0; i < titles.length; i++) {
		const titleEl = titles[i];

		titleEl.addEventListener('click', () => {
			deactivate(titles);
			deactivate(contents);

			titles[i].classList.add('active');
			contents[i].classList.add('active');
		});
	}

	function deactivate(elements) {
		for (let i = 0; i < elements.length; i++) {
			const element = elements[i];
			element.classList.remove('active');
		}
	}
}