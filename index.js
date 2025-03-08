const billAmountEntered = document.getElementById("amount");
const fivePercentTip = document.getElementById("five");
const tenPercentTip = document.getElementById("ten");
const fifteenPercentTip = document.getElementById("fifteen");
const twentyFivePercentTip = document.getElementById("twentyFive");
const fiftyPercentTip = document.getElementById("fifty");
const customPercent = document.getElementById("customPercent");
const peopleEntered = document.getElementById("people");
const tipShare = document.getElementById("tipShare");
const totalAmountShare = document.getElementById("totalAmountShare");
const resetbtn = document.getElementById("reset");

fivePercentTip.onclick = function() {
    let billAmount = Number(billAmountEntered.value), people = Number(peopleEntered.value);
    if(people == 0) {
        document.getElementById("errorMessage").classList.add("errorMessage");
        document.getElementById("people").classList.add("peopleZeroerror");
        return;
    }
    let tipAmount = billAmount * (5 / 100), payableAmount = billAmount + tipAmount;
    tipShare.textContent = "$" + (tipAmount / people).toFixed(2);
    totalAmountShare.textContent = "$" + (payableAmount / people).toFixed(2);
};

tenPercentTip.onclick = function() {
    let billAmount = Number(billAmountEntered.value), people = Number(peopleEntered.value);
    if(people == 0) {
        document.getElementById("errorMessage").classList.add("errorMessage");
        document.getElementById("people").classList.add("peopleZeroerror");
        return;
    }
    let tipAmount = billAmount * (10 / 100), payableAmount = billAmount + tipAmount;
    tipShare.textContent = "$" + (tipAmount / people).toFixed(2);
    totalAmountShare.textContent = "$" + (payableAmount / people).toFixed(2);
};

fifteenPercentTip.onclick = function() {
    let billAmount = Number(billAmountEntered.value), people = Number(peopleEntered.value);
    if(people == 0) {
        document.getElementById("errorMessage").classList.add("errorMessage");
        document.getElementById("people").classList.add("peopleZeroerror");
        return;
    }
    let tipAmount = billAmount * (15 / 100), payableAmount = billAmount + tipAmount;
    tipShare.textContent = "$" + (tipAmount / people).toFixed(2);
    totalAmountShare.textContent = "$" + (payableAmount / people).toFixed(2);
};

twentyFivePercentTip.onclick = function() {
    let billAmount = Number(billAmountEntered.value), people = Number(peopleEntered.value);
    if(people == 0) {
        document.getElementById("errorMessage").classList.add("errorMessage");
        document.getElementById("people").classList.add("peopleZeroerror");
        return;
    }
    let tipAmount = billAmount * (25 / 100), payableAmount = billAmount + tipAmount;
    tipShare.textContent = "$" + (tipAmount / people).toFixed(2);
    totalAmountShare.textContent = "$" + (payableAmount / people).toFixed(2);
};

fiftyPercentTip.onclick = function() {
    let billAmount = Number(billAmountEntered.value), people = Number(peopleEntered.value);
    if(people == 0) {
        document.getElementById("errorMessage").classList.add("errorMessage");
        document.getElementById("people").classList.add("peopleZeroerror");
        return;
    }
    let tipAmount = billAmount * (50 / 100), payableAmount = billAmount + tipAmount;
    tipShare.textContent = "$" + (tipAmount / people).toFixed(2);
    totalAmountShare.textContent = "$" + (payableAmount / people).toFixed(2);
};

customPercent.addEventListener("input", function() {
    let billAmount = Number(billAmountEntered.value), people = Number(peopleEntered.value);
    if(people == 0) {
        document.getElementById("errorMessage").classList.add("errorMessage");
        document.getElementById("people").classList.add("peopleZeroerror");
        return;
    }
    let tipAmount = billAmount * (this.value / 100), payableAmount = billAmount + tipAmount;
    tipShare.textContent = "$" + (tipAmount / people).toFixed(2);
    totalAmountShare.textContent = "$" + (payableAmount / people).toFixed(2);
});

resetbtn.onclick = function() {
    billAmountEntered.value = "";
    peopleEntered.value = "";
    customPercent.value = "";
    tipShare.textContent = "$" + "0.00";
    totalAmountShare.textContent = "$" + "0.00";
    document.getElementById("errorMessage").classList.remove("errorMessage");
    document.getElementById("people").classList.remove("peopleZeroerror");
}