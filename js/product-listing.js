const wishLists = document.querySelectorAll("#heart-icon")

wishLists.forEach(item => {
	
	item.addEventListener("mouseenter", function () {
		item.classList.remove("ri-heart-3-line")
		item.classList.add("ri-heart-3-fill")
	})
	item.addEventListener("mouseout", function () {
		item.classList.remove("ri-heart-3-fill")
		item.classList.add("ri-heart-3-line")
	})
})