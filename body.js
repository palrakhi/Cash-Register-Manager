const bill_amount= document.querySelector("#bill-amount")
const cash_given= document.querySelector("#cash-given")
const check_button= document.querySelector("#check-button")
console.log(cash_given.value)
const message= document.querySelector("#error-message")
var denominations= [2000,500,200,100,50,20,10]
const no_of_notes= document.querySelectorAll(".no-of-notes")
//const amountNeedsToBeReturned
check_button.addEventListener("click", function verifyBillAmountAndChangeTobeReturned(){
   hideMsg();

    if(bill_amount.value > 0){
        //console.log(bill_amount.value, cash_given.value, typeof bill_amount.value, typeof cash_given.value)
        if (Number(cash_given.value) >= Number( bill_amount.value)) {

            const amountNeedsToBeReturned = Number(cash_given.value) - Number(bill_amount.value)            
            //console.log("amountNeedsToBeReturned",amountNeedsToBeReturned)

            calculateChange(amountNeedsToBeReturned)
            
            
        } else {
            errorMessage("No changes required ! Cash given should be atleast equals to the bill amount.")
        }

    } else {
        errorMessage("Ooops! Invalid bill amount! The bill amount should be greater than 0.")
    }
})

function calculateChange(amountNeedsToBeReturned){
    for(let i=0; i < denominations.length; i++){
        const numberOfNotes= Math.trunc(amountNeedsToBeReturned/denominations[i])
        if(numberOfNotes>0){

            amountNeedsToBeReturned = amountNeedsToBeReturned - denominations[i]* numberOfNotes
            no_of_notes[i].innerText= numberOfNotes
        }

        

       

    }
}

 function errorMessage(msg){
    message.style.display="block"
    message.innerText= msg 
 }

 function hideMsg(){
    message.style.display="none"
 }