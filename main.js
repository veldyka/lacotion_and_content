$(document).ready(function () {
    $.get('https://ipapi.co/country/', function (data) { // get location detector by API
        if (data === "GB") { // If the country is England 
            $('.c_d').text("£"); // put the currency symbol 
        }
        /* Europien Country */
        else if (["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "EL", "ES", "FR", "HR", "IT", "CY", "LV", "LT", 
        "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "IS", "LI", 
        "NO", "CH"].indexOf(data) !== -1) {
            $('.c_e').text("€");
        } else {
            $('.c_d').text("$");
        }
    });
});
