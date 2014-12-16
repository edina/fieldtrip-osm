"use strict";

require(['utils'], function(utils){
    $("#help-internals .version").html(utils.version);

    $('a.external-link').on('vclick', function(evt){
        evt.preventDefault();

        window.open(evt.currentTarget.href,
                    '_blank',
                    'location=yes');
    });
});