describe("formatDate", function() {
	it("������ ���� ���� ����-��-�� �� ������", function() {
		assert.equal(formatDate('2011-10-02'), "02.10.11");
	});

	it("������ ���� �� ����� 1234567890 (������������)", function() {
		assert.equal(formatDate(1234567890), "15.01.70");
	});

	it("������ ���� �� ����� 1521019849791 (������������)", function() {
		assert.equal(formatDate(1521019849791), "14.03.18");
	});

	it("������ ���� �� ����� 1451422800000 (������������)", function() {
		assert.equal(formatDate(1451422800000), "30.12.15");
	});

	it("������ ���� �� ������� ���� [����, �, �]", function() {
		assert.equal(formatDate([2014, 0, 1]), "01.01.14");
	});

	it("������ ���� �� ������� ���� [����, �, �]", function() {
		assert.equal(formatDate([2015, 11, 30]), "30.12.15");
	});

	it("������ ���� �� ������� Date", function() {
		assert.equal(formatDate(new Date(2014, 0, 1)), "01.01.14");
	});

});