// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var nodes = [];

  function search(node) {
  	var array = node.className.split(' ');

  	if( array.indexOf(className) >= 0) {
  		nodes.push(node);
  	}

  	for(var i = 0; i < node.children.length; i++) {
  		search(node.children[i]);
  	}

  };

  search(document.body);

  return nodes;
};