describe("Article.showStats", function() {
	before(function() {
		sinon.stub(window, "alert");
		this.clock = sinon.useFakeTimers();
	});

	after(function() {
		window.alert.restore();
		this.clock.restore();
	});

	it("������� ����� ������ � ���� �������� ���������", function() {
		new Article();
		this.clock.tick(100);
		new Article();
		Article.showStats();

		assert(alert.calledWith('�����: 2, ���������: ' + new Date()));
	});

	it("� ��� ���� ������...", function() {
		this.clock.tick(100);
		new Article();
		Article.showStats();

		assert(alert.calledWith('�����: 3, ���������: ' + new Date()));
	});
});