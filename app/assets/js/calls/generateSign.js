jQuery(document).ready(function() {

    console.log("Generate Signature Loaded");

    // jQuery('#Notes').val("{username:'wpineda',language:'en'}");

    // GetBankCode();

    jQuery('#generate').click(function() {

        jQuery('#httprequest1').text('');
        var salt = String(jQuery('#Salt').val());

        var rawdata = String(jQuery('#rawData').val());
        var sign = CryptoJS.HmacSHA256(rawdata, salt).toString(CryptoJS.enc.Hex).toUpperCase();
        jQuery('#httprequest1').text(sign);

    });

});