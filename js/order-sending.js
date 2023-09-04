var bgColors = [
	"linear-gradient(to right, #00b09b, #96c93d)", // successful
	"linear-gradient(to right, #ff5f6d, #ffc371)", // error
]
const TYPE_TOAST = {
	success : bgColors[0],
	error : bgColors[1]
}
const startDateInput = document.getElementById('startDate');
const endDateInput = document.getElementById('endDate');
const successToast = document.getElementById('liveToastBtn')
const errorELe = document.getElementById('error')

startDateInput.addEventListener('change', updateEndDateMin);
endDateInput.addEventListener('change', updateStartDateMax);

function updateEndDateMin() {
	endDateInput.min = startDateInput.value;
}

function updateStartDateMax() {
	startDateInput.max = endDateInput.value;
}

function toast (message, type, config = {}) {
	return Toastify({
		text: message,
		duration: 4500,
		destination: "",
		newWindow: true,
		node: `<p>hello</p>`,
		gravity: "top",
		position: 'right',
		close: true,
		style : {
			background: type,
		},
		...config
	}).showToast();
}

successToast.addEventListener('click', function () {
	toast("Successful action", TYPE_TOAST.success)
})
errorELe.addEventListener('click', function () {
	toast("error action", TYPE_TOAST.error)
})