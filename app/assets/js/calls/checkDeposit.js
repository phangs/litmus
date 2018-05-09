jQuery(document).ready(function() {

    console.log("Check Deposit Status");

    jQuery('#sendreq').click(function() {

        jQuery('#httprequest1').text('');
        jQuery('#httpresponse1').text('');

        var platform = String(jQuery('#platform').val());
        var server = String(jQuery('#Server').children(':selected').attr('id'));
        var client = String(jQuery('#ClientName').val());
        var country = String(jQuery('#Country').val());
        var currency = String(jQuery('#Currency').val());
        var clientkey = String(jQuery('#ClientKey').val());
        var secretkey = String(jQuery('#SecretKey').val());
        var salt = String(jQuery('#Salt').val());
        var endpoint = String(jQuery('#Endpoint1').text());
        
        var txnnumber = String(jQuery('#txnnumber').val());

        if (txnnumber == '') {
            alert('Transaction Number is required.');
            return;
        } else {
            var requrl = String(server + endpoint + txnnumber);
        }

        // console.log(requrl);

        var hvAccept = String('application/json');
        var hvContentType = String('application/json');

        var headerObj = {
            'Accept': hvAccept,
            'Content-Type': hvContentType,
            'ClientKey': clientkey,
            'SecretKey': secretkey,
            'X-PAYWALO-PLATFORM': platform
            };

        var prettyreq = JSON.stringify(headerObj, null, '\ ');
        jQuery('#httprequest1').text(prettyreq);

        // console.log(headerObj);

        $.ajax({
            url: requrl,
            headers: headerObj,
            type: "GET",
            dataType: 'json',
            success: function(result) {
                jQuery.each(result.Data, function() {
                    if (result.Status == 'SUCCESS') {
                            var prettyres = JSON.stringify(result.Data, null, '\ ');
                            var prettymsg = JSON.stringify(result.Messages);
                            jQuery('#httpresponse1').text(("HTTP Request: " + result.Status) + "\n" + "\n" + ("Transaction Status: " + result.Data.Status) + "\n" + "\n" + prettyres + "\n" + "\n" + prettymsg);
                        } else {
                            var prettyerror = JSON.stringify(result.Messages.Errors);
                            jQuery('#httpresponse1').text("HTTP Request: FAIL" + "\n" + "\n" + prettyerror);
                        }
                });
            }
        });
    });
});