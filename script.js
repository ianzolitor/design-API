var infoSection = document.getElementsByClassName("return-display")[0]



$.ajax({
	url: "https://api-practice-wdi.herokuapp.com/posts",
	dataType: "Json",

	success: function(response){
		console.log(response)

	response.posts.forEach(function(object){
            infoSection.innerHTML += "<div class = 'return-box'> <div class = 'return-photo'> <img src='" + object.img + "' width='100%' height='100%'>" +"</div>" + "<div class = 'return-date'>" + object.date + "</div>" + "<div class = 'return-title'>" + object.title +"</div>" + "</div>"
	})

}

});