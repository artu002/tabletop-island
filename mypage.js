
// hide/show chain on click chain index.html

$(document).ready(function(){
    $(".main-block").eq(2).on("click", function(){
       $(".first-block-content").eq(2).slideUp(500).slideDown(1000).slideUp(500).slideDown(1000);
    });
});



//animation logo top right index.html
$(document).ready(function(){
    $(".top-logo").on("click", function(){
        $("top-logo").css("position", "relative");
        let logo = $(".top-logo");
       
      
       logo.animate({height: '50px', opacity: '0.4'}, "slow");
       logo.animate({width: '300px', opacity: '1.0'}, "slow");
       logo.animate({height: '140px', opacity: '0.4'}, "slow");
       logo.animate({width: '160px', opacity: '1.0'}, "slow");
    })
})
