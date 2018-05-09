jQuery(document).ready(function() {

    console.log("Navigation Loaded");

    jQuery('#getPayMethods').click(function() {
        jQuery('#page-wrapper').load('app/pages/getpaymentmethods.html');
    });

    jQuery('#getBankAccounts').click(function() {
        jQuery('#page-wrapper').load('app/pages/getbankaccounts.html');
    });

    jQuery('#getBankAll').click(function() {
        jQuery('#page-wrapper').load('app/pages/getBankAll.html');
    });

    jQuery('#getBankDeposit').click(function() {
        jQuery('#page-wrapper').load('app/pages/getBankDeposit.html');
    });

    jQuery('#getBankWithdrawal').click(function() {
        jQuery('#page-wrapper').load('app/pages/getBankWithdrawal.html');
    });

    jQuery('#getOnlineBanks').click(function() {
        jQuery('#page-wrapper').load('app/pages/getOnlineBanks.html');
    });

    jQuery('#checkDeposit').click(function() {
        jQuery('#page-wrapper').load('app/pages/checkDeposit.html');
    });

    jQuery('#checkWithdrawal').click(function() {
        jQuery('#page-wrapper').load('app/pages/checkWithdrawal.html');
    });

    jQuery('#offlineDepositV1').click(function() {
        jQuery('#page-wrapper').load('app/pages/offlineDepositV1.html');
    });

    jQuery('#onlineDeposit').click(function() {
        jQuery('#page-wrapper').load('app/pages/onlineDeposit.html');
    });

    jQuery('#generateSign').click(function() {
        jQuery('#page-wrapper').load('app/pages/generateSign.html');
    });

    jQuery('#offlineWithdrawal').click(function() {
        jQuery('#page-wrapper').load('app/pages/offlineWithdrawal.html');
    });

    jQuery('#onlineWeChat').click(function() {
        jQuery('#page-wrapper').load('app/pages/onlineWeChat.html');
    });

    jQuery('#onlineQQPay').click(function() {
        jQuery('#page-wrapper').load('app/pages/onlineQQPay.html');
    });

    jQuery('#onlineAlipay').click(function() {
        jQuery('#page-wrapper').load('app/pages/onlineAlipay.html');
    });

    jQuery('#onlineChinaUnionPay').click(function() {
        jQuery('#page-wrapper').load('app/pages/onlineChinaUnionPay.html');
    });

    jQuery('#onlineWithdrawal').click(function() {
        jQuery('#page-wrapper').load('app/pages/onlineWithdrawal.html');
    });

    jQuery('#venuspoint').click(function() {
        jQuery('#page-wrapper').load('app/pages/venuspoint.html');
    });

    jQuery('#venuspointdeposit').click(function() {
        jQuery('#page-wrapper').load('app/pages/venuspointdeposit.html');
    });

    jQuery('#venuspointwithdrawal').click(function() {
        jQuery('#page-wrapper').load('app/pages/venuspointwithdrawal.html');
    });

    jQuery('#offlineWeChatD').click(function() {
        jQuery('#page-wrapper').load('app/pages/offlineWeChatD.html');
    });

    jQuery('#offlineWeChatW').click(function() {
        jQuery('#page-wrapper').load('app/pages/offlineWeChatW.html');
    });

    jQuery('#offlineQQPayD').click(function() {
        jQuery('#page-wrapper').load('app/pages/offlineQQPayD.html');
    });

    jQuery('#offlineQQPayW').click(function() {
        jQuery('#page-wrapper').load('app/pages/offlineQQPayW.html');
    });

    jQuery('#offlineLineD').click(function() {
        jQuery('#page-wrapper').load('app/pages/offlineLineD.html');
    });

    jQuery('#offlineLineW').click(function() {
        jQuery('#page-wrapper').load('app/pages/offlineLineW.html');
    });

    jQuery('#offlineDepositV2').click(function() {
        jQuery('#page-wrapper').load('app/pages/offlineDepositV2.html');
    });

    jQuery('#uploadDepositSlip').click(function() {
        jQuery('#page-wrapper').load('app/pages/uploadDepositSlip.html');
    });

    jQuery('#directdeposit').click(function() {
        jQuery('#page-wrapper').load('app/pages/directdeposit.html');
    });

    jQuery('#directwithdraw').click(function() {
        jQuery('#page-wrapper').load('app/pages/directwithdraw.html');
    });

});

