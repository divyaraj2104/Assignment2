function reverseString() {
    var inputString = document.getElementById("input-string").value;
    console.log(inputString);
    var len = inputString.length;
    var reversedStringVar = '';
    for (var i = (len - 1); i >= 0; i--) {
        reversedStringVar += inputString.charAt(i);
    }
    console.log(reversedStringVar);

    var reverseStr = document.getElementById("reverse-string");
    reverseStr.innerText = "Reversed String is:- " + reversedStringVar;
}

function checkPalindrome() {
    var inputNumber = document.getElementById("input-number").value;
    var numString = inputNumber.toString();
    var len = inputNumber.length, isPalin = true;
    var leftPointer = 0, rightPointer = len - 1;
    while (leftPointer < rightPointer) {
        if (numString.charAt(leftPointer) !== numString.charAt(rightPointer)) {
            isPalin = false;
            break;
        }
        leftPointer++;
        rightPointer--;
    }
    var palinResult = document.getElementById("palindrome-result");
    if (isPalin) {
        palinResult.innerText = "Input sequence is palindrome.";
    }
    else {
        palinResult.innerText = "Input sequence is not palindrome.";
    }
}


function generateAmount(){
    var amount = parseFloat(document.getElementById("bill-amt").value);
    var tipPercentage = parseFloat(document.getElementById("tip-percentage").value);
    var final_amount = amount + (amount*(tipPercentage/100));
    console.log(final_amount);
    var bill_amount = (document.getElementById("bill-amount"));
    bill_amount.innerText = "Your final figure is $" + final_amount;
}


//----------------------------toggling hidden items------------------------------------

var reverse_str_display = 0
var str_reverse_input_field = document.getElementById("str-reverse-input-field");
function displayReverString() {
    if (reverse_str_display == 0) {
        reverse_str_display = 1;
        str_reverse_input_field.style.display = "block";
    }
    else {
        reverse_str_display = 0;
        str_reverse_input_field.style.display = "none";
    }
}

var check_palin_display = 0
var check_palindrome_input_field = document.getElementById("check-palindrome-input-field");
function displayPalinDrome(){
    if (check_palin_display == 0) {
        check_palin_display = 1;
        check_palindrome_input_field.style.display = "block";
    }
    else {
        check_palin_display = 0;
        check_palindrome_input_field.style.display = "none";
    }
}

var generate_bill_display = 0
var generate_bill_input_field = document.getElementById("generate-bill-input-field");
function displayBill(){
    if (generate_bill_display == 0) {
        generate_bill_display = 1;
        generate_bill_input_field.style.display = "block";
    }
    else {
        generate_bill_display = 0;
        generate_bill_input_field.style.display = "none";
    }
}