

function solution(){
    let getInput = document.getElementById('getNumber').value;
    getInput = parseInt(getInput)
    
    if(isNaN(getInput)){
        document.getElementById('answer').innerHTML = "enter number!";
    }else if(getInput > 5){
        document.getElementById('answer').innerHTML = "Number should be between 1 and 5";
    }else if(getInput <= 0){
        document.getElementById('answer').innerHTML = "Number should be between 1 and 5";
    }else{
        let getRandom = Math.floor(Math.random() * 5 + 1);
     
        if(getInput === getRandom){
            document.getElementById('answer').innerHTML = "Bingo... You Won!!!";
        }else{
            document.getElementById('answer').innerHTML = `You Lose.. answer is: ${getRandom}`;
        }
    }

    if(getInput.value === ""){
        document.getElementById('answer').innerHTML = "";
    }
}
