// $('#navPageCircle1').on("click",function(){
//     console.log("ok")
// })
//中英日三種語言的富士山太陽隨機升起
$('#sun').prop('src',`./img/1x/sun${Math.floor(Math.random()*3+1)}.png`)
//navbar滑鼠滑入圓圈出現選單，離開選單則隱藏
// $('#navPageCircle1').mouseenter(function(){
//     $('#navPage1>button').fadeIn()
// });
// $('#navPage1>button').mouseout(function(){
//     $('#navPage1>button').hide()
// });
// $('#navPageCircle2').mouseenter(function(){
//     $('#navPage2>button').fadeIn()
// });
// $('#navPage2>button').mouseout(function(){
//     $('#navPage2>button').hide()
// });
// $('#navPageCircle3').mouseenter(function(){
//     $('#navPage3>button').fadeIn()
// });
// $('#navPage3>button').mouseout(function(){
//     $('#navPage3>button').hide()
// });
// $('#navPageCircle4').mouseenter(function(){
//     $('#navPage4>button').fadeIn()
// });
// $('#navPage4>button').mouseout(function(){
//     $('#navPage4>button').hide()
// });
// $('#navPageCircle5').mouseenter(function(){
//     $('#navPage5>button').fadeIn()
// });
// $('#navPage5>button').mouseout(function(){
//     $('#navPage5>button').hide()
// });


// console.log($('#info').clientY);

// $('#info').on('click',function(a){
//     console.log(a.pageX);
//     console.log(a.clientY);
//     console.log($('section'))
//     // $("h5").text(`${a.offsetX},${a.offsetY}`)
// })



//  離開頁頂時才出現 gotop 按扭
// $("#navbar").fadeOut(0);
    // $(window).scroll(function(){
    //     if($(window).scroll() > 800){
    //         $("#navbar").fadeIn(0);
    //     }else{
    //         $("#navbar").fadeOut(0);
    //     }
    // });


// $('#trailsbt>div').on('mouseenter',function(){
//     // console.log("ok");
//     // $(this).find('p').css('vsisibility','visiable');
//     $(this).find('p').css('display','block');
//     $(this).find('p').css('Zindex','3');
// })
// $('#trailsbt>div>button').on('click',function(){
//     $(this).find('p').css('display','none');
// })


var yoshida = {
    recommendTo : "新手",
    upTime : "5.8 公里，約6小時25分",
    downTime : "6.9 公里，約3小時40分",
    altitude : "2300m",
};

$('#yoshida').on('click',function(){
    $("#trailsRecommend>p:nth-child(1)>span").text(yoshida.recommendTo);
    $("#trailsRecommend>p:nth-child(2)>span").text(yoshida.upTime);
    $("#trailsRecommend>p:nth-child(3)>span").text(yoshida.downTime);
    $("#trailsRecommend>p:nth-child(4)>span").text(yoshida.altitude);
})
var subashiri = {
    recommendTo : "高手",
    upTime : "約7小時",
    downTime : "約3小時40分",
    altitude : "2000m",
};
$('#subashiri').on('click',function(){
    $("#trailsRecommend>p:nth-child(1)>span").text(subashiri.recommendTo);
    $("#trailsRecommend>p:nth-child(2)>span").text(subashiri.upTime);
    $("#trailsRecommend>p:nth-child(3)>span").text(subashiri.downTime);
    $("#trailsRecommend>p:nth-child(4)>span").text(subashiri.altitude);
})
var gotemba = {
    recommendTo : "高手",
    upTime : "約8小時15分",
    downTime : "約4小時30分",
    altitude : "1440m",
};
$('#gotemba').on('click',function(){
    $("#trailsRecommend>p:nth-child(1)>span").text(gotemba.recommendTo);
    $("#trailsRecommend>p:nth-child(2)>span").text(gotemba.upTime);
    $("#trailsRecommend>p:nth-child(3)>span").text(gotemba.downTime);
    $("#trailsRecommend>p:nth-child(4)>span").text(gotemba.altitude);
})
var fujinomiya = {
    recommendTo : "新手",
    upTime : "3.7 公里，約5小時45分",
    downTime : "3.7 公里，約3小時50分",
    altitude : "2400m",
};
$('#fujinomiya').on('click',function(){
    $("#trailsRecommend>p:nth-child(1)>span").text(fujinomiya.recommendTo);
    $("#trailsRecommend>p:nth-child(2)>span").text(fujinomiya.upTime);
    $("#trailsRecommend>p:nth-child(3)>span").text(fujinomiya.downTime);
    $("#trailsRecommend>p:nth-child(4)>span").text(fujinomiya.altitude);
})


// 打字特效
let mytyping = document.querySelector('#slide1Text');
mytyping.innerHTML = mytyping.textContent.replace( /\S/g ,"<span>$&</span>");

let mytyping2 = document.querySelector('#slide2Text');
mytyping2.innerHTML = mytyping2.textContent.replace( /\S/g ,"<span>$&</span>");

