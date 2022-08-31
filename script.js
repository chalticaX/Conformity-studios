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
    $(".Une").mouseover(function(){
        $("#hover1").toggle()
    })
    $(".deux").mouseover(function(){
        $("#hover2").toggle()
    })
    $(".trois").mouseover(function(){
        $("#hover3").toggle()
    })
    $(".quatre").mouseover(function(){
        $("#hover4").toggle()
    })
    $(".cinq").mouseover(function(){
        $("#hover5").toggle()
    })
    $(".six").mouseover(function(){
        $("#hover6").toggle()
    })
    $(".sept").mouseover(function(){
        $("#hover7").toggle()
    })
    $(".huit").mouseover(function(){
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
