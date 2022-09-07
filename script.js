function renderObject(object){
    console.log(object);
    let row = document.createElement('array');
    row.innerHTML = `
    <p> ${object.info.category} </p>
    `;
}

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
        alert("Thank you" + " " + "," + userName + " " + "logged in succesfully. WELCOME");
    }
    return fom.reset()

}

/*event listener 1*/

const p1 = document.getElementById ("p1");
const div1 = document.getElementById ("about");

p1.addEventListener("click", function(){
    div1.style.background = "grey"
});

p1.onclick =function(){
    div1.style.background = "grey"
};

/*event listener 2*/

const p2 = document.getElementById ("p2");
const div2 = document.getElementById ("services2");

p2.addEventListener("click", function(){
    div2.style.background = "grey"
});

p2.onclick =function(){
    div2.style.background = "grey"
};

/*event listener 3*/

const p3 = document.getElementById ("p3");
const div3 = document.getElementById ("port1");

p3.addEventListener("click", function(){
    div3.style.background = "grey"
});

p3.onclick =function(){
    div3.style.background = "grey"
};