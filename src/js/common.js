//图片加载
var loader = new resLoader({
	resources : [
			"http://m.eic.org.cn/special/c_plan/images/wx_pic.jpg",
			"http://m.eic.org.cn/special/c_plan/images/loading_logo.png",
			"http://m.eic.org.cn/special/c_plan/images/laoding_procbg.png",
			"http://m.eic.org.cn/special/c_plan/images/bg_loading.jpg",
			"http://m.eic.org.cn/special/c_plan/images/bg1.jpg",
			"http://m.eic.org.cn/special/c_plan/images/p1_s.png",
			"http://m.eic.org.cn/special/c_plan/images/p1_t.png",
			"http://m.eic.org.cn/special/c_plan/images/p1_k3.png",
			"http://m.eic.org.cn/special/c_plan/images/p1_k4.png",
			"http://m.eic.org.cn/special/c_plan/images/p1_k5.png",
			"http://m.eic.org.cn/special/c_plan/images/p1_y1.png",
			"http://m.eic.org.cn/special/c_plan/images/p1_y2.png",
			"http://m.eic.org.cn/special/c_plan/images/p1_y3.png",
			"http://m.eic.org.cn/special/c_plan/images/p1_y4.png",
			"http://m.eic.org.cn/special/c_plan/images/p1_y5.png",
			"http://m.eic.org.cn/special/c_plan/images/p1_y6.png",
			"http://m.eic.org.cn/special/c_plan/images/p1_y7.png",
			"http://m.eic.org.cn/special/c_plan/images/p1_y8.png"
	],
	onStart : function(total){
		//console.log('start:'+total);
	},
	onProgress : function(current, total){
		//console.log(current+'/'+total);
		var percent = parseInt(current/total*100); 
		$('.progressbar').css('width', percent+'%');
		$('.progresstext .current').text(percent+'%');
		//$('.progresstext .current').text(current);
		//$('.progresstext .total').text(total);
	},
	onComplete : function(total){
		$(".loaded").hide();
		$("#section1 .s-box").css("display","block");
		
		//alert('加载完毕:'+total+'个资源');
		
	    //阻止安卓手机图片默认点击放大
		$(".s-box img").click(function(e) {
			e.preventDefault();
		});

	}
});

