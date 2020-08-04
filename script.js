$(document).ready(function() {
    var disabled = false;
    var shootEnabled = false;
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('.img').animate({left: "-=50px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('.img').animate({top: "-=50px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('.img').animate({left: "+=50px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('.img').animate({top: "+=50px"}, 'fast');
				break;
			//Spacebar
			case 32:
			 //   if(disabled){
			 //   shootEnabled = true;
			  //  break;
			  //  }
			    var pos = $('.img').position();
			   // currentTile = $('#grid_test');
			   $('.img').replaceWith($('.bomb'));
			   

        $('.img').css({
        'background-position':pos.top+'px '+pso.left+'px'
        });
			    //shoot();
			   // disabled = true;
			 //   setTimeout(function(){
			  //      disabled = false;
			   //     if(shootEnabled){
			 //        shootEnabled = false;
			   //      shootingHandler(key);
			  //      }
			   // }, 1000);
		        break;
        }
	});
	
});