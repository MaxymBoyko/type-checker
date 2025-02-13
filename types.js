const input = document.getElementById('input');
const output = document.getElementById('show-type');

function checkType() {
    let inputType = typeof input.value;

    if (isNumber(input.value)) {
        inputType = 'number';
    } else if (isBoolean(input.value)) {
        inputType = 'boolean';
    } else if (isBigInt(input.value)) {
        inputType = 'bigint';
    }

    output.textContent = inputType;
}

function isNumber(value) {
    return !isNaN(value) && !isNaN(parseFloat(value));
}

function isBoolean(value) {
    return value === 'true' || value === 'false';
}

function isBigInt(value) {
    try {
        BigInt(parseInt(value));
        return true;
    } catch (e) { return false }
}