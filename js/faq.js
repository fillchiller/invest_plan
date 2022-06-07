$(document).ready(function(){
    var faq_arr = [
        // [Ask, Answer]
        ["HOW CAN I BECOME AN INVESTOR OF THE INVESTPLAN LTD?", "Firstly, you must register. Fill out the registration form. We recommend you to specify only true data. Create a login, a password and specify your email. After confirming your registration, you can log in your profile and use all services of the website: to specify payment details, credit the account, choose the investment plan, make a deposit, etc \"Registration\"."],
        ["What electronic payment systems can I use for financial operations?", "We work with the following electronic payment systems: Perfect Money, Payeer, Bitcoin, Ethereum, Litecoin, Dash and Dogecoin.<br>If you do not have a wallet in these systems, you can create it by using the following links<br>Perfect Money: perfectmoney.is.<br>Payeer: payeer.com<br>Visa or Mastercard: visa.com & mastercard.com<br>Bitcoin: bitcoin.com<br>Ethereum: www.ethereum.org<br>Litecoin: litecoin.com<br>Dash: dash.org<br>Dogecoin: dogecoin.com"],
        ["CAN I CHANGE MY PASSWORD, PAYMENT DETAILS AND EMAIL?", "You can change your password yourself in your profile. You can also change payment wallet you use to make payments only through the project administrator by making a request via one of the contacts specified on the website. However, you can not change your email."],
        ["HOW CAN I WITHDRAW MY PROFIT?", "Depending on the investment plan you chose, the profit is formed from the accrual percent and deposit. As soon as funds are credited to your personal account, you can request to withdraw them or create a new deposit by using your personal account. The money will be immediately sent to your wallet of the electronic payment system you used to make a deposit. The funds accrued according to the affiliate program are available for immediate withdrawal \"Withdraw Funds\"."],
        ["HOW MUCH TIME DOES IT TAKE TO CREDIT THE ACCOUNT?", "Accounts are credited immediately and you can use the funds to start your investment activity at once."],
        ["DO YOU CHARGE ANY HIDDEN FEES FROM DEPOSIT?", "No, we don't charge any hidden fees."],
        ["WHAT ARE THE MINIMUM AND MAXIMUM DEPOSIT AMOUNT?", "The minimum deposit amount is $50. Maximum - $100,000."],
        ["DO YOU CHARGE ANY HIDDEN FEES FROM WITHDRAWALS?", "Some payment processors charge some fees:<br>- PerfectMoney: 0.5%<br>- Payeer: 0.95%<br>- Cryptocurrencies: 0.9%"],
    ];

    for(i in faq_arr){
        var $box = `
        <div class="box">
            <h3>${faq_arr[i][0]}</h3>
            <p>${faq_arr[i][1]}</p>
        </div>
        `;
        $("#faq_sec1 .cont").append($box);
    };
});