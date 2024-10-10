window.onload = function () {
    // Function to animate input box and create OTP input boxes
    function animateAndCreateInputs() {
        var inputBox = document.querySelector('.input-box2');
        var inputText = document.getElementById('input-text2');
        var smallBox = document.querySelector('.small-div');

        // Remove pulse animation
        inputBox.classList.remove('pulse');

        // Hide input box but keep the text visible
        inputBox.style.border = 'none';
        inputBox.style.height = '0';
        inputBox.style.background = 'transparent';
        inputBox.style.overflow = 'visible';

        // Translate input text upward
        inputText.classList.add('translated');
        smallBox.style.display = 'flex';

        // Add input boxes at 0.3s intervals
        var count = 0;
        var interval = setInterval(function () {
            if (count < 4) {
                var newInput = document.createElement('input');
                newInput.type = 'tel';
                newInput.className = 'small-box';
                newInput.maxLength = '1';
                smallBox.appendChild(newInput);
                count++;
                newInput.id = 'small-box-' + (count);
                if (count === 1) { // Focus the first input box
                    newInput.focus();
                }
            } else {
                clearInterval(interval);
                // To move from one input box to another and enable button
                const subscribeBtn = document.querySelector('#subscribebtn');

                function handleInput(event) {
                    const currentInput = event.target;
                    currentInput.value = currentInput.value.replace(/\D/g, '');

                    if (currentInput.value.length > 1) {
                        currentInput.value = currentInput.value.slice(0, 1);
                    }

                    const nextInput = currentInput.nextElementSibling;
                    if (nextInput && nextInput.classList.contains('small-box')) {
                        nextInput.focus();
                    } else if (currentInput.id === 'small-box-4' && currentInput.value.length === 1) {
                        subscribeBtn.disabled = false;
                        subscribeBtn.classList.add('pulse');
                    } else {
                        subscribeBtn.disabled = true;
                        subscribeBtn.classList.remove('pulse');
                    }
                }

                function handleKeyDown(event) {
                    const currentInput = event.target;

                    if (event.key === 'Backspace') {
                        if (currentInput.value === '') {
                            const prevInput = currentInput.previousElementSibling;
                            if (prevInput && prevInput.classList.contains('small-box')) {
                                prevInput.focus();
                                prevInput.value = '';
                            }
                        }
                    }
                }

                const inputBoxes = document.querySelectorAll('.small-box');
                inputBoxes.forEach(inputBox => {
                    inputBox.addEventListener('input', handleInput);
                    inputBox.addEventListener('keydown', handleKeyDown);
                });
            }
        }, 300); // 300 milliseconds interval
        inputText.classList.add('lefttranslate');
    }

    // Add event listeners to the input box and input text
    document.querySelector('.input-box2').addEventListener('click', animateAndCreateInputs);
    // document.getElementById('input-text2').addEventListener('click', animateAndCreateInputs);
};

// script to show loader when subscribe button is clicked
document.getElementById('subscribebtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission for demonstration
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('subscribebtn').style.display = 'none';
});

// Script to translate text in the pages
function changeLanguage() {
    const button = document.getElementById('langChange');
    if (button.innerHTML === 'AR') {
        button.innerHTML = 'EN';
        document.querySelector('.welcome').textContent = "مرحبا بكم في";
        document.getElementById('input-text2').textContent = "أدخل كلمة المرور لمرة واحدة";
        document.querySelector('.mobile-text').textContent = "رمز التحقق";
        document.querySelector('.descrip-text').innerHTML = "يتم إرسالها إلى رقم هاتفك المحمول. <span>+91 123 456 7890</span><a href='msisdn.html'><img src='assets/images/edit-btn.png' alt=''></a>";
        document.getElementById('subscribebtn').textContent = "أكد";
        document.querySelector('.rate').textContent = "ابدأ في XXXX فقط / أسبوعيا";

        var newTexts = [
            "لا يوجد التزام ، يمكنك الإلغاء في أي وقت عن طريق زيارة قسم حسابي ل Unsub.",
            "تتم إضافة رسوم التكلفة إلى فاتورة الهاتف أو خصمها من رصيدك المدفوع مسبقا.",
            "يرجى التواصل مع فريق الدعم للحصول على أي مساعدة. اكتب لنا على : support@globocom.info",
        ];

        var listItems = document.querySelectorAll('ul li');
        listItems.forEach(function (item, index) {
            item.textContent = newTexts[index];
        });
    } else {
        button.innerHTML = 'AR';
        document.querySelector('.welcome').textContent = "Welcome to";
        document.getElementById('input-text2').textContent = "Enter OTP";
        document.querySelector('.mobile-text').textContent = "verification code";
        document.querySelector('.descrip-text').innerHTML = "sent to your mobile number. <span>+91 123 456 7890</span><a href='msisdn.html'><img src='assets/images/edit-btn.png' alt=''></a>";
        document.getElementById('subscribebtn').textContent = "confirm";
        document.querySelector('.rate').textContent = "Start at just XXXX/Weekly";

        var newTexts = [
            "No commitment, you can cancel any time by visit My account Section for Unsub.",
            "The cost charge is added to the phone bill or deducted from your prepaid credit.",
            "Please connect with support team for any help. Write us on : support@globocom.info",
        ];

        var listItems = document.querySelectorAll('ul li');
        listItems.forEach(function (item, index) {
            item.textContent = newTexts[index];
        });

    }
}