define(["require",
        "dojo/_base/lang",
        "dojo/_base/array",
        "platformTest/test/utils/TestUtils",
        "application/business/util/DecimalCalculator"], 
function(thisModule, lang, arrayUtil, TestUtils, calc) {

	TestUtils.register(thisModule, {
		
		plusTest: function() {
			doItFor25('+');
		},
		
		minusTest: function() {
			doItFor25('-');
		},
		
		multiplyTest: function() {
			doItFor25('*');
		},
		
		divideTest: function() {
			doItFor25('/');
			console.log(calc.divide(0.1234, 0.54321));
			console.log(0.1234 / 0.54321);
		}
	});
	
	function doItFor25(oper) {
		for(var i = 0; i < 25; i++) {
			var a = Math.random();
			var b = Math.random();
			var c = null, x = null;
			switch(oper) {
				case '+': 
					c = a + b;
					x = calc.plus(a, b);
					break;
				case '-':
					c = a - b;
					x = calc.minus(a, b);
					break;
				case '*':
					c = a * b;
					x = calc.multiply(a, b);
					break;
				case '/':
					c = a / b;
					x = calc.divide(a, b);
					break;
				default: 
					break;
			}
			if(c < x || c > x) {
				console.log('[' + i + '] (' + oper + ') Diff detected, checking...');
				console.log(c);
				console.log(x);
				var places = calc.maxPlaces(a, b);
				var factor = Math.pow(10, places);
				var aInt = a * factor;
				var bInt = b * factor;
				c = calculate(aInt, bInt, oper, places);
				assertThat(c, equalTo(x), '(' + oper + ') Calculation failed, it was '+x+', but should be '+c);
				console.log(c + ' = ' + x);
				console.log('--------------------------------------------------');
			}
		}
	};
	
	function calculate(a, b, oper, places) {
		switch(oper) {
			case '+': 
				return (a + b) / Math.pow(10, places);
				break;
			case '-':
				return (a - b) / Math.pow(10, places);
				break;
			case '*':
				return (a * b) / Math.pow(10, places * 2);
				break;
			case '/':
				if(places > 21) {
					return new Number( (a / b).toFixed(20) );
				}
				else {
					return (a / b);
				}
				break;
			default: 
				break;
		}
	}

});



