
document.addEventListener('DOMContentLoaded', function () {


    this.documentElement.querySelector('#currency').focus();
    document.querySelector('#currency').addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default form submission behavior
            document.querySelector('#butt').click(); // Programmatically click the submit button
        }
    });



    document.querySelector('#butt').disabled = true;
    document.querySelector('#currency').onkeyup = function () {
        if (document.querySelector('#currency').value.length > 0) {
            document.querySelector('#butt').disabled = false;
        }
        else {
            document.querySelector('#butt').disabled = true;
        }
    }



    document.querySelector('#butt').onclick = function () {
        fetch('https://v6.exchangerate-api.com/v6/31b51e5c99a83a065ae54398/latest/USD')
            .then(response => response.json())
            .then(data => {
                const currency = document.querySelector('#currency').value.toUpperCase();
                const rate = data.conversion_rates[currency];
                if (rate !== undefined) {
                    document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency} `;
                }
                else {
                    document.querySelector('#result').innerHTML = 'Error : Invalid Currency Entered...!!!'
                }
            })
            .catch(error => {
                console.log('Error :', error);
            });

        return false;
    }
});

