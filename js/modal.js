// Modal window

(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {

		document.body.classList.toggle("scroll-locked");
		// https://www.youtube.com/watch?v=Z5lYspOgtrY&t=477s

		refs.modal.classList.toggle("is-hidden");

	}
})();


