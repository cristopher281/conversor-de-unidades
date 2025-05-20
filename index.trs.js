describe('Currency Converter UI', () => {
    beforeAll(() => {
        // Load the index.html file into the JSDOM environment
        const fs = require('fs');
        const path = require('path');
        const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
        document.documentElement.innerHTML = html;
    });

    test('should have the correct title', () => {
        expect(document.title).toBe('Conversor de Monedas');
    });

    test('should have an amount input field', () => {
        const amountInput = document.getElementById('amount');
        expect(amountInput).not.toBeNull();
        expect(amountInput.tagName).toBe('INPUT');
        expect(amountInput.type).toBe('number');
    });

    test('should have a "from" currency select element', () => {
        const fromCurrencySelect = document.getElementById('from-currency');
        expect(fromCurrencySelect).not.toBeNull();
        expect(fromCurrencySelect.tagName).toBe('SELECT');
    });

    test('should have a "to" currency select element', () => {
        const toCurrencySelect = document.getElementById('to-currency');
        expect(toCurrencySelect).not.toBeNull();
        expect(toCurrencySelect.tagName).toBe('SELECT');
    });

    test('should have a swap button', () => {
        const swapButton = document.getElementById('swap-btn');
        expect(swapButton).not.toBeNull();
        expect(swapButton.tagName).toBe('BUTTON');
    });

    test('should have a convert button', () => {
        const convertButton = document.getElementById('convert-btn');
        expect(convertButton).not.toBeNull();
        expect(convertButton.tagName).toBe('BUTTON');
        expect(convertButton.textContent).toBe('Convertir');
    });

    test('should have a result display area', () => {
        const resultText = document.getElementById('result-text');
        expect(resultText).not.toBeNull();
        expect(resultText.tagName).toBe('P');
        expect(resultText.textContent).toContain('Resultado:');
    });

    test('should have an exchange rate display area', () => {
        const rateText = document.getElementById('rate-text');
        expect(rateText).not.toBeNull();
        expect(rateText.tagName).toBe('P');
        expect(rateText.textContent).toContain('Tasa de cambio:');
    });

    test('should have a span for the converted amount', () => {
        const convertedAmountSpan = document.getElementById('converted-amount');
        expect(convertedAmountSpan).not.toBeNull();
        expect(convertedAmountSpan.tagName).toBe('SPAN');
    });

    test('should have a span for the exchange rate value', () => {
        const exchangeRateSpan = document.getElementById('exchange-rate');
        expect(exchangeRateSpan).not.toBeNull();
        expect(exchangeRateSpan.tagName).toBe('SPAN');
    });
});