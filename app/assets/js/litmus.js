jQuery(document).ready(function() {

    console.log("Litmus Loaded");
    SetDefault();

    function SetDefault() {
        jQuery('#platform').val('WEB');
        jQuery('#ClientName').val('Citron');
        jQuery('#ClientKey').val('47693eb3-5b85-4980-b006-0f2a35c02b8a');
        jQuery('#SecretKey').val('59dba91b-52d0-4589-8909-42d7f14a2a46');
        jQuery('#Salt').val('46da9153c96c4d75b138d6722cd5f7e0');
        jQuery('#Currency').val('CNY');
        jQuery('#Country').val('China');
    };

    jQuery('#Country').change(function() {

        var cur = jQuery(this).children(':selected').attr('id');
        jQuery('#Currency').val(cur);
    });

    jQuery('#ClientName').change(function() {

        var client = jQuery('#ClientName').val();
        var server = jQuery('#Server').val();

        if (server == 'PROD') {
            switch (client) {
                case 'Citron':
                    // alert('Citron Prod');
                    jQuery('#ClientKey').val('67ceb2f6-18ec-43e6-b6db-1e803eafce73');
                    jQuery('#SecretKey').val('097cd93f-f2a7-46d8-8982-7c2d798b6a38');
                    jQuery('#Salt').val('46da9153c96c4d75b138d6722cd5f7e0');
                    break;
                case 'ba_test_client':
                    // alert('ba_test_client Prod')
                    jQuery('#ClientKey').val('d4814ccb-d808-4ed4-8704-2d559d8c9573');
                    jQuery('#SecretKey').val('ebdf687f-4efb-419b-984d-4e42944544c1');
                    jQuery('#Salt').val('7443ceac636a4356b543e6355424647a');
                    break;
                case 'Orange88':
                    // alert('Orange88 Prod')
                    jQuery('#ClientKey').val('0fa72677-d565-4f0c-91db-f76b407f2519');
                    jQuery('#SecretKey').val('eb3e3df3-43b8-41de-aac2-7f579cc896e0');
                    jQuery('#Salt').val('92470fc0e88e4c5cbb8c68847f88e4a0');
                    break;
            }
        } else {
            switch (client) {
                case 'Citron':
                    jQuery('#ClientKey').val('47693eb3-5b85-4980-b006-0f2a35c02b8a');
                    jQuery('#SecretKey').val('59dba91b-52d0-4589-8909-42d7f14a2a46');
                    jQuery('#Salt').val('46da9153c96c4d75b138d6722cd5f7e0');
                    break;
                case 'ba_test_client':
                    jQuery('#ClientKey').val('8c15906f-6411-47e5-ae2b-d49c265725e3');
                    jQuery('#SecretKey').val('827228f7-02db-4542-a474-43b329b1b5ff');
                    jQuery('#Salt').val('713b61fc942642d2b7a6ed04a47f879a');
                    break;
                case 'Orange88':
                    jQuery('#ClientKey').val('436eb011-feb5-4cd0-ae40-0c81cdab0dcc');
                    jQuery('#SecretKey').val('2b50af1a-f993-49e3-b835-a923efa8a517');
                    jQuery('#Salt').val('92470fc0e88e4c5cbb8c68847f88e4a0');
                    break;
            }
        }

    });

    jQuery('#Server').change(function() {

        var client = jQuery('#ClientName').val();
        var server = jQuery('#Server').val();

        if (server == 'PROD') {
            switch (client) {
                case 'Citron':
                    // alert('Citron Prod');
                    jQuery('#ClientKey').val('67ceb2f6-18ec-43e6-b6db-1e803eafce73');
                    jQuery('#SecretKey').val('097cd93f-f2a7-46d8-8982-7c2d798b6a38');
                    jQuery('#Salt').val('46da9153c96c4d75b138d6722cd5f7e0');
                    break;
                case 'ba_test_client':
                    // alert('ba_test_client Prod')
                    jQuery('#ClientKey').val('d4814ccb-d808-4ed4-8704-2d559d8c9573');
                    jQuery('#SecretKey').val('ebdf687f-4efb-419b-984d-4e42944544c1');
                    jQuery('#Salt').val('7443ceac636a4356b543e6355424647a');
                    break;
                case 'Orange88':
                    // alert('Orange88 Prod')
                    jQuery('#ClientKey').val('0fa72677-d565-4f0c-91db-f76b407f2519');
                    jQuery('#SecretKey').val('eb3e3df3-43b8-41de-aac2-7f579cc896e0');
                    jQuery('#Salt').val('92470fc0e88e4c5cbb8c68847f88e4a0');
                    break;
            }
        } else {
            switch (client) {
                case 'Citron':
                    jQuery('#ClientKey').val('47693eb3-5b85-4980-b006-0f2a35c02b8a');
                    jQuery('#SecretKey').val('59dba91b-52d0-4589-8909-42d7f14a2a46');
                    jQuery('#Salt').val('46da9153c96c4d75b138d6722cd5f7e0');
                    break;
                case 'ba_test_client':
                    jQuery('#ClientKey').val('');
                    jQuery('#SecretKey').val('');
                    jQuery('#Salt').val('');
                    break;
                case 'Orange88':
                    jQuery('#ClientKey').val('436eb011-feb5-4cd0-ae40-0c81cdab0dcc');
                    jQuery('#SecretKey').val('2b50af1a-f993-49e3-b835-a923efa8a517');
                    jQuery('#Salt').val('92470fc0e88e4c5cbb8c68847f88e4a0');
                    break;
            }
        }

    });

});