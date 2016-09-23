// toggle between addinga nd removing the "responsive" class to navbar when the user clicks on the icon
function myFunction(){
	var x = document.getElementById("myNavbar");
	if(x.className === "navbar"){
		x.className += "responsive";
	} else{
		x.className = "navbar";
	}
}