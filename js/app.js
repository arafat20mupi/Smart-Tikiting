const seat = document.getElementsByClassName('btnKey');
let seatCount = 0
let available = 40;
let totalPrice = 0;
let grandTotal = 0;
for (let index = 0; index < seat.length; index++) {
    const btnKey = seat[index];
    // console.log(btnKey)
    btnKey.addEventListener('click' , function () {
        if (seatCount >= 4) {
            alert("You can only select up to 4 seats.");
            return;
        }
        //     -----------
        if (btnKey.classList.contains('bg-[#1DD100]')) {
            return;
        }
        btnKey.classList.remove('bg-[#F7F8F8]');
        btnKey.classList.add('bg-[#1DD100]');
        const totalSeat = document.getElementById('available-sit');
        available = available - 1;
        totalSeat.innerText = parseInt(available);
        
        const sitBooking = document.getElementById('sit-booking');
        seatCount = seatCount + 1;
        sitBooking.innerText = parseInt(seatCount);


        const seatName = btnKey.innerHTML;
        const economy = 'Economy'
        const price = parseFloat("550");
        const seatInfo = document.getElementById('keyPress');
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'flex justify-between');
        const tag1 = document.createElement('p');
        tag1.innerText = seatName;
        newDiv.appendChild(tag1);
        const tag2 = document.createElement('p');
        tag2.innerText = economy;
        newDiv.appendChild(tag2);
        const tag3 = document.createElement('p');
        tag3.innerText = price;
        newDiv.appendChild(tag3);
        seatInfo.appendChild(newDiv);
        const totalAmount = document.getElementById('totalAmount');
        totalPrice = totalPrice + price;
        totalAmount.innerText = totalPrice;
        grandTotal = grandTotal + price;
        const grandTotalPrice = document.getElementById('grandTotalPrice');
        grandTotalPrice.innerText = grandTotal;
          
        if (seatCount === 4) {
            const couponFilter = document.getElementById('inputField');
            couponFilter.classList.add('bg-green-200' , );
            couponFilter.classList.remove('btn-disabled');

            const couponBtn = document.getElementById('btnApply');
            couponBtn.addEventListener('click', function () {
                const couponFilterValue = document.getElementById('inputField').value;
                const code = couponFilterValue

                const discountElement = document.getElementById('discountPrice');
                const totalPrice = parseInt(document.getElementById('totalAmount').innerText);
                const grandTotal = document.getElementById('grandTotalPrice');
                if (code === 'NEW15') {
                    discount = totalPrice * 0.15;
                    discountElement.innerText = 'Discount : ' + discount;
                    grandTotal.innerText = totalPrice - discount;
                } else if (code === 'Couple 20') {
                    discount = totalPrice * 0.20;
                    discountElement.innerText = 'Discount : ' + discount;
                    grandTotal.innerText = totalPrice - discount;
                } else {
                    alert('Discount code is not available');
                }
                const codeBtn = document.getElementById('code-btn');
                codeBtn.classList.add('hidden');
            });
        }
        const numberField = document.getElementById('number-field');
        const nameField = document.getElementById('name-field');
        const emailField = document.getElementById('email-field');
        if (seatCount > 0) {
            numberField.removeAttribute('disabled');
            nameField.removeAttribute('disabled');
            emailField.removeAttribute('disabled');
        }
        
    })
}

const numberField = document.getElementById('number-field');

numberField.addEventListener('keyup', function (e) {
    const number = e.target.value;
    const nextBtn = document.getElementById('next-btn');
    
    if (number !== '') {
        nextBtn.removeAttribute('disabled');
    } else {
        nextBtn.setAttribute('disabled', true);
        numberField.value = '';
    }
});

const nextBtn = document.getElementById('next-btn');

// // ----------------
nextBtn.addEventListener('click', function () {
    const section = document.querySelectorAll('.section');
    for (let index = 0; index < section.length; index++) {
        const element = section[index];
        element.classList.add('blur-section');
    }
    const congratulation = document.getElementById('congratulation');
    congratulation.classList.remove('hidden');
    
});




function Continue() {
    const section = document.querySelectorAll('.section');
    for (let index = 0; index < section.length; index++) {
        const element = section[index];
        element.classList.remove('blur-section');
    }
    const numberField = document.getElementById('number-field');
    const nextBtn = document.getElementById('next-btn');
    numberField.value = '';
    const nameField = document.getElementById('name-field');
    nameField.value = '';
    const emailField = document.getElementById('email-field');
    emailField.value = '';
    nextBtn.setAttribute('disabled', true);
    const congratulation = document.getElementById('congratulation');
    congratulation.classList.add('hidden');
}
