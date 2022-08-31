const fom = document.querySelector("#form1");
fom.addEventListener("submit",forme)

function forme(event){
    event.preventDefault()

    const userName = document.querySelector("#names").value;
    const userEmail = document.querySelector("#emails").value;
    const userMessages = document.querySelector("#messages").value;

    if(userName == ""){
        return alert("please fill in name")
    }else if(userEmail == ""){
       return alert("please enter your Email address")
    }else{
        alert("thank you" + " " + "," + userName + " " + "we have recieved your details");
    }
    return fom.reset()

}
