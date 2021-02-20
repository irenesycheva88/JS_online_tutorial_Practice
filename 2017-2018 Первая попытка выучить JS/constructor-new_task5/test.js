var calculator;
before(function() {
	calculator = new Calculator;
});

it("calculate(12 + 34) = 46", function() {
	assert.equal(calculator.calculate("12 + 34"), 46);
});

it("calculate(34 - 12) = 22", function() {
	assert.equal(calculator.calculate("34 - 12"), 22);
});

it("добавили умножение: calculate(2 * 3) = 6", function() {
	calculator.addMethod("*", function(a, b) {
		return a * b;
	});
	assert.equal(calculator.calculate("2 * 3"), 6);
	assert.equal(calculator.calculate("12.3 * 2"), 24.6);
});

it("добавили деление: calculate(12 / 3) = 4", function() {
	calculator.addMethod("/", function(a, b) {
		return a / b;
	});
	assert.equal(calculator.calculate("12 / 3"), 4);
	assert.equal(calculator.calculate("0 / 2"), 0);
});

it("добавили возведение в степень: calculate(2 ** 3) = 8", function() {
	calculator.addMethod("**", function(a, b) {
		return Math.pow(a, b).toFixed(10);
	});
	assert.equal(calculator.calculate("2 ** 3"), 8);
	assert.equal(calculator.calculate("12.5 ** 2"), 156.25);
});