jQuery(document).ready(function() {

    console.log("Offline Withdrawal Loaded");

    jQuery('#Notes').val("{username:'wpineda',language:'en'}");

    RefreshBanks();

    jQuery('#sendreq').click(function() {

        jQuery('#httprequest1').text('');
        jQuery('#httpresponse1').text('');

        var platform = String(jQuery('#platform').val());
        var server = String(jQuery('#Server').children(':selected').attr('id'));
        var client = String(jQuery('#ClientName').children(':selected').attr('id'));
        var country = String(jQuery('#Country').val());
        var currency = String(jQuery('#Currency').val());
        var norequests = String(jQuery('#norequests').val());
        var clientkey = String(jQuery('#ClientKey').val());
        var secretkey = String(jQuery('#SecretKey').val());
        var salt = String(jQuery('#Salt').val());
        var endpoint = String(jQuery('#Endpoint').text());
        var requrl = String(server + endpoint);
        var callbackUrl = String(jQuery('#CallbackURL').val());

        var Accept = String('application/json');
        var ContentType = String('application/json');

        var headerObj = {
            'Accept': Accept,
            'Content-Type': ContentType,
            'ClientKey': clientkey,
            'SecretKey': secretkey,
            'X-PAYWALO-PLATFORM': platform
        }

        var amount = Number(jQuery('#Amount').val());
        // var bankId = String(jQuery('#BankId').val());
        var bankId = 'NongHyup Bank';

        // if (bankId == 'None') {
        //     alert('Please select bank');
        //     return;
        // } else {
        //     var bankId = String(jQuery('#BankId').children(':selected').val());
        // }

        var bankaccountname = String(jQuery('#BankAccountName').val());
        var bankaccountnumber = Number(jQuery('#BankAccountNumber').val());
        var orderDate = new Date().toISOString().substr(0, 19);
        var notes = String(jQuery('#Notes').val());

        var intendedLoop = norequests;
        if (intendedLoop > 0) {
            for (var itr = 0; itr < intendedLoop; itr++) {
                var d = new Date();
                var d1 = d.getTime();
                var orderNumber = String('DEV' + "-" + d1);

                var updatesent = jQuery('#sentreq').text(itr + 1);
                
                var raw = amount + orderDate + orderNumber + bankId + bankaccountname + bankaccountnumber + currency + callbackUrl + notes;
                var sign = CryptoJS.HmacSHA256(raw, salt).toString(CryptoJS.enc.Hex).toUpperCase();
                jQuery('#Sign').val(sign);

                var dataObj = {
                    'Amount': amount,
                    'OrderDate': orderDate,
                    'OrderNumber': orderNumber,
                    'BankName': bankId,
                    'BankAccountName': bankaccountname,
                    'BankAccountNo': bankaccountnumber,
                    'Currency': currency,
                    'CallbackUrl': callbackUrl,
                    'Notes': notes,
                    'Sign': sign
                }

                var prettyreq = JSON.stringify(headerObj, null, '\ ');
                jQuery('#httprequest1').text(prettyreq);

                jQuery.ajax({
                    url: requrl,
                    headers: headerObj,
                    type: 'POST',
                    dataType: 'json',
                    data: JSON.stringify(dataObj),
                    success: function(result) {
                        if (result.Status == 'SUCCESS') {
                            var prettyres = JSON.stringify(result.Data, null, '\ ');
                            var prettymsg = JSON.stringify(result.Messages);
                            jQuery('#httpresponse1').text(("HTTP Request: " + result.Status) + "\n" + "\n" + ("Transaction Status: " + result.Data.Status) + "\n" + "\n" + prettyres + "\n" + "\n" + prettymsg);
                        } else {
                            var prettyerror = JSON.stringify(result.Messages.Errors);
                            jQuery('#httpresponse1').text("HTTP Request: FAIL" + "\n" + "\n" + prettyerror);
                        }
                    }
                })
            }
        }
    });

    function GetBanks() {

        var platform = String(jQuery('#platform').val());
        var server = String(jQuery('#Server').children(':selected').attr('id'));
        var client = String(jQuery('#ClientName').val());
        var endpoint = String(jQuery('#Endpoint1').text());
        var endpoint2 = String(jQuery('#Endpoint2').text());
        var country = String(jQuery('#Country').val());
        var currency = String(jQuery('#Currency').val());
        var clientkey = String(jQuery('#ClientKey').val());
        var secretkey = String(jQuery('#SecretKey').val());
        var salt = String(jQuery('#Salt').val());

        if (country == 'All') {
            var requrl = String(server + endpoint1);
        } else {
            var requrl = String(server + endpoint2 + country);
        }

        console.log(requrl);

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
                    var banks = jQuery('#BankId');
                    banks.append(jQuery("<option />").val(this.Id).text(this.BankName));
                });
            }
        });
    }

    jQuery('#refreshbankid').click(function() {
        RefreshBanks()
    });

    function RefreshBanks() {
        jQuery('#BankId')
            .find('option')
            .remove()
            .end()
            .append('<option value="None">None</option>')
            .val('None');
        GetBanks();
    };

});