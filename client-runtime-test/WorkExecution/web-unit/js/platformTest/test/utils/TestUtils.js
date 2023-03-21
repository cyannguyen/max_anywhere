define("platformTest/test/utils/TestUtils", 
	   ["dojo/_base/lang",
	     "dojo/has",
	     "dojo/aspect",
	     "dojo/_base/array",
	     "dojo/Deferred",
	     "dojo/promise/instrumentation", 
	     "platform/exception/PlatformRuntimeException",
	     "dojo/date/stamp",
	     "platform/performance/PerformanceUtil"],
function(lang, has, aspect, array, Deferred, instrumentation, PlatformRuntimeException, dateISOParser) {	
	has.add("config-useDeferredInstrumentation", "report-rejections", true);
	//For some reason the has() above stopped instrumenting Deferred automatically
	//so doing it manually here.
	instrumentation(Deferred);
	
	//FIXME Workaround while the LayoutFactory.js is not fixed to stop using dojo.require
	dojo.require = function(){};	
	
	var originalWLObj = {
		App: {
			getDeviceLocale: function(){return 'en-US';},
			getDeviceLanguage: function(){return 'en';}
		},
		BusyIndicator: function(){
			this.show = function(){};
			this.hide = function(){};
			return this;
		},
		Client: {
			connect: function(){},
			createChallengeHandler: function(){},
			invokeProcedure: function(){},
			getEnvironment: function() {return "PREVIEW";},
			login: function(){},
			logout: function(){}
		},
		ClientMessages: {
			loading: 'Loading...'
		},
		Environment: {
			PREVIEW: 'preview',
			  IPHONE: 'iphone',
			  IPAD: 'ipad',
			  DESKTOPBROWSER: 'desktopbrowser',
			  ADOBE_AIR: 'air',
			  ANDROID: 'android',
			  BLACKBERRY: 'blackberry',
			  BLACKBERRY10: 'blackberry10',
			  WINDOWS_PHONE_8: 'windowsphone8',
			  WINDOWS8: 'windows8',
			  WINDOWSPHONEUNIVERSAL: 'windowsphoneuniversal',
			  MOBILE_WEB: 'mobilewebapp'
		}
	};
	
	window.WL = lang.clone(originalWLObj);
	var mockitoMock = window.mock;
	var mockitoMockFunction = window.mockFunction;
	var mockitoWhen = window.when;
	
	window.hasMember = function(memberName, matcherOrValue) {
	  var msg = "";
	  var value = null;
	  if (matcherOrValue === undefined) {
	    matcherOrValue = JsHamcrest.Matchers.anything();
	  } else if (!JsHamcrest.isMatcher(matcherOrValue)) {
	    matcherOrValue = JsHamcrest.Matchers.equalTo(matcherOrValue);
	  }

	  return new JsHamcrest.SimpleMatcher({
	    matches: function(actual) {
	      if (actual && memberName in actual) {
	    	msg = "found value ";
	        var result = matcherOrValue.matches(actual[memberName]);
        	var desc = new JsHamcrest.Description();
        	matcherOrValue.describeValueTo(actual[memberName], desc);
        	value = desc.get();
	        return result;
	      }
	      msg = "member '" + memberName + "' not found";
	      return false;
	    },

	    describeTo: function(description) {
	      description.append('has member ').appendLiteral(memberName)
	        .append(' (').appendDescriptionOf(matcherOrValue).append(')');
	    },
        
        describeValueTo: function(actual, description){
        	description.append(msg).appendLiteral(value);
        	if (value){
        		description.append(' in member ').appendLiteral(memberName);
        	}
        }
	  });
	};
	
	window.validISODateString = function(){
		return new JsHamcrest.SimpleMatcher({
		    matches: function(actual) {
		    	var result = dateISOParser.fromISOString(actual);
		    	return (result != null);
		    },

		    describeTo: function(description) {
		      description.append('is a valid ISO date string');
		    },
	        
	        describeValueTo: function(actual, description){
	        	description.append(actual);
	        }
		});
	};
	
	window.everyItem = function(matcher) {
		var errorMsgs = [];
		return new JsHamcrest.SimpleMatcher({
			errorMsgs: [],
			matches: function(actual) {
				// Should be an array
				if (!lang.isArray(actual)) {
					errorMsgs.push('is not an array');
					return false;
				}

				var result = true;
				array.forEach(actual, function(actualItem, i){
					if (!matcher.matches(actualItem)) {
						var desc = new JsHamcrest.Description();
						desc.appendLiteral('index [' + i + '] has ');
						matcher.describeValueTo(actualItem, desc);
			        	var msg = desc.get();
						errorMsgs.push(msg);
						result = false;
					}
				});
				
				return result;
			},

			describeTo: function(description) {
				description.append('every item ')
				.appendDescriptionOf(matcher);
			},
	        
	        describeValueTo: function(actual, description){
	        	description.append('\n => ' + errorMsgs.join('\n => '));
	        }
		});
	};
	
	window.allOf = function() {
	  var args = arguments;
	  var failedResults = [];
	  if (args[0] instanceof Array) {
	    args = args[0];
	  }
	  return new JsHamcrest.SimpleMatcher({
	    matches: function(actual) {
	      for (var i = 0; i < args.length; i++) {
	        var matcher = args[i];
	        if (!JsHamcrest.isMatcher(matcher)) {
	          matcher = JsHamcrest.Matchers.equalTo(matcher);
	        }
	        if (!matcher.matches(actual)) {
	          failedResults.push(matcher);
	          return false;
	        }
	      }
	      return true;
	    },

	    describeTo: function(description) {
	      description.appendList('(', ' and ', ')', args);
	    },
        
        describeValueTo: function(actual, description){
        	description.append('(');
            for (var i = 0; i < failedResults.length; i++) {
              if (i > 0) {
            	  description.append(',');
              }
              description.append(failedResults[i].describeValueTo(actual, description));
            }
            description.append(')');
        }
	  });
	};
	
	window.equivalentArray = function(expected){
		var results = [];
		return new JsHamcrest.SimpleMatcher({
	        matches: function(actual){
	        	results = compareObjects('expected', 'actual', expected, actual);
	        	return results.length == 0; 
	        },

	        describeTo: function(description) {
	            description.append('array equivalent');
	        },
	        
	        describeValueTo: function(actual, description){
	        	description.append('\n => ' + results.join('\n => '));
	        }
	    });
	};
	
	window.equivalentMap = function(expected){
		var results = [];
		return new JsHamcrest.SimpleMatcher({
	        matches: function(actual){
	        	results = compareObjects('expected', 'actual', expected, actual);
	        	return results.length == 0; 
	        },

	        describeTo: function(description) {
	            description.append('map equivalent');
	        },
	        
	        describeValueTo: function(actual, description){
	        	description.append('\n -> ' + results.join('\n -> '));
	        }
	    });
	};
	
	function compareObjects(desc1, desc2, obj1, obj2){
		var results = [];
		var obj1Type = typeof obj1;
		var obj2Type = typeof obj2;
		if (obj1Type !== obj2Type){
			if (JsHamcrest.isMatcher(obj1)){
				if (!obj1.matches(obj2)){
					results.push(desc1 + '=' + obj1.toString() + ', ' + desc2 + '=' + obj2.toString());
				}
				return results;
				
			} else if (JsHamcrest.isMatcher(obj2)){
				if (!obj2.matches(obj1)){
					results.push(desc2 + '=' + obj2.toString() + ', ' + desc1 + '=' + obj1.toString());
				}
				return results;
				
			} else if (!JsHamcrest.isMatcher(obj1) && !JsHamcrest.isMatcher(obj2)){
				results.push(desc1 + ' type is ' + obj1Type + ', ' + desc2 + ' type is ' + obj2Type);
				return results;
			}
		}
		if (obj1Type !== 'object'){
			var matcher = JsHamcrest.retreiveEntityMatcherFunction(obj1);
			
			if (!matcher(obj1, obj2)){
				results.push(desc1 + '=' + obj1.toString() + ', ' + desc2 + '=' + obj2.toString());
			}

			
		} else if (obj1 instanceof Array || obj2 instanceof Array){

			if (obj1 instanceof Array && !(obj2 instanceof Array)){
				results.push(desc1 + ' is an array but ' + desc2 + ' is not');
				
			} else if (obj2 instanceof Array && !(obj1 instanceof Array)){
				results.push(desc2 + ' is an array but ' + desc1 + ' is not');
				
			} else if (obj1.length !== obj2.length) {
				results.push(desc1 + '.length=' + obj1.length + ', ' + desc2 + '.length=' + obj2.length);
				
			} else {
				array.forEach(obj1, function(itemObj1, index){
					var itemObj2 = obj2[index];
					results = results.concat(compareObjects(desc1 + '[' + index + ']', desc2 + '[' + index + ']', itemObj1, itemObj2));
				});
			}
			
		} else {
			for (prop in obj1){
				if (!(prop in obj2)){
					results.push(desc1 + " has attribute '" + prop + "' but " + desc2 + " doesn't");
				} else {
					var itemObj1 = obj1[prop];
					var itemObj2 = obj2[prop];
					results = results.concat(compareObjects(desc1 + "['" + prop + "']", desc2 + "['" + prop + "']", itemObj1, itemObj2));						
				}
			}
			for (prop in obj2){
				if (!(prop in obj1)){
					results.push(desc2 + " has attribute '" + prop + "' but " + desc1 + " doesn't");
				}
			}
		}
		return results;
	}
	
	
	
	function _createTestThatExpectsError(currentTestJson, currentTestName){
		return function(){
			var expectedErrorClass = (currentTestJson.expectedErrorClass || null);		
			
			var expectedErrorMsg = currentTestJson['expectedErrorMessage'] || currentTestJson['expectedErrorClass'].prototype.declaredClass;
			var testFunction = currentTestJson['test'];
			var testWithAdaptedErrorMsg = _adaptTestToThrowErrorInJsHamcrestFormat(testFunction, expectedErrorClass, expectedErrorMsg); 
			assertThat(testWithAdaptedErrorMsg, raises(expectedErrorMsg));							
		};		
	}
	
	function _extractMessageFromError(e){
		var actualErrorMsg = null;
		if (lang.isString(e)){
			actualErrorMsg = e;
			
		} else if (lang.isObject(e)) {
			if (e instanceof Error){
				actualErrorMsg = e.message;
				
			} else if (e instanceof PlatformRuntimeException) {
				actualErrorMsg = e.getMessageKey();
				
			} else {
				actualErrorMsg = Object.prototype.toString.call(e);
			}
			
		}
		return actualErrorMsg;
	}
	
	function _adaptTestToThrowErrorInJsHamcrestFormat(testFunction, expectedErrorClass, expectedErrorMsg){
		var adaptedTestFunction = function(){
			try {
				testFunction();
				
			} catch (e) {
				//For JsHamcrest raises matcher, the expected thrown error is
				//compared with e.name, so if the error is simply a message,
				//an Error(message), an instance of PlatformRuntimeException, 
				//convert it so the new error has a 
				//name property with the error message.
				
				var actualErrorMsg = _extractMessageFromError(e);				
				if (expectedErrorClass){ //Expecting a specific error class
					var expectedErrorClassName = expectedErrorClass.prototype.declaredClass;
					if (e instanceof expectedErrorClass) {
						throw {name: expectedErrorClassName}; //this will make the test pass
					} else {
						if (e.declaredClass){
							throw {name: e.declaredClass, message: "Expected error " + expectedErrorClassName + " but was thrown " + e.declaredClass}; //this will make the test fail with a descriptive msg
						} else {
							throw {name: actualErrorMsg, message: "Expected error " + expectedErrorClassName + " but was thrown " + actualErrorMsg}; //this will make the test fail with a descriptive msg
						}
					}
					
				} else { //Expecting either a text, an Error or a PlatformRuntimeException
					if (expectedErrorMsg === actualErrorMsg) {
						throw {name: actualErrorMsg};
					} else {
						throw {name: actualErrorMsg, message: "Expected error " + expectedErrorMsg + " but was thrown " + actualErrorMsg}; //this will make the test fail with a descriptive msg
					}

				}
				
				throw e;
			}
			var expectedError = (expectedErrorClass) ? expectedErrorClass.prototype.declaredClass : expectedErrorMsg;
			throw {message: 'Expected error ' + expectedError + ' but nothing was thrown'};
		};
		return adaptedTestFunction;
	}
	
	function _cleanUp(){
		window.WL = lang.clone(originalWLObj);
		
		delete mocks;
		mocks = {};
		
		for(mid in adviceHandles){
			var handles = adviceHandles[mid];
			array.forEach(handles, function(handle){
				handle.remove();
				if (handle.revertFunction){
					handle.revertFunction();
				};
			});
		}
		delete adviceHandles;
		adviceHandles = {};
		
		for(mid in mockedClasses){
			var clazz = mockedClasses[mid];
			clazz.prototype.preamble = clazz.prototype._originalPreamble;
			delete clazz.prototype['_originalPreamble'];
		}
		delete mockedClasses;
		mockedClasses = {};
	}
	
	function _resetDOM(){
		if (has('host-rhino')){ //We currently can only support dom cleanup on rhino
	        window.document = document = new HTMLDocument(new DOMImplementation(), window);
	        html = document.createElement('html');
	        head = document.createElement('head');
	        body = document.createElement('body');
	        html.appendChild(head);
	        html.appendChild(body);
	        document.appendChild(html);
		}
	}
	
	function _createCustomPreamble(mid, clazz){
		//Creates a preamble function (called by dojo before the constructor)
		//that picks up a mock from the list of created mocks for the mid
		//and set it as the delegator for that instance of the clazz being created.
		//If the clazz has it's own preamble function, make our custom preamble to
		//call the original one afterwards.
		mockedClasses[mid] = clazz;
		var originalPreamble = clazz.prototype._originalPreamble = (clazz.prototype.preamble || function(){});
		clazz.prototype.preamble = function(){
			if (isMockitoInstance) return;
			//set up the current mock in the mocks list for this mid as the delegator
			//for all object's method
			this.delegator = (mocks[mid] && mocks[mid].length > 0 ? mocks[mid].shift() : null);
			originalPreamble.apply(this, arguments);
		};
	}
	
	function _redirectMethodsToDelegator(mid, clazz){
		adviceHandles[mid] = [];		
		for (prop in clazz.prototype){
			(function(){
				var currentProp = prop;
				if (lang.isFunction(clazz.prototype[currentProp]) && !/preamble|_originalPreamble|postscript|constructor/.test(currentProp)){
					var handle = aspect.around(clazz.prototype, currentProp, function(originalFunc){
						return function(){
							if (this.delegator){
								return this.delegator[currentProp].apply(this.delegator, arguments);
							} else {
								print('falling back to default');
								return originalFunc.apply(this, arguments);
							}
						};
					});
					adviceHandles[mid].push(handle);
				}
			
			})();				
		}
	}
	
	function _createMockitoMock(mid, clazz){
		if (!mocks[mid]){
			mocks[mid] = [];
		}
		
		isMockitoInstance = true;
		var _mock = mockitoMock(clazz);
		isMockitoInstance = false;
		mocks[mid].push(_mock);
		return _mock;
	}
	
	var mocks = {};
	var mockedClasses = {};
	var adviceHandles = {};
	var isMockitoInstance = false;
	
	function _introspectArgumentNames(func){
		var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
		var result = func.toString().match(FN_ARGS)[1].replace(/\s/gi,'').split(',');
		result = (result[0] == '') ? [] : result;
		return result;
	}
	
	var mockSandbox = sinon.sandbox.create();
	
	return {

		verifyContract: function(object, methodName, arrayOfArguments){
			assertThat(object, hasMember(methodName, func()));
			arrayOfArguments = (lang.isArray(arrayOfArguments)) ? arrayOfArguments : [];
			var argumentsList = _introspectArgumentNames(object[methodName]);
			assertThat(argumentsList, equivalentArray(arrayOfArguments), "Expected the following signature for method " + methodName + "(" + arrayOfArguments.join(',') + ")");
		},
		
		register: function register(groupIdOrRequireFunction, testHash){
//			Summary:
//				This register creates a default tearDown function that ensures the mocks
//				of all classes are clean up after any tests run, running any other tearDown 
//				provided right after the clean up.
//			
			var self = this;
			var groupId = groupIdOrRequireFunction;
			//dojo require function object was provided so extract
			//module name from it
			if (typeof groupIdOrRequireFunction === 'function' && 'module' in groupIdOrRequireFunction){
				groupId = groupIdOrRequireFunction.module.mid;
			}

			function createFailedAssertionWithFilteredStackTrace(err, errorDescription) {
				var monkeyFound = false;
				var errFilteredStack = err; 
				if (err.stack){
					errFilteredStack = err.stack.split('\n').filter(function(item) {
						monkeyFound = (monkeyFound || /qunit-runner-monkeypatch\.js/gi.test(item));
						return !monkeyFound;
					}).join('\n'); 
					
				} else if (err.message){
					errFilteredStack = err.message;
					
				} else if (err.messageKey) {
					errFilteredStack = err.messageKey;
				}
					
				var errorPrefix = "[[ERROR]]"; //This will be used by JUnit runner to detect
											   //this is an error not a failure
				QUnit.pushFailure( errorPrefix + errorDescription + errFilteredStack);
			};
			
			
			var moduleHash = {};
			if ('setUp' in testHash || 'setup' in testHash){
				(function() {
					var originalSetup = (testHash['setUp'] || testHash['setup']);
					moduleHash['setup'] = function() {
						try{
							originalSetup.apply(this, arguments);
						} catch (e){
							createFailedAssertionWithFilteredStackTrace(e, "Setup failed: ");
						}
					};
				})();
				
				delete testHash['setUp'];
				delete testHash['setup'];
			}
			if ('tearDown' in testHash || 'teardown' in testHash){
				(function() {
					var userTearDown = (testHash['tearDown'] || testHash['teardown']);
					moduleHash['teardown'] = function(){
						mockSandbox.restore();
						self.resetMocks();
						try {
							userTearDown();
						} catch (e) {
							createFailedAssertionWithFilteredStackTrace(e, "Tear down failed: ");
						}
					};									
				})();
				delete testHash['tearDown'];
				delete testHash['teardown'];
			} else {
				moduleHash['teardown'] = function(){
					mockSandbox.restore();
					self.resetMocks();
				};				
			}
			module(groupId, moduleHash);
			var testNames = Object.keys(testHash);
			testNames.forEach(function(testName){
				var testFunction = null;
				
				if (typeof testHash[testName] === "object"){
					if ("expectedErrorMessage" in testHash[testName]){
						testFunction = function(assert){
							throws(testHash[testName].test, testHash[testName].expectedErrorMessage, testName);
						};
					} else {
						testFunction = function(assert){
							var result = null;
							
							try {
								result = testHash[testName].test();
							} catch (e) {
								createFailedAssertionWithFilteredStackTrace(e, 'Error in test "' + testName + '": ');
							}
							if (result && result.errback && result.isQUnitStopped === false){
								result.isQUnitStopped = true;
								QUnit.stop();
								
							} else if (QUnit.config.current.assertions.length === 0){
								expect(0);							
							}						
						};
					}
					
				} else {
					testFunction = function(assert){
						var result = null;
	  					try {
							result = testHash[testName]();
						} catch (e) {
							createFailedAssertionWithFilteredStackTrace(e, 'Error in test "' + testName + '": ');
						}
						if (result && result.errback && result.isQUnitStopped === false){
							result.isQUnitStopped = true;
							QUnit.stop();
							
						} else if (QUnit.config.current.assertions.length === 0){
	  						expect(0);
	  					}
	  				};
				}  				
				
				test(testName, testFunction);
			});
		},
		
		createResolvedPromise: function createResolvedDeferred(resolvedValue){
//			Summary:
//				Creates a deferred promise that is already resolved to a given value.
//				
//			Description:
//				This method is useful for testing methods that return a promise,
//				so you can synchronously test the resolved data
				
			var deferred = new Deferred();
			var promise = deferred.promise;
			deferred.resolve(resolvedValue);
			
			return promise;
		},
		
		createRejectedPromise: function createResolvedDeferred(rejectedValue){
//			Summary:
//				Creates a deferred promise that is already rejected to a given value.
//				
//			Description:
//				This method is useful for testing methods that return a promise,
//				so you can synchronously test the resolved data
				
			var deferred = new Deferred();
			var promise = deferred.promise;
			deferred.reject(rejectedValue);
			
			return promise;
		},
		
		createFunctionMock: function createFunctionMock(clazz, functionName){
//			Summary:
//				Creates a mock for the given method of the class
				
			var mock = mockitoMockFunction();
			var originalFunc = clazz[functionName];
			
			var handle = aspect.around(clazz, functionName, function(){
				return mock;
			});
			
			handle['originalFunc'] = {
				originalFunc: originalFunc,
				methodName: functionName,
				clazz: clazz
			};
			
			handle.revertFunction = function(){
				var originalFuncInfo = this['originalFunc'];
				originalFuncInfo['clazz'][originalFuncInfo['methodName']] = originalFuncInfo['originalFunc'];
			};
			
			if (!('functions' in adviceHandles)){
				adviceHandles['functions'] = [];
			}
			
			adviceHandles['functions'].push(handle);
			return mock;
		},
		
		mock: function(){
			return mockSandbox.mock.apply(mockSandbox, arguments);
		},		
		
		/**
		 * @deprecated
		 * Use TestUtils.mock() instead
		 */
		createMock: function createMock(clazz, methodsToSkip){
//			Summary:
//				Creates and returns a mock from the given class.
//				
//			Description
//				Mocks are consumed as per instances of the class are created.
//				So if 3 mocks are created, the first instance created by the class
//				will delegate all method calls to the 1st mock created, the 2nd instance
//				to the 2nd mock, and so on.
//				When new instances are created and there are no more mocks available
//				the class' default behavior will be executed.
			
			var mid = clazz.prototype.declaredClass;
			
			var originalMethodsToPreserve = {};
			array.forEach(methodsToSkip, function(methodName){
				var proto = ((clazz && clazz.prototype) || clazz);
				originalMethodsToPreserve[methodName] = proto[methodName];
			});
			
			var _mock = _createMockitoMock(mid, clazz);
			
			if (!adviceHandles[mid]){
				_createCustomPreamble(mid, clazz);
				_redirectMethodsToDelegator(mid, clazz);				
			}			

			array.forEach(Object.keys(originalMethodsToPreserve), function(methodName){
				mockitoWhen(_mock)[methodName](anything()).then(originalMethodsToPreserve[methodName]);
			});
			
			return _mock;
		},
		
		/**
		 * @deprecated
		 */
		resetMocks: function resetMocks(){
//			Summary:
//				Resets all created mocks and revert
//				all instrumented classes to their original
//				state.
				
			_cleanUp();
		},
		
		createResolvedJQueryPromise: function createResolvedJQueryPromise(value){
			var promise = $.Deferred();
			promise.resolve(value);
			return promise;
		},

		compareObjects: function compareObjects(desc1, desc2, obj1, obj2){
			var results = [];
			var obj1Type = typeof obj1;
			var obj2Type = typeof obj2;
			if (obj1Type !== obj2Type){
				results.push(desc1 + ' type is ' + obj1Type + ', ' + desc2 + ' type is ' + obj2Type);
				return results;
			}
			if (obj1Type !== 'object'){
				var matcher = JsHamcrest.retreiveEntityMatcherFunction(obj1);
				
				if (!matcher(obj1, obj2)){
					results.push(desc1 + '=' + obj1.toString() + ', ' + desc2 + '=' + obj2.toString());
				}

				
			} else if (obj1 instanceof Array || obj2 instanceof Array){

				if (obj1 instanceof Array && !(obj2 instanceof Array)){
					results.push(desc1 + ' is an array but ' + desc2 + ' is not');
					
				} else if (obj2 instanceof Array && !(obj1 instanceof Array)){
					results.push(desc2 + ' is an array but ' + desc1 + ' is not');
					
				} else if (obj1.length !== obj2.length) {
					results.push(desc1 + '.length=' + obj1.length + ', ' + desc2 + '.length=' + obj2.length);
					
				} else {
					array.forEach(obj1, lang.hitch(this, function(itemObj1, index){
						var itemObj2 = obj2[index];
						results = results.concat(this.compareObjects(desc1 + '[' + index + ']', desc2 + '[' + index + ']', itemObj1, itemObj2));
					}));
				}
				
			} else {
				for (prop in obj1){
					if (!(prop in obj2)){
						results.push(desc1 + " has attribute '" + prop + "' but " + desc2 + " doesn't");
					} else {
						var itemObj1 = obj1[prop];
						var itemObj2 = obj2[prop];
						results = results.concat(this.compareObjects(desc1 + "['" + prop + "']", desc2 + "['" + prop + "']", itemObj1, itemObj2));						
					}
				}
				for (prop in obj2){
					if (!(prop in obj1)){
						results.push(desc2 + " has attribute '" + prop + "' but " + desc1 + " doesn't");
					}
				}
			}
			return results;
		}
	};
});
