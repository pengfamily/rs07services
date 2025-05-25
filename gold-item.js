// ✅ Switch Between Main Tabs (Gold & Items)
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-btn[onclick="switchTab('${tabId}')"]`).classList.add('active');
}

// ✅ Switch Between Sub-Tabs (Buy/Sell in Gold Tab)
function switchSubTab(subTabId) {
    document.querySelectorAll('.sub-tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.sub-tab-btn').forEach(btn => btn.classList.remove('active'));

    document.getElementById(`${subTabId}-tab`).classList.add('active');
    document.querySelector(`.sub-tab-btn[onclick="switchSubTab('${subTabId}')"]`).classList.add('active');
}

// ✅ Validate Millions Input
function validateMillions(input) {
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 6);
}

// ✅ Validate RSN Input
function validateRSN(input) {
    input.value = input.value.replace(/[^a-zA-Z0-9 ]/g, '').slice(0, 12);
}

// ✅ Calculate Price for Buy/Sell Gold
function calculatePrice(type) {
    let rate = type === 'buy' ? window.buyRate || 0.16 : window.sellRate || 0.14;
    let amount = document.getElementById(`${type}-amount`).value;
    let total = (amount * rate).toFixed(2);
    document.getElementById(`${type}-total`).innerText = total || '0.00';
}

// ✅ Submit Form to Live Chat
function submitForm(type) {
    const amount = document.getElementById(`${type}-amount`).value;
    const rsn = document.getElementById(`${type}-rsn`).value;
    if (!amount || !rsn) {
        alert('Please fill in all fields.');
        return;
    }
    const action = type === 'buy' ? 'Buying' : 'Selling';
    const total = document.getElementById(`${type}-total`).innerText;
    const message = `I am ${action} ${amount}M worth of gold ($${total}), and my RSN is: ${rsn}`;
    send_chat_message(message);
}
