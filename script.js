document.getElementById('withdrawBtn').addEventListener('click', function() {
    const binanceId = document.getElementById('binanceId').value;
    if (binanceId) {
        alert(`Withdraw request submitted for Binance Pay ID: ${binanceId}`);
    } else {
        alert('Please enter a valid Binance Pay ID.');
    }
});

document.getElementById('shareReferralBtn').addEventListener('click', function() {
    const referralLink = document.getElementById('referralLink').value;
    alert(`Referral link copied: ${referralLink}`);
});
