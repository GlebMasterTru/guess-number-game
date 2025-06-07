// 1 фаза
const container = document.querySelector(".container")
const btn_start = document.querySelector("#btn_start")
// 2 фаза
const answer_form = document.querySelector(".answer_form")
const input = document.querySelector("#input_answer")
const btn_ok = document.querySelector("#btn_ok")
const result = document.querySelector(".result")
const btns = document.querySelector(".buttons")
const btn_restart = document.querySelector("#btn_restart")
const btn_comeback = document.querySelector("#btn_rules")

let number
let attempts = 0

const start_game = () => {
	number = Math.floor(Math.random() * 1000000) + 1
	attempts = 0

	answer_form.style.display = "flex"
	btns.style.display = "flex"
	result.style.display = "block"

	input.focus()
	input.value = ""

	result.textContent = "Введи любое число от 1 до 100"
}

const game_logic = () => {
	let user_number = input.value
	console.log(number, user_number)

	if (isNaN(user_number) || user_number == undefined || user_number == null || user_number == "") {
		result.textContent = "Пожалуйста, введите число!"
		return
	}

	if (number > user_number) {
		attempts++
		result.innerHTML = `Загаданное число больше! <br/>Попыток: ${attempts}`
		input.value
		input.value = ""
		input.focus()
	} else if (number < user_number) {
		attempts++
		result.innerHTML = `Загаданное число меньше! <br/>Попыток: ${attempts}`
		input.value = ""
		input.focus()
	} else if (number == user_number) {
		result.innerHTML = `Поздравляю! Вы угадали! <br/>На это ушло ${attempts} попытки`
		input.value = ""
	}
}

btn_start.addEventListener("click", () => {
	container.style.display = "none"
	btn_start.style.display = "none"
	start_game()
})

input.addEventListener("keydown", e => {
	if (e.key === "Enter") {
		e.preventDefault()
		game_logic()
	}
})

btn_ok.addEventListener("click", () => {
	game_logic()
})

btn_restart.addEventListener("click", () => {
	start_game()
})

btn_comeback.addEventListener("click", () => {
	container.style.display = "flex"
	btn_start.style.display = "block"
	answer_form.style.display = "none"
	btns.style.display = "none"
	result.style.display = "none"
})

// function bot() {
// 	let key = Math.floor(Math.random() * (100 - 1 + 1)) + 1
// 	let val

// 	while (true) {
// 		let input = prompt("Enter a number:")
// 		val = parseInt(input)

// 		if (val > key) {
// 			console.log("Много")
// 		} else if (val < key) {
// 			console.log("Мало")
// 		} else {
// 			console.log("Молодец, ты угадал число!")
// 			break
// 		}
// 	}
// }
