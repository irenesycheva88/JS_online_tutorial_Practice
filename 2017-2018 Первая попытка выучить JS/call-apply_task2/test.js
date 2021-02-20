describe("applyAll", function() {

	it("��������� ������� �� ���� ����������, ������� �� 2��", function() {
		var min = applyAll(Math.min, 1, 2, 3);
		assert.equal(min, 1);
	});

	it("��� ���������� ���������� ������ �������� �������", function() {
		var spy = sinon.spy();
		applyAll(spy);
		assert(spy.calledOnce);
		assert.equal(spy.firstCall.args.length, 0);
	});

});