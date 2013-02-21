var dollar = require('dollar');

var body = document.getElementsByTagName('body')[0];

describe('dollar module', function(){

	describe('core', function(){

		it('should be function', function(){

			dollar.should.be.a('function');

		});

		it('should return an object', function(){

			dollar().should.be.a('object');

		});

	});

	describe('crappy element selecting', function(){

		it('should not have an element by default', function(){

			dollar().length.should.equal(0);

		});

		it('should be able to be initialised with an element', function(){

			dollar( body ).length.should.equal(1);

			dollar( body )[0].should.equal( body );

		});

		it('should be able to get elements by Id', function(){

			var el = document.createElement('div');
			el.setAttribute('id', 'test');

			body.appendChild(el);

			dollar().getById('test')[0].should.equal(el);

			body.removeChild( el );



		});

		it('should not get an element with an invalid id', function(){

			var el = document.createElement('div');
			el.setAttribute('id', 'test');

			body.appendChild(el);

			dollar().getById('test2').length.should.equal(0);

		});



		it('should get the head element', function(){

			var head = document.getElementsByTagName('head')[0];

			dollar().getHead()[0].should.equal( head );

		});

		it('should get the body element', function(){

			dollar().getBody()[0].should.equal( body );

		});	

	});	

	describe("element creation rubbish", function(){

		it('should be able to create a DOM element (div)', function(){

			var div = dollar().create('div');

			div[0].nodeType.should.equal(1);
			div[0].tagName.should.equal('DIV');

		})

		it('should be able to create a DOM element (anchor)', function(){

			var a = dollar().create('a');

			a[0].nodeType.should.equal(1);
			a[0].tagName.should.equal('A');

		})

	})

	describe("element manipulation dross", function(){

		it('should be able to add text node', function(){

			var div = dollar().create('div');

			div.text('text node');

			div[0].innerHTML.should.equal('text node');

		});

		it('should be able to edit text nodes', function(){

			var div = document.createElement('div');
			div.innerHTML = "node text";

			div = dollar(div).text('text node');

			div[0].innerHTML.should.equal('text node');

		});		

	})

});