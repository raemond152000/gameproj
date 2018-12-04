
$("#1").on("mouseenter", function(){
    $("#img1").attr("src", "assets/images/smash.jpg");
 });

$("#1").on("mouseleave", function(){
    $("#img1").attr("src", "assets/images/dut.gif");
 });

$("#2").on("mouseenter", function(){
    $("#img1").attr("src", "assets/images/mindcont.jpg");
 });
 
 $("#2").on("mouseleave", function(){
    $("#img1").attr("src", "assets/images/dut.gif");
 });

$("#3").on("mouseenter", function(){
    $("#img1").attr("src", "assets/images/spe.jpg");
 });

 $("#3").on("mouseleave", function(){
    $("#img1").attr("src", "assets/images/dut.gif");
 });

 $("#4").on("mouseenter", function(){
    $("#img1").attr("src", "assets/images/peace.JPG");
 });

  $("#4").on("mouseleave", function(){
    $("#img1").attr("src", "assets/images/dut.gif");
 });


/*$("#1").on("click", function(){
    $(health).value("-=20");
 });*/

win ()

function win(){
let x = document.getElementById("health").value;
if (x<5) {
	$("section").fadeOut(1500);
	$(this).remove();
 	$("#hidden2").show()};
	
}


document.getElementById("1").onclick = function(){
let health = document.getElementById("health")
health.value -= 20;
win();
};


document.getElementById("2").onclick = function(){
let health = document.getElementById("health")
health.value -= 30;
win();
};


document.getElementById("3").onclick = function(){
let health = document.getElementById("health");
health.value -= 50;
win();
};


$("#4").on("click", function(){
 	$("section").fadeOut(1500); //1.5 second
 	console.log("Fade out Effect");
 	$(this).remove();
 	$("#hidden").show()});




/*
document.getElementById("4").onclick = function(){
var image = document.getElementById("myImage").src="lose.gif";
alert("OnLoad image"+image );	
let health = document.getElementById("health")
alert() -= 50;
};*/

