define("platformTest/test/utils/QUnitDeferred", 
	   ["dojo/_base/declare"],
function(declare) {
	return declare([], {
		isQUnitStopped: false,
		
		callback: function() {
			this.isResumed = true;
			this.startQUnitIfStopped();
			if (QUnit.config.current.assertions.length === 0){
				expect(0);
			}
		},
		errback: function(err) {
			this.isResumed = true;
			QUnit.pushFailure(err);
			this.startQUnitIfStopped();
		},
		
		startQUnitIfStopped: function() {
			if (this.isQUnitStopped){
				QUnit.start();
				this.isQUnitStopped = false;
			}
		}
	});
});	
