describe("debounce", function() {
	before(function() {
		this.clock = sinon.useFakeTimers();
	});

	after(function() {
		this.clock.restore();
	});

	it("�������� ������� �� ���� ��� ��� � ms �����������", function() {
		let log = "";

		function f(a) {
			log += a;
		}

		f = debounce(f, 1000);

		f(1); // ����������� �� 1000
		f(2); // ���������� ���������� � ����������� �� 1000

		setTimeout(function() {
			f(3)
		}, 1100); // f(2) ��� ���������, ����������� f(3)
		setTimeout(function() {
			f(4)
		}, 1200); // ���������� f(3), ����������� f(4)
		setTimeout(function() {
			f(5)
		}, 2500); // ����������� f(5)

		this.clock.tick(5000);
		assert.equal(log, "245");
	});

	it("��������� �������� ������", function() {
		const obj = {
			f: function() {
				assert.equal(this, obj);
			}
		};

		obj.f = debounce(obj.f, 1000);
		obj.f("test");
	});

	it("��������� ��� ���������", function() {
		function f(...args) {
			assert.deepEqual(args, ["������", "������"]);
		}

		f = debounce(f, 1000);
		f("������", "������");
	});

});