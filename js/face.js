$(function(){
var rl_exp = {
baseUrl:	'',
pace:		200,
dir:		['face/mr','face/bzmh'],
text:[
[
'em0','em1','em2','em3','em4','em5','em6','em7','em8','em9','em10','em11','em12','em13','em14','em15','em16','em17','em18','em19','em20','em21','em22','em23','em24',
'em25','em26','em27','em28','em29','em30','em31','em32','em33'
],
[				'bzem0','bzem1','bzem2','bzem3','bzem4','bzem5','bzem6','bzem7','bzem8','bzem9','bzem10','bzem11','bzem12','bzem13','bzem14','bzem15','bzem16','bzem17','bzem18','bzem19','bzem20','bzem21','bzem22','bzem23','bzem24','bzem25','bzem26','bzem27','bzem28','bzem29','bzem30','bzem31','bzem32','bzem33','bzem34','bzem35','bzem36','bzem37','bzem38','bzem39','bzem40','bzem41','bzem42','bzem43'
]
],
num:		[34,34],
isExist:	[0,0],
bind:	function(i){
$("#rl_bq .rl_exp_main").eq(i).find('.rl_exp_item').each(function(){
$(this).bind('click',function(){
rl_exp.insertText(document.getElementById('Content'),'['+$(this).find('img').attr('title')+']');
});
});
},
/*加载表情包函数*/
		loadImg:function(i){
			var node = $("#rl_bq .rl_exp_main").eq(i);
			for(var j = 0; j<rl_exp.num[i];j++){
				var domStr = 	'<li class="rl_exp_item">' + 
									'<img src="' + rl_exp.baseUrl + '../img/' + rl_exp.dir[i] + '/' + j + '.gif" alt="' + rl_exp.text[i][j] + 
									'" title="' + rl_exp.text[i][j] + '" />' +
								'</li>';
				$(domStr).appendTo(node);
			}
			rl_exp.isExist[i] = 1;
			rl_exp.bind(i);
		},
		/*在textarea里光标后面插入文字*/
		insertText:function(obj,str){
			obj.focus();
			if (document.selection) {
				var sel = document.selection.createRange();
				sel.text = str;
			} else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
				var startPos = obj.selectionStart,
					endPos = obj.selectionEnd,
					cursorPos = startPos,
					tmpStr = obj.value;
				obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
				cursorPos += str.length;
				obj.selectionStart = obj.selectionEnd = cursorPos;
			} else {
				obj.value += str;
			}
		},
		init:function(){
			$("#rl_bq > ul.rl_exp_tab > li > a").each(function(i){rl_exp.loadImg(i);
				$(this).bind('click',function(){
					if( $(this).hasClass('selected') )
						return;
					if( rl_exp.isExist[i] == 0 ){
						rl_exp.loadImg(i);
					}
					$("#rl_bq > ul.rl_exp_tab > li > a.selected").removeClass('selected');
					$(this).addClass('selected');
					$('#rl_bq .rl_selected').removeClass('rl_selected').hide();
					$('#rl_bq .rl_exp_main').eq(i).addClass('rl_selected').show();
				});
			});
			
			
			
		}
	};
	rl_exp.init();	//调用初始化函数。
});
