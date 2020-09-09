$(function () {
  $("#draggable1,#draggable2").draggable();
});

$(document).ready(function () {
  $("#draggable1,#draggable2").on("drag", function () {
    let offsetX = 100;
    let offsetY = 100;
// for containers
    let x1 = parseInt($('#draggable1').css("left"));
    
    let x2 =  parseInt($('#draggable2').css("left"));
    let y1 =  parseInt($('#draggable1').css("top"));
    let y2 =  parseInt($('#draggable2').css("top"));
 
//for angle 
    let ax1 = (offsetX + x1);
    let ay1 = (offsetY + y1);
    let ax2 = (offsetX + x2);
    let ay2 = (offsetY + y2);
    let w = Math.floor(Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)));
    let line = $('#line');
    var angle = Math.atan2((ay1-ay2), (ax1-ax2)) *  (180/Math.PI);
    if(angle >= 90 && angle < 180){
        ay1 = ay1 - (ay1-ay2);
    }
    if(angle > 0 && angle < 90){
        ax1 = ax1 - (ax1-ax2);
        ay1 = ay1 - (ay1-ay2);
    }
    if(angle <= 0 && angle > -90){
        ax1 = ax1 - (ax1-ax2);
    }
    line.offset({top:ay1,left:ax1}).width(w).rotate(angle);

    $("#hori1").val(`${x1}`);
    $("#vert1").val(`${y1}`);
    $("#hori2").val(`${x2}`);
    $("#vert2").val(`${y2}`);
    $('#hypo').val(`${w}`);

    $("#hori1, #vert1,#hori2,#vert2,#hypo").on("change", function () {
        let line1 = $('#line');
        let div1 = $('#draggable1');
        let div2 = $('#draggable2');
    });
   
  });
});
