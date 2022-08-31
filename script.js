$(document).ready(function(){
    $("#designIcon").click(function(){
        $("#design").show()
    })
    $("#design").click(function(){
        $("#design").hide()
    })
    $("#devIcon").click(function(){
        $("#development").show()
    })
    $("#development").click(function(){
        $("#development").hide()
    })
    $("#productIcon").click(function(){
        $("#management").show()
    })
    $("#management").click(function(){
        $("#management").hide()
    })
    $(".one").mouseover(function(){
        $("#hover1").toggle()
    })
    $(".two").mouseover(function(){
        $("#hover2").toggle()
    })
    $(".three").mouseover(function(){
        $("#hover3").toggle()
    })
    $(".four").mouseover(function(){
        $("#hover4").toggle()
    })
    $(".five").mouseover(function(){
        $("#hover5").toggle()
    })
    $(".six").mouseover(function(){
        $("#hover6").toggle()
    })
    $(".seven").mouseover(function(){
        $("#hover7").toggle()
    })
    $(".eight").mouseover(function(){
        $("#hover8").toggle()
    })
})


var fom = document.querySelector("#form1");
fom.addEventListener("submit",forme)

function forme(event){
    event.preventDefault()

    var userName = document.querySelector("#names").value;
    var userEmail = document.querySelector("#emails").value;
    var userMessages = document.querySelector("#messages").value;

    if(userName == ""){
        return alert("please fill in name")
    }else if(userEmail == ""){
       return alert("please enter your Email address")
    }else{
        alert("thank you" + " " + "," + userName + " " + "we have recieved your details");
    }
    return fom.reset()

}
