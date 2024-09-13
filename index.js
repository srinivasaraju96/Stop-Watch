const heightEle=document.querySelector("#height");
const weightEle=document.querySelector("#weight");
const buttonEle=document.querySelector("#button");
const resultEle=document.querySelector("#result");

buttonEle.addEventListener("click",function(event){
    event.preventDefault();

    const heightValue=Number(heightEle.value);
    const weightValue=Number(weightEle.value);
    let weightCategory=""
    if(heightValue=="" || weightValue==""){
        resultEle.textContent="Enter the value";
    }
    else{
        bmiValue=weightValue/(heightValue/100)**2;
        if(bmiValue<18.5){
            weightCategory="Under Weight"
        }
        else if(bmiValue>=18.5 && bmiValue<25){
            weightCategory="Normal Weight"
        }
        else if(bmiValue>=25 && bmiValue<30){
            weightCategory="Over Weight"
        }
        else{
            weightCategory="Obesity"
        }
        resultEle.textContent=`Bmi=${bmiValue.toFixed(2)} ${weightCategory}`;
    }
});