$(function () {
    loader.start();
    //$(".loaded").hide();
    var _data = question[0],answer=[],correctAnswer=[];
    $(".fullpage").fullpage({
        sectionsColor: ['#fff5f0', '#fff5f0', '#fff5f0', '#fff5f0'],
        afterLoad: function (anchorLink, index) {
            if (index == 4) {
                var box = $("#question .question_item");
                var errorNum = $('#errorNum');
                var tipText = $('#tipText');
                var count = 0;
                for (let i = 0; i < answer.length; i++) {
                    if(answer[i] == correctAnswer[i]){
                        count++;
                    }
                }
                console.log('正确答案', count);
                console.log(answer);
                console.log(correctAnswer);
                if(count >= box.length){
                    errorNum.text('恭喜您，全对！')
                    tipText.text(tipTextArray[0])
                } else if(count >= box.length - 3){
                    errorNum.text('您答错'+ (box.length-count) +'题！')
                    tipText.text(tipTextArray[1])
                } else if(count >= box.length - 6){
                    errorNum.text('您答错'+ (box.length-count) +'题！')
                    tipText.text(tipTextArray[2])
                } else {
                    errorNum.text('您答错'+ (box.length-count) +'题！')
                    tipText.text(tipTextArray[3])
                }
                
            }
        },
        afterRender: function () {
            $.fn.fullpage.setAllowScrolling(false);
            // $.fn.fullpage.moveSectionDown();
        }
    });
	
	$(".p1_btn").click(function(e) {
		$.fn.fullpage.moveSectionDown();
	});
	
	//第1屏停止动画
	var p1_xs = document.querySelector('.p1_sz1');
	p1_xs.addEventListener("webkitAnimationEnd", function(){ 
		 setTimeout(wzdh1(), 3000)
	}, false);
	
	function wzdh1(){
		$(".p1_tz1").removeClass("fadeInRight animated");
		$(".p1_tz1").addClass("fadeOutRight animated");
	 	$(".p1_sz1").removeClass("fadeInLeft animated");
		$(".p1_sz1").addClass("fadeOutLeft animated");
		
		var p2 = document.querySelector('.p1_sz1.fadeOutLeft');
		p2.addEventListener("webkitAnimationEnd", function(){ 
			$(".p1_tz2").addClass("fadeInRight animated");
		 	$(".p1_sz2").addClass("fadeInLeft animated");
		}, false);
		
		var p2_xs = document.querySelector('.p1_sz2');
		p2_xs.addEventListener("webkitAnimationEnd", function(){ 
			 setTimeout(wzdh2(), 3000)
		}, false);
		
	}
	
	function wzdh2(){
		$(".p1_tz2").removeClass("fadeInRight animated");
		$(".p1_tz2").addClass("fadeOutRight animated");
	 	$(".p1_sz2").removeClass("fadeInLeft animated");
		$(".p1_sz2").addClass("fadeOutLeft animated");
		
		var p3 = document.querySelector('.p1_sz2.fadeOutLeft');
		p3.addEventListener("webkitAnimationEnd", function(){ 
			$(".p1_tz3").addClass("fadeInRight animated");
		 	$(".p1_sz3").addClass("fadeInLeft animated");
		}, false);
		
		var p3_xs = document.querySelector('.p1_sz3');
		p3_xs.addEventListener("webkitAnimationEnd", function(){ 
			$(".p1_arr").addClass("arrow animated");
			$(".p1_btn").addClass("fadeInDown animated");
		}, false);
    }
    

     // 上一题
     var question_num = 0;
     $(".previous").on('click',function(){
         $(".next").text('下一题 >')
         var box = $("#question .question_item");
         if(question_num<=0){
             question_num = 0;
             return;
         } else {
             question_num--;
         }
         box.removeClass('active');
         box.eq(question_num).addClass('active');
     });
     // 下一题
     $(".next").on('click',function(){
         var box = $("#question .question_item");
         console.log(question_num,box.length);
         if(question_num >= box.length - 2){
             $(this).text('查看答案 >')
         }
         if(question_num >= box.length - 1){
             question_num = box.length - 1;
             box.each(function(index){
                 var str = '';
                 $('input[name=' + _data.key + index + ']:checked').each(function(i){
                     str += $(this).val();
                 });
                 answer.push(str)
             })
             $.fn.fullpage.moveSectionDown();
             return;
         } else {
             question_num++;
         }
         
         box.removeClass('active');
         box.eq(question_num).addClass('active');
     });
     // 拿到对应题目
     $("#btnview").click(function () {
         var countryVal = $('#countries option:selected').val();
         var educationVal = $('#hope option:selected').val();
         console.log(_data);
         $('input[name=countries]').val(_data.country);
         $('input[name=hope]').val(_data.education[Number(educationVal)].name);
         var questionList = question[countryVal].education[educationVal].question;
         console.log(questionList);
         var className,optionStr='',type,typeClassName,answerHtml = '',block="none";
         for (let i = 0; i < questionList.length; i++) {
             correctAnswer.push(questionList[i].sure.replace(/[\s、，,]+/g,''));
             var name = _data.key+i;
             if(i===0){
                 className = 'active';
             } else {
                 className = ''
             }
             if(questionList[i].type === '单选题'){
                 type = 'radio';
                 typeClassName = 'item_radio'
             } else {
                 type = 'checkbox';
                 typeClassName = 'item_checkbox'
             }
             if(questionList[i].option5){
                block = "block"
             } else{
                block = 'none'
             }
             optionStr += '<div class="question_item '+ className +'">'+
                             '<p class="head_num">'+ questionList[i].i +'/15</p>'+
                             '<div class="question '+ typeClassName +'">'+
                                 '<p class="txt">['+ questionList[i].type +'] '+ questionList[i].question +'</p>'+
                                 '<label for="'+ questionList[i].i + 1 +'">'+
                                     '<input type="'+ type +'" name="'+ name +'" value="A" id="'+ questionList[i].i + 1 +'">'+ questionList[i].option1 +
                                 '</label>'+
                                 '<br>'+
                                 '<label for="'+ questionList[i].i + 2 +'">'+
                                     '<input type="'+ type +'" name="'+ name +'" value="B" id="'+ questionList[i].i + 2 +'">'+ questionList[i].option2 +
                                 '</label>'+
                                 '<br>'+
                                 '<label for="'+ questionList[i].i + 3 +'">'+
                                     '<input type="'+ type +'" name="'+ name +'" value="C" id="'+ questionList[i].i + 3 +'">'+ questionList[i].option3 +
                                 '</label>'+
                                 '<br>'+
                                 '<label for="'+ questionList[i].i + 4 +'">'+
                                     '<input type="'+ type +'" name="'+ name +'" value="D" id="'+ questionList[i].i + 4 +'">'+ questionList[i].option4 +
                                 '</label>'+
                                 '<label style="display:'+ block +'" for="'+ questionList[i].i + 5 +'">'+
                                     '<input type="'+ type +'" name="'+ name +'" value="E" id="'+ questionList[i].i + 5 +'">'+ questionList[i].option5 +
                                 '</label>'+
                             '</div>'+
                         '</div>\n';
             answerHtml += '<div class="wrapper">'+
                                 '<p class="question">'+ questionList[i].i + '. ' + questionList[i].question +'</p>'+
                                 '<p class="answer">'+ questionList[i].describe +'</p>'+
                             '</div>'
         }
         $('#question').html(optionStr);
         $('#getAnswerHtml').html(answerHtml);
         $('.item_checkbox label').on('click',function () {
             var a = $(this).find('input:checked').val();
             if(!a){
                 $(this).removeClass('active')
             } else {
                 $(this).addClass('active')
             }
         })
         $('.item_radio label').on('click',function () {
             $(this).addClass('active').siblings().removeClass('active')
         })
         $.fn.fullpage.moveSectionDown();
     });

     // 变换国家，学历
     $('#countries').on('change', function () {
         var val = $('#countries option:selected').val();
         var optionStr = '';
         _data = question[val]
         console.log(val, _data);
         for (let i = 0; i < _data.education.length; i++) {
             optionStr += '<option  value="' + i +'">'
                              + _data.education[i].name +
                         '</option>\n'
         }
         $('#hope').html(optionStr);
     });
     // 选择书
     $('#bookList').click(function(){
         $('.getBook').show()
         $('.getAnswer').hide()
         $('.getBookCont').show()
         $('.getAnswerText').hide()
          
         $.fn.fullpage.moveSectionDown();
     })

     // 选择答案
     $('.watch_correct').click(function () {
         $('.getBook').hide()
         $('.getAnswer').show()
         $('.getBookCont').hide()
         $('.getAnswerText').show()
         $.fn.fullpage.moveSectionDown();
     })


	
});

