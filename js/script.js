$(document).ready(function(){
    //슬라이드
    const slide = setInterval(leftMove, 1800);
    const size = $(".imgslide a").width();
    //console.log(size);
    let i =0;
    let j = 0;
    function leftMove(i){
        //console.log("위치"+i);
        let z = 0;
        if(i==null){
            z = $(".btnslide button.orange").index();
            z++;
            if(z==3){z=0;}   
            j=z;
        }else {
            j=i;
        }        
        $(".imgslide").stop().animate({left:size * (j*-1)},800);                     
        $(".btnslide button").eq(j).addClass("orange").siblings().removeClass("orange");  
       
    };

    $(".btnslide button").click(function(){
        i = $(this).index();       
        leftMove(i);        
    });

    /*미디어쿼리*/

    if(  $(window).width() < 768   ){
        $("#ham").click(function(){
            $(".navi").stop().slideToggle("slow", function(){
                if( $(".navi").css("display")=="block"){
                }
    
                if( $(".navi").css("display")=="none"){
                }
            });
        });
    
        $(".navi a").click(function(){
            $(".navi").stop().slideUp();
        });
    }

    


});////////////////////