describe("formatDate", function() {
	it("читает дату вида гггг-мм-дд из строки", function() {
		assert.equal(formatDate('2011-10-02'), "02.10.11");
	});

	it("читает дату из числа 1234567890 (миллисекунды)", function() {
		assert.equal(formatDate(1234567890), "15.01.70");
	});

	it("читает дату из числа 1521019849791 (миллисекунды)", function() {
		assert.equal(formatDate(1521019849791), "14.03.18");
	});

	it("читает дату из числа 1451422800000 (миллисекунды)", function() {
		assert.equal(formatDate(1451422800000), "30.12.15");
	});

	it("читает дату из массива вида [гггг, м, д]", function() {
		assert.equal(formatDate([2014, 0, 1]), "01.01.14");
	});

	it("читает дату из массива вида [гггг, м, д]", function() {
		assert.equal(formatDate([2015, 11, 30]), "30.12.15");
	});

	it("читает дату из объекта Date", function() {
		assert.equal(formatDate(new Date(2014, 0, 1)), "01.01.14");
	});

});