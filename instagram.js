var accessToken = 'd14057649c304e0891fa6d897eb95a97';

$.ajax({
    url: 'https://api.instagram.com/v1/users/6740542/media/recent/?client_id=d14057649c304e0891fa6d897eb95a97&count=10',
    dataType: 'jsonp',
    type: 'GET',
    success: function(response){
        console.log(response);
			
        for(x in response.data){
					var innerHTML= '<div class="slides"><img src="'+response.data[x].images.low_resolution.url+'"></div>';
//					
					$('.carousel').append(innerHTML);
				} //forloop ends
				
    }, //success function ends
    error: function(response){
        console.log(response);
    }
});



// +response.data[x].caption.text+
