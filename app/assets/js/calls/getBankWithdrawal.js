jQuery(document).ready(function() {

    console.log("Get Bank - Withdrawal Banks");

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
        
        if (country == 'All') {
            var endpoint = String(jQuery('#Endpoint1').text());
        } else {
            var endpoint = String(jQuery('#Endpoint2').text() + country);
        }

        var requrl = String(server + endpoint);

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
                    var prettyerror = JSON.stringify(result.Messages.Errors, null, '\ ');
                    // var prettymsg = JSON.stringify(result.Messages);
                    var prettyresult = JSON.stringify(result.Data, null, '\ ');
                    // jQuery('#httpresponse').text(result.Status + '\n' + '\n' + prettyresult + '\n' + prettymsg + '\n' + prettyerror);
                    jQuery('#httpresponse1').text(result.Status + '\n' + '\n' + prettyresult + '\n' + prettyerror);
                });
            }
        });
    });
});