const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc5e557b35msh8125f43616ed73ap100d7ejsn2eba6b607a8f',
		'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
	}
};

fetch('https://billboard-api2.p.rapidapi.com/hot-100?range=1-10&date=2019-05-11', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


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
