document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML="เเสดผลรวม : "+sum;
    //alert(sum);
})
document.getElementById("calculator2").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML="เเสดผลรวม : "+sum;
    //alert(sum);
})
document.getElementById("calculator3").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML="เเสดผลรวม : "+sum;
    //alert(sum);
})
document.getElementById("calculator4").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML="เเสดผลรวม : "+sum;
    //alert(sum);
})

function myalert(){
    alert("payut");
}

function myalert1(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) +  parseInt(num2);
    document.getElementById("result").innerHTML="เเสดผลรวม : "+sum;
    alert(sum);
}

function myalert2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) - parseInt(num2);
    document.getElementById("result").innerHTML="เเสดผลรวม : "+sum;
    alert(sum);
}

function myalert3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) * parseInt(num2);
    document.getElementById("result").innerHTML="เเสดผลรวม : "+sum;
    alert(sum);
}

function myalert4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) / parseInt(num2);
    document.getElementById("result").innerHTML="เเสดผลรวม : "+sum;
    alert(sum);
}


const img = document.createElement("img")
img.src = "img/pic1.png";
img.style.width = "200px";
document.getElementById("mydiv").appendChild(img);

function fun(){
    var h = document.getElementById("h").value;
    var w = document.getElementById("w").value;
    var sum = parseInt(h) / 100;
    sum = sum * sum;
    var sum2 = parseFloat(w) / parseFloat(sum);
    //document.getElementById("result").innerHTML="เเสดผลรวม : "+sum;
    alert("คำตอบ : "+sum2.toFixed(2));
}
