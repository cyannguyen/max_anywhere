define(["require",
        "dojo/_base/lang",
        "dojo/_base/array",
        "platformTest/test/utils/TestUtils",
        "application/business/calibration/_NumberFormatterMixin"], 
function(thisModule, lang, arrayUtil, TestUtils, numberUtil) {

	TestUtils.register(thisModule, {
		
		//test limitToMaxFraction
		"limitToMaxFraction Decimal number limited to max fraction specified": function(assert){
			assert.expect(4);
			
			var expected = '';
			var actual = '';
			var src_value = '';
			var maxFraction = 10;
			window.anywhere_locale_seperator = '.';
			debugger;
			//1. No round if exceeded digit less than or equal to 5
			src_value = "123.12345678901";
			expected = "123.1234567890";
			actual = numberUtil.limitToMaxFraction(src_value, maxFraction);
			assertThat(actual, equalTo(expected));	
			
			//2.No round if exceeded digit less than equal to 5
			src_value = "123.12345678905";
			expected = "123.1234567890";
			actual = numberUtil.limitToMaxFraction(src_value, maxFraction);
			assertThat(actual, equalTo(expected));	
			
			//3.round if exceeded digit greater than 5
			src_value = "123.12345678908";
			expected = "123.1234567891";
			actual = numberUtil.limitToMaxFraction(src_value, maxFraction);
			assertThat(actual, equalTo(expected));	
			
			window.anywhere_locale_seperator = '';
			//round if exceeded digit greater than 5
			src_value = "123.12345678908";
			expected = "123.1234567891";
			actual = numberUtil.limitToMaxFraction(src_value, maxFraction);
			assertThat(actual, equalTo(expected));	
	
		},
		
		"limitToMaxFraction Round the integer for 99999 case": function(assert){
			assert.expect(1);
			
			var expected = '';
			var actual = '';
			var src_value = '';
			var maxFraction = 10;
			window.anywhere_locale_seperator = '.';
			
			//No round if exceeded digit less than or equal to 5
			src_value = "123.9999999999999";
			expected = "124.0000000000";
			actual = numberUtil.limitToMaxFraction(src_value, maxFraction);
			assertThat(actual, equalTo(expected));	
			
				
			
	
		},
		
		"limitToMaxFraction boundary input case": function(assert){
			assert.expect(1);
			
			var expected = '';
			var actual = '';
			var src_value = '';
			var maxFraction = 10;
			window.anywhere_locale_seperator = '.';
			
			//No round if exceeded digit less than or equal to 5
			src_value = ".9999999999999";
			expected = "1.0000000000";
			actual = numberUtil.limitToMaxFraction(src_value, maxFraction);
			assertThat(actual, equalTo(expected));	
			
				
			
	
		},
		
		"localeTest ToDisplayableValue should return in the current locale": function(assert){
			assert.expect(1);
			
			var expected = '';
			var actual = '';
			var src_value = '';
			
			window.anywhere_locale_seperator = ',';
			
			//No round if exceeded digit less than or equal to 5
			src_value = "1.999";
			expected = "1,9990";
			options = {'places': 4, 'round': -1};
			actual = numberUtil.toDisplayableValue(src_value, 'decimal', options);
			assertThat(actual, equalTo(expected));	
		},
		
		"limit field values": function(assert){
			assert.expect(15);
			
			
			var expected = '';
			var actual = '';
			var src_value = '';
			var maxFraction = 10;
			var fieldLength = 15;

			window.anywhere_locale_seperator = '.';
			
			//1. Case: integer is large and fraction inside the limit of 10
			src_value = '1234567890.123456789';
			expected = '1234567890.1234';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));

			//2. Case: integer small and fraction large greater than linit of 10 totalfield size greater than 15
			src_value = '1.12345678909876543';
			expected = '1.1234567891';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));

			//3. Case: integer small and fraction large greater than limit of 10 totalfield size less than 15
			src_value = '1.1234567890987';
			expected = '1.1234567891';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));

			//4. Case: integer large thn field size and fraction any
			src_value = '1234567890123456.12345678909876543';
			expected = '123456789012345';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));

			//5. Case: integer exact thn field size and fraction any
			src_value = '123456789012345.12345678909876543';
			expected = '123456789012345';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));

			//6. Case: integer less field size and fraction any
			src_value = '1234567890123.12345678909876543';
			expected = '1234567890123.1';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));

			//7. Case: Normal case missing integer 
			////TruncateDecimal function ignores since fraction is lesse hence not appended with 0. tricky?
			///Ultimately will be handled by NumericUtil
			src_value = '.1234';
			expected = '0.1234';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));

			//8. Case: Normal Case 
			src_value = '123.1234';
			expected = '123.1234';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));

			//9. Case: Normal Case 
			src_value = '123';
			expected = '123';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));

			//10. Case: Integer larger than field size and no fraction
			src_value = '12345678901234567890';
			expected = '123456789012345';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));

			//11. Case: no integer and fraction larger than field size
			src_value = '.12345678901234567890';
			expected = '0.1234567890';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));

			//12. Case: no integer and fraction with 16 i.e fraction 1, integer 14 and decimal 1
			src_value = '12345678901234.1';
			expected = '12345678901234';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));

			//13. Case: decimal as 15th char
			src_value = '12345678901234.';
			expected = '12345678901234';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));

			//14. Case: decimal as last char
			src_value = '12345.';
			expected = '12345';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));

			//15. Case: decimal as last char
			src_value = '112000.1234567885';
			expected = '112000.12345679';
			actual = numberUtil.limitFieldValue(src_value, fieldLength, maxFraction);
			assertThat(actual, equalTo(expected));
			
			
		}
		
		
	});
	
	
});