$('#slide1').hover( function(){
    $('#slide1Text span').css('animation-play-state','running');
    let delay1 = 1;
    document.querySelectorAll('#slide1Text span').forEach(( span , index)=>{
        delay1 += 0.3;
        if( index===5 || index===9 || index===12 || index===15){
            delay1 +=0.6;
        }
    span.style.setProperty('--delay1',`${delay1}s`);
    }) 
})
$('#slide2').hover( function(){
    $('#slide2Text span').css('animation-play-state','running');
    let delay2 = 1;
    document.querySelectorAll('#slide2Text span').forEach((span , index)=>{
        delay2 += 0.3;
        if( index===7 || index===9 || index===12){
            delay2 +=0.6;
        }
        span.style.setProperty('--delay2',`${delay2}s`);
    }) 
})


//小測驗
// $('#yamabikoMountain').click(function(){
//     $('#question').fadeIn();
//     $('#questionOne').css('display','block');
//     $('#answer').fadeIn('slow');
// })


// $('#answerO').click(function(){
//     $('#question').css("height", "120px");
//     $('#result').css('display','block');
//     $('#result').text('答錯了！');
// })

// $('#answerX').click(function(){
//     $('#question').css("height", "120px");
//     $('#result').css('display','block');
//     $('#result').text('答對了！');
//     $('#result').append('<button id="toQuextion2" class="nextQuextion">下一題</button>');
//     $('#toQuextion2').click(function(){
//         console.log('ok');
//         $('#question').css("height", "60px");
//         $('#questionOne').css('display','none');
//         $('#toQuextion2').css('display','none');
//         $('#questionTwe').css('display','block');
//     })
// })


let questionssss=[
    {
        Questions : 'Q1：請問一年四季都可以登富士山嗎？' ,
        answer : false,
    },
    {
        Questions : 'Q2：請問登富士山可以一天來回嗎？' ,
        answer : false,
    },
    {
        Questions : 'Q3：富士山山頂夏天的氣溫都在30度以上嗎？' ,
        answer : false,
    },
    {
        Questions : 'Q4：吉田路線的指標顏色是黃色嗎？' ,
        answer : true,
    },
    {
        Questions : 'Q5：到五合目不用適應高度就可以直接登山？' ,
        answer : false,
    }

]

var i = 0 ;
// 點選開始，出現第一題
$('#yamabikoMountain').click(function(){
    i = 0 ;
    $('#question').css("height", "60px");
    $('#question').fadeIn();
    $('#questionShow').text(questionssss[0].Questions);
    $('#result').hide();
    $('#answer').fadeIn('slow');
})
// 使用者點選O或X，回傳對應的答案，等待判斷
var temp = Boolean ; 
// temp = 1 ;
function yesyes(){
    temp = true ;
    judgment()
    $('#question').css("height", "120px");
    $('#result').show();
}
function nono(){
    temp = false ;
    judgment()
    $('#question').css("height", "120px");
    $('#result').show();
}

// 判斷回答是否正確
// 下一題同樣O X的按鈕進行問題回答
function judgment(){
    //判斷現在第幾題，不是最後一題，答對都要出現下一題按鈕
    if(i<4){
        if (temp == questionssss[i].answer){
            // 如果正確，出現文字答對了及下一題的按鈕
            $('#result').text("答對了！");
            $('#result').append('<button id="next" class="nextQuextion">下一題</button>')
            // 點選下一題的按鈕，出現下一題的題目、清空等待判斷答案的暫存區
            i++ ;
            $('#next').click(function(){
                $('#question').css("height", "60px");
                $('#result').hide();
                $('#questionShow').text(questionssss[i].Questions);
                var temp = Boolean ; 
                $('#next').hide();
            })
        }else{
            //如果答錯，出現答錯了，畫面不動
            $('#result').text("答錯了！");
        }
    }else{
        //最後一題答對後，不出現下一題按鈕
        if (temp == questionssss[i].answer){
            // 如果答對，出現文字答對了！恭喜過關
            $('#result').text("答對了！恭喜過關～可以去爬富士山啦！");
            // i = 0 ;
        }else{
            //如果答錯，出現答錯了，畫面不動
            $('#result').text("答錯了！");
        }
    }
}

//行程切換

$('#changeToitinerary1').click(function(){
    $('#itinerary1').show();
    $('#itinerary2').hide();
    $('#changeToitinerary1').css('background-color','var(--lightblue)')
    $('#changeToitinerary1').css('color','var(--blue)')
    $('#changeToitinerary2').css('background-color','var(--blue)')
    $('#changeToitinerary2').css('color','white')
})
$('#changeToitinerary2').click(function(){
    $('#itinerary1').hide();
    $('#itinerary2').show();
    $('#changeToitinerary1').css('background-color','var(--blue)')
    $('#changeToitinerary1').css('color','white')
    $('#changeToitinerary2').css('background-color','var(--lightblue)')
    $('#changeToitinerary2').css('color','var(--blue)')
})




let photoShow = [
    { 
    itinerary : $('#itineraryImg') ,
    photos : './img/bg2.jpg'
    },
]

$('#itinerary1X1').hover(function(){
    $('#itineraryImg').prop('src','./img/bg2.jpg');
})

// $('#itinerary1X1').hover(function(){
//     $('#itineraryImg').prop('src','./img/bg2.jpg');
// })

//滑鼠進入各別行程區域
//圖片更換為指定的圖片


