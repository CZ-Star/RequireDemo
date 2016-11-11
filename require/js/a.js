


//function myFunctionA() {
//	document.write("<p>myFunctionA</p>");
//}

define(function (){

　　　　var myFunctionA = function myFunctionA() {
			document.write("<p>myFunctionA</p>");
		};
　　　　return {
　　　　　　myFunctionA: myFunctionA
　　　　};

});
