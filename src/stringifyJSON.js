// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  	
	if(typeof obj === 'number') {
		return "" + obj;
	} else if(typeof obj === "string") {
		return "\"" + obj + "\"";
	} else if(obj === true) {
		return "true";
	} else if(obj === false) {
		return "false";
	} else if(obj === null) {
		return "null";

		//check if array.
	} else if(Array.isArray(obj)) {
		var array = [];

		for(var i = 0; i < obj.length; i++) {
			array.push(stringifyJSON(obj[i]));
		}

		return "[" + array + "]";
	} else if(obj instanceof Object) {
		
		var arrayKeys = [];
		var arrayValues = [];
		var string = "{";

		for(var key in obj) {
			//if a function is passed, it cannot be stringified and will return "";
			if(obj[key] instanceof Function || obj[key] === undefined) {
				arrayKeys.push("");
				arrayValues.push("");
			} else {
				//push key and value to arrays
				arrayKeys.push(stringifyJSON(key));
				arrayValues.push(stringifyJSON(obj[key]));
			}
		}

		//use the values pushed to the array to create a stringified object
		for(var i = 0; i < arrayKeys.length; i++) {
			//Check to see if comma is needed. If only one property is left then no need.
			if(arrayKeys[i] != "" || arrayValues[i] != "")
			{
				if(i === arrayKeys.length-1) {
					string += arrayKeys[i] + ":" + arrayValues[i];
				} else {
					string += arrayKeys[i] + ":" + arrayValues[i] + ",";
				}

			}
			
			
		}


	return string + "}";
}

};
