


function toggleDetails(button) {
    const detailsRow = button.parentElement.parentElement.nextElementSibling;
    if (detailsRow.style.display === 'none') {
        detailsRow.style.display = 'table-row';
        button.textContent = 'إخفاء التفاصيل';
    } else {
        detailsRow.style.display = 'none';
        button.textContent = 'إظهار التفاصيل';
    }
}

document.getElementById('continuebtn').addEventListener('click', function(){
    var form=document.getElementById('propfrom');
    if(form.style.display==='none'|| form.style.display===''){
        form.style.display='block';
        this.textContent='المتابعة';

    }else {
        form.style.display= 'none'
        this.textContent='المتابعة';
    }
}
 )
 document.addEventListener("DOMContentLoaded",function(){
 
    const button1=document.getElementById("rrbtn");
    const button2=document.getElementById("continuebtn");
    button1.addEventListener("click",function()
{
    button2.style.display="المتابعة"
}
    )}
 )

 function Captcha() {  
    // Define the characters that can be used in the captcha code
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// Generate a random string of 6 characters
let captchaCode = "";
for (let i = 0; i < 6; i++) {
captchaCode += chars[Math.floor(Math.random() * chars.length)];
}

// Set the value of the txtCaptcha element to the captcha code
document.getElementById("txtCaptcha").value = captchaCode;  
  } 




 function showRequestForm(event) {
    const form = document.getElementById('request-form');
    form.style.display = 'block';
    event.preventDefault();

 }


 function submitRequest(event) {
    event.preventDefault();
    
    const fullname = document.getElementById('fullname').value.trim();
    const nationalId = document.getElementById('national-id').value.trim();
    const birthdate = document.getElementById('birthdate').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const selectedProperties = document.querySelectorAll('input[name="property"]:checked');

    const resultMessage = document.getElementById('result-message');



    if (fullname === "" || nationalId === "" || birthdate === "" || mobile === "" || email === "" || !selectedProperties) {
        resultMessage.textContent = 'يرجى ملء جميع الحقول واختيار عقار.';
        return;
    }

    const arabicRegex = /^[\u0621-\u064A\s]+$/; 
    const nationalIdRegex = /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14)[0-9]{9}$/; 
    const mobileRegex = /^09[0-9]{8}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!arabicRegex.test(fullname)) {
        resultMessage.textContent = 'يرجى إدخال الاسم بالحروف العربية فقط.';
        return;
    }

    if (!nationalIdRegex.test(nationalId)) {
        resultMessage.textContent = 'يرجى إدخال الرقم الوطني بشكل صحيح.';
        return;
    }

    if (!mobileRegex.test(mobile)) {
        resultMessage.textContent = 'يرجى إدخال رقم الموبايل بشكل صحيح.';
        return;
    }

    if (!emailRegex.test(email)) {
        resultMessage.textContent = 'يرجى إدخال بريد إلكتروني صحيح.';
        return;
    }

    resultMessage.textContent = 'تم ارسال الطلب بنجاح.';
}



