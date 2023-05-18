
const allButtonElements = document.querySelectorAll('button')
const inputFieldElement = document.querySelector('#result')

for(let i = 0; i < allButtonElements.length; i++){
  allButtonElements[i].addEventListener('click' , () =>{
    let buttonValue = allButtonElements[i].textContent
    if(buttonValue === 'C'){
      clearResult() }
    else if(buttonValue === '='){
      calculateResult() }
    else if(buttonValue === 'C1'){
      clearLastValue() }
    else if(buttonValue === 'x²'){
      squareNumber()
    }
    else if(buttonValue === '√x'){
      rootNumber()
    }


    else{ 
      appendValue(buttonValue) }
  })
}

function clearResult(){
  inputFieldElement.value = ''
}

function calculateResult(){
  inputFieldElement.value = eval(inputFieldElement.value)
}

function clearLastValue(){
  inputFieldElement.value = inputFieldElement.value.slice(0 , -1)

}

function squareNumber(){
  inputFieldElement.value *= inputFieldElement.value
}

function rootNumber(){
  let x = Number(inputFieldElement.value)
  let y = Math.sqrt(x)
  inputFieldElement.value = String(y) 
}

function appendValue(buttonValue){
  inputFieldElement.value += buttonValue
}