var accessToken = 'd14057649c304e0891fa6d897eb95a97';
var caption;

$.ajax({
    url: 'https://api.instagram.com/v1/users/6740542/media/recent/?client_id=d14057649c304e0891fa6d897eb95a97&count=10',
    dataType: 'jsonp',
    type: 'GET',
    success: function(response){
        console.log(response);
			
        for(x in response.data){
			var innerHTML= '<div class="slides"><img src="'+response.data[x].images.low_resolution.url+'"></div>';
            if (response.data[x].caption === null) {
                        console.log('if was called');
                    } else {
                        caption += '<p class="ptext">'+response.data[x].caption.text+'</p>';
                        console.log('else was called');
                    } //ifelse statement
            $('.carousel').append(innerHTML);

		} //forloop ends



        $('.carousel').slick({
            arrows:false,
            dots:true,
            infinite:true,
            slidesToShow:3,
            slidesToScroll:3,
            centerMode: true,
            variableWidth:true
        });


    }, //success function ends

    error: function(response){
        console.log(response);
    },
});



// +response.data[x].caption.text+
