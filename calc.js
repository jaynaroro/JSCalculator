const calculate = (x, y, operator) => {

  let result = ''

  //parse the strings before doing the calculations
  if(operator === 'add'){
    result = parseFloat(x) + parseFloat(y)
  }else if(operator === 'subtract'){
    result = parseFloat(x) - parseFloat(y)
  }else if(operator === 'multiply'){
    result = parseFloat(x) * parseFloat(y)
  }else if(operator === 'divide'){
    result = parseFloat(x) / parseFloat(y)
  }

  return result
}

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')
display.textContent = '0'

keys.addEventListener('click', (e)=>{
  const key = e.target //which key was pressed
  const action = key.dataset.action //data-action assigned to that key -- ref HTML
  const keyContent = key.textContent //get the text between the element tags
  let displayedNum = display.textContent
  //var firstValue , secondValue, operator

  if(!action)
{
    if(displayedNum === '0')
  {
      display.textContent = keyContent
    }else{
      display.textContent = displayedNum + keyContent
    }
  }

  if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide')
{
    //set aside the first value and the operator to be used later dataset works because it doesnt need to be viewed or used yet
    calculator.dataset.firstValue = displayedNum
    calculator.dataset.operator = action
    display.textContent = '0'
  }

  //check the dispplayed text to make sure there is no wrong placement of the decimal point
  if(action === 'decimal')
{
    if(displayedNum === '0')
  {
      display.textContent = '0' + keyContent
    }else if(displayedNum.includes('.'))
  {
      display.textContent = displayedNum
    }else{
    display.textContent = displayedNum + keyContent
    }
  }

  if(action === 'calculate')
    {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum

    display.textContent = calculate(firstValue, secondValue, operator)

  }
})



