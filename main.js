function compare(str1,str2){
	
	
	if(str1.length!==str2.length){
		return false
	}
	else if(str1.length===2&&str1[0]===str2[0]) {
			return true;
		}
		else if(str1[0]!==str2[0]&&str1.length===2){
			return false
		}
		else if(str1.length===3){
			if(str1[0]===str2[0]&&str1[1]===str2[1]){return true;}
			else{return false;}
		}
}
var array=[{"card": "1R","image":"1R.jpg","value":1},
				{"card":"13T","image":"13T.jpg","value":13},
				{"card":"3R","image":"3R.jpg","value":3},

				{"card":"1B","image":"1B.jpg","value":1},
				{"card":"2B","image":"2B.jpg","value":2},
				{"card":"3B","image":"3B.jpg","value":3},

				{"card":"10B","image":"10B.jpg","value":10},
				{"card":"9T","image":"9T.jpg","value":9},
				{"card":"11C","image":"11C.jpg","value":11},

				{"card":"11T","image":"11T.jpg","value":11},
				{"card":"7B","image":"7B.jpg","value":7},
				{"card":"5R","image":"5R.jpg","value":5},

				{"card":"4R","image":"4R.jpg","value":4},
				{"card":"6R","image":"6R.jpg","value":6},
				{"card":"7R","image":"7R.jpg","value":7},
				{"card":"8R","image":"8R.jpg","value":8},
				{"card":"9R","image":"9R.jpg","value":9},
				{"card":"10R","image":"10R.jpg","value":10},
				{"card":"11R","image":"11R.jpg","value":11},
				{"card":"12R","image":"12R.jpg","value":12},
				{"card":"13R","image":"13R.jpg","value":13},
				
				{"card":"4B","image":"4B.jpg","value":4},
				{"card":"5B","image":"5B.jpg","value":5},
				{"card":"6B","image":"6B.jpg","value":6},
				{"card":"7B","image":"7B.jpg","value":7},
				{"card":"8B","image":"8B.jpg","value":8},
				{"card":"9B","image":"9B.jpg","value":9},
				
				{"card":"11B","image":"11B.jpg","value":11},
				{"card":"12B","image":"12B.jpg","value":12},
				{"card":"13B","image":"13B.jpg","value":13},
				{"card":"1T","image":"1T.jpg","value":1},
				{"card":"2T","image":"2T.jpg","value":2},
				{"card":"3T","image":"3T.jpg","value":3},
				{"card":"4T","image":"4T.jpg","value":4},
				{"card":"5T","image":"5T.jpg","value":5},
				{"card":"6T","image":"6T.jpg","value":6},
				{"card":"7T","image":"7T.jpg","value":7},
				{"card":"8T","image":"8T.jpg","value":8},
				
				{"card":"10T","image":"10T.jpg","value":10},

				{"card":"11T","image":"11T.jpg","value":11},
				{"card":"12T","image":"12T.jpg","value":12},
				{"card":"13T","image":"13T.jpg","value":13},
				{"card":"1C","image":"1C.jpg","value":1},
				{"card":"2C","image":"2C.jpg","value":2},
				{"card":"3C","image":"3C.jpg","value":3},
				{"card":"4C","image":"4C.jpg","value":4},
				{"card":"5C","image":"5C.jpg","value":5},
				{"card":"6C","image":"6C.jpg","value":6},
				{"card":"7C","image":"7C.jpg","value":7},
				{"card":"8C","image":"8C.jpg","value":8},
				{"card":"9C","image":"9C.jpg","value":9},
				{"card":"10C","image":"10C.jpg","value":10},
				{"card":"11C","image":"11C.jpg","value":11},
				{"card":"12C","image":"12C.jpg","value":12},
				{"card":"13C","image":"13C.jpg","value":13},
	];
var player1=0;
var player2=0;
var score=0;
var downImg = "";
var secondImg = "";
function generate (){

 var randomNumber=Math.floor(Math.random() *12) ;
 var $image=array[randomNumber].image;
 var $value=array[randomNumber].value;
 var $card=array[randomNumber].card;
 $(".imagedown").html(`<img src=${$image} class="carta">`);
 score=score+$value;
 $("#scorespace").html(`<h1>TOTAL ON TABLE :${score}</h1>`)
downImg =$(".imagedown").html()
secondImg =$(".imagedown2").html();
setTimeout(()=>{
$(".imagedown2").html(downImg)
$(".imagedown").html('')

},2000) 
setTimeout(()=>{
$(".imageup2").html(secondImg);
$(".imagedown2").html('')

},1000) 
if(secondImg.slice(10,13)===downImg.slice(10,13)){
	console.log("im in")
	$('#imageup').html(`<p style="color:gold;" class="score">Player1 Took ${score} Points</p>`)	
	player1+=score
 $('#me').html(`<p  style="color:gold;" class="score" >Score : ${player1}</p>`)
 
 score=0;
 $(".imagedown2").html('')
 $(".imageup2").html('')
}
if(player1>=150){
	alert("Player 1 Won")
}
console.log("the first one",downImg,"the secondone",secondImg)
}

function generate2 (){

 var randomNumber=Math.floor(Math.random() *12) ;
 var $image=array[randomNumber].image;
 var $value=array[randomNumber].value;
 var $card=array[randomNumber].card;
 $(".imagedown").html(`<img src=${$image} class="carta">`);
 score=score+$value;
 $("#scorespace").html(`<h1>TOTAL ON TABLE :${score}</h1>`)
downImg =$(".imagedown").html()
secondImg =$(".imagedown2").html();
setTimeout(()=>{
$(".imagedown2").html(downImg)
$(".imagedown").html('')

},2000) 
setTimeout(()=>{
$(".imageup2").html(secondImg);
$(".imagedown2").html('')

},1000) 
if(secondImg.slice(10,13)===downImg.slice(10,13)){
	console.log("im in")
	$('#imageup').html(`<p style="color:gold;" class="score">Player1 Took ${score} Points</p>`)	
	player2+=score
 $('#pc').html(`<p  style="color:black;margin-top:0px" class="score" ><br<br>Score : ${player2}</p>`)
 
 score=0;
 $(".imagedown2").html('')
 $(".imageup2").html('')
}
if(player2>=150){
	alert("Player 2 Won")
}
console.log("the first one",downImg,"the secondone",secondImg)
}
function reset(){
	score=0;
	$("#scorespace").html(`<h1>TOTAL ON TABLE :${score}</h1>`)
	player1=0
	player2=0
 $('#pc').html(`<p  style="color:black; margin-top:100px"  >Score : ${player2}</p>`)
 $('#me').html(`<p  style="color:black; margin-top:100px" >Score : ${player1}</p>`)
}