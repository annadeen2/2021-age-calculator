function calculator(type, name, years, months) {
	return `My ${type} ${name} is ${years} years old or ${months} months`
}

console.log(calculator("dad", "Gary", 60, 60 * 12));
My dad Gary is 60 old or 720 months

console.log(calculator("mom", "Karen", 64, 64 * 12));
My mom Karen is 64 old or 768 months

console.log(calculator("grandpa", "Clarence", 94, 94 * 12));
My grandpa Clarence is 94 years old or 1128 months