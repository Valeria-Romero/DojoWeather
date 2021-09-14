/* Removes cookies box */

function removePopUp(){
    let cookies = document.querySelector('.cookiesPopUp');
    cookies.remove();
}

/* Alertas cuando se clickean las ciudades */

function displayAlert(event){
    alert("Loading weather report...");
}


let cities = document.querySelectorAll('.currentCity');

for( let i = 0; i < cities.length; i++){
    cities[i].addEventListener('click', displayAlert);
}

/* Change from Celius<=>Fahrenheit */


function difTemp(event){
    let currentValue = event.target.value;

    if(currentValue === "Celsius"){
        console.log("Im in celsius");
        let tempValue = document.querySelectorAll('.temp');
        let convert
        for(let i=0; i<tempValue.length; i++){
            convert = (tempValue[i].innerHTML -32) *5/9;
            tempValue[i].innerHTML = Math.round(convert);
        }
        
    }

    else{
        if(currentValue === "Fahrenheit" ){
            console.log("Im in fahrenheit");
            let tempValue = document.querySelectorAll('.temp');
            let convert
            for(let i=0; i<tempValue.length; i++){
                convert = (tempValue[i].innerHTML * 9/5) + 32;
                tempValue[i].innerHTML = Math.round(convert);
        }
        } 
    }
}

let tempValue = document.querySelector('.selector');

tempValue.addEventListener('change', difTemp);