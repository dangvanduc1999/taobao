const searchBar = document.getElementById('search-bar');
const inputGroupText = document.getElementById('header-select');

searchBar.addEventListener('focus', () => {
	inputGroupText.classList.add('input-focused');
});

searchBar.addEventListener('blur', () => {
	inputGroupText.classList.remove('input-focused');
});

function countdown(targetDate, daysElement, hoursElement, minutesElement, secondsElement) {
	// Lặp vô hạn để cập nhật thời gian đếm ngược
	setInterval(function () {
		const currentDate = new Date().getTime();
		
		const timeRemaining = targetDate - currentDate;
		
		const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
		
		daysElement.textContent = days ;
		hoursElement.textContent = hours ;
		minutesElement.textContent = minutes ;
		secondsElement.textContent = seconds ;
		
		// Kiểm tra nếu đã hết thời gian đếm ngược
		if (timeRemaining <= 0) {
			clearInterval();
			daysElement.textContent = "0 ";
			hoursElement.textContent = "0 ";
			minutesElement.textContent = "0 ";
			secondsElement.textContent = "0";
		}
	}, 1000); // Cập nhật mỗi giây (1000 ms)
}

// Đặt ngày hết hạn (VD: 2023-09-30 12:00:00)
const targetDate = new Date("2023-09-30T12:00:00").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

countdown(targetDate, daysElement, hoursElement, minutesElement, secondsElement);
