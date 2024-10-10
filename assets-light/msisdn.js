// Script to animate input field of msisdn page
function showNewInputBox() {
    document.querySelector('.input-box').classList.remove('pulse');
    document.querySelector('#input-text').classList.add('otranslated');
    document.querySelector('#mob-inital').style.display = 'block';
    document.querySelector('#vline').style.display = 'block';
    const mobInput = document.querySelector('#mob-input');
    mobInput.style.display = 'block';
    mobInput.focus();
}

document.querySelector('.input-box').addEventListener('click', showNewInputBox);
document.querySelector('#input-text').addEventListener('click', function (event) {
    event.stopPropagation();
    showNewInputBox();
});

// Script to enable disabled button in msisdn page
const telInput = document.querySelector('#mob-input');
const subscribeBtn = document.querySelector('#subscribebtn');
telInput.addEventListener('input', function () {
    // Only allow numeric values
    telInput.value = telInput.value.replace(/\D/g, '');

    // Check the length of the input
    if (telInput.value.length > 8) {
        telInput.value = telInput.value.slice(0, 8);
    }

    // Enable the button and add pulse class if the input length is 8
    if (telInput.value.length === 8) {
        subscribeBtn.disabled = false;
        subscribeBtn.classList.add('pulse');
    } else {
        subscribeBtn.disabled = true;
        subscribeBtn.classList.remove('pulse');
    }
});

// script to show loader when subscribe button is clicked
document.getElementById('subscribebtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission for demonstration
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('subscribebtn').style.display = 'none';
});

// Script to translate text in the pages
function changeLanguage() {
    const button = document.getElementById('langChange');
    const ulElement = document.querySelector('ul');
    if (button.innerHTML === 'AR') {
        button.innerHTML = 'EN';
        document.querySelector('.welcome').textContent = "مرحبا بكم في";
        document.getElementById('input-text').textContent = "أدخل رقم الجوال";
        document.querySelector('.mobile-text').textContent = "رقم الجوال";
        document.querySelector('.descrip-text').textContent = "سوف نرسل لك كلمة مرور لمرة واحدة على رقم هاتفك.";
        document.getElementById('subscribebtn').textContent = "سوسكريب";
        document.querySelector('.rate').textContent = "ابدأ في XXXX فقط / أسبوعيا";

        var newTexts = [
            "لا يوجد التزام ، يمكنك الإلغاء في أي وقت عن طريق زيارة قسم حسابي ل Unsub.",
            "تتم إضافة رسوم التكلفة إلى فاتورة الهاتف أو خصمها من رصيدك المدفوع مسبقا.",
            "يرجى التواصل مع فريق الدعم للحصول على أي مساعدة. اكتب لنا على : support@globocom.info",
        ];

        ulElement.classList.add('rtl');
        ulElement.classList.remove('ltr');

        var listItems = document.querySelectorAll('ul li');
        listItems.forEach(function (item, index) {
            item.textContent = newTexts[index];
        });
    } else {
        button.innerHTML = 'AR';
        document.querySelector('.welcome').textContent = "Welcome to";
        document.getElementById('input-text').textContent = "Enter mobile number";
        document.querySelector('.mobile-text').textContent = "mobile number";
        document.querySelector('.descrip-text').textContent = "we will send you One time password on your phone number.";
        document.getElementById('subscribebtn').textContent = "susbcribe";
        document.querySelector('.rate').textContent = "Start at just XXXX/Weekly";

        var newTexts = [
            "No commitment, you can cancel any time by visit My account Section for Unsub.",
            "The cost charge is added to the phone bill or deducted from your prepaid credit.",
            "Please connect with support team for any help. Write us on : support@globocom.info",
        ];

        ulElement.classList.add('ltr');
        ulElement.classList.remove('rtl');

        var listItems = document.querySelectorAll('ul li');
        listItems.forEach(function (item, index) {
            item.textContent = newTexts[index];
        });

    }
}