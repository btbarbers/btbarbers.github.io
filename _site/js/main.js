jQuery(document).ready(function(){

    /*$('.rs-carousel').carousel({
     orientation: 'horizontal',
     itemsPerTransition: 'auto',
     loop:true,
     speed: 'fast',
     easing: 'swing',
     nextPrevActions:true,
     whitespace: true,
     pause:1,
     pagination:true,
     insertPrevAction:function(){ return $('<a href="#" class="rs-carousel-action rs-carousel-action-prev"><i class="fa fa-arrow-left"></i></a>').appendTo($(this).find('.prev'))},
     insertNextAction: function(){return $('<a href="#" class="rs-carousel-action rs-carousel-action-next"><i class="fa fa-arrow-right"></i></a>').appendTo($(this).find('.next'))}



    });*/

    // set paging text

    /*$('.rs-carousel-pagination-link a').each(function(){
      $(this).html('<i class=\"fa fa-circle\" aria-hidden=\"true\"></i>');
    })*/
	
    displayIconOnMobile();
    blueimp.Gallery(document.getElementById('links-home').getElementsByTagName('a'), {
        container: '#blueimp-gallery-carousel',
        carousel: true
      })
      document.getElementById('links').onclick = function (event) {
        event = event || window.event
        var target = event.target || event.srcElement
        var link = target.src ? target.parentNode : target
        var options = { index: link, event: event }
        var links = this.getElementsByTagName('a')
        blueimp.Gallery(links, options)
    }
    
    
   


});

//############################################################################
//Update page link icons on mobile devices
//############################################################################
function displayIconOnMobile(){
    jQuery('.menu-icon').on('click',function(){
        jQuery('.site-nav').toggleClass('active');
        if(jQuery('.site-nav').hasClass('active')){
            jQuery('.site-nav').css('z-index','89');
            jQuery('.trigger').css('display','block');
            
        }else{
               
            jQuery('.trigger').css('display','none');
             jQuery('.site-nav').css('z-index','');
        }
        
        
    });
}