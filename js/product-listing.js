const wishLists = document.querySelectorAll(".wish-list__btn")

wishLists.forEach(item => {
	
	item.addEventListener("mouseenter", function () {
		item.querySelector("i").classList.remove("ri-heart-3-line")
		item.querySelector("i").classList.add("ri-heart-3-fill")
	})
	item.addEventListener("mouseout", function () {
		item.querySelector("i").classList.remove("ri-heart-3-fill")
		item.querySelector("i").classList.add("ri-heart-3-line")
	})
})