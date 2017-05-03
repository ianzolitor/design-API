var infoSection = document.getElementsByClassName("return-display")[0]
var hmenu = document.getElementsByClassName("hmenu")[0]

hmenu.addEventListener("mouseover", function(event){
	event.target.style.cursor = "pointer"
})
hmenu.addEventListener("click", function () {
	console.log(event)
})

function openMenu () {


}

$.ajax({
	url: "https://api-practice-wdi.herokuapp.com/posts",
	dataType: "Json",

	success: function(response){
		console.log(response)

	response.posts.forEach(function(object){
		var dateFormat = object.date
		dateFormat = dateFormat.split("/")
		var month = dateFormat[0]
		var day = dateFormat[1]
		if(month === "2"){
			month = "Feb"
		}
		if (month === "1"){
			month = "Jan"
		}
		var newDateFormat = month + " " + day
            infoSection.innerHTML += "<div class = 'return-box'> <div class = 'return-photo'> <img src='" + object.img + "' width='100%' height='100%'>" +"</div>" + "<div class = 'return-date'>" + newDateFormat + "</div>" + "<div class = 'return-title'>" + object.title +"</div>" + "<hr class = photo-break>" + "<div class = 'return-category'>" + object.categories[0] + "</div>" + "</div>"
	})

}

});