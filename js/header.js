const searchBar = document.getElementById('search-bar');
const inputGroupText = document.getElementById('header-select');

searchBar.addEventListener('focus', () => {
	inputGroupText.classList.add('input-focused');
});

searchBar.addEventListener('blur', () => {
	inputGroupText.classList.remove('input-focused');
});