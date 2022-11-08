import 'assets/jquery/jquery.min.1.7.2.js'
import 'assets/jquery/jquery.tools.min.js'
import 'assets/jquery/jquery.easing.1.3.js'
import 'assets/jquery/jquery.indicated-tabs.js'
import 'assets/jquery/jquery.event.drag-2.2.js'
import 'assets/safari/mraidview.js'
import 'assets/safari/main.js'
import { load, getQueryStringValue } from 'assets/safari/main.js'
import devicesizeWidget from 'assets/widgets/js/devicesize-widget.js'
import orientationWidget from 'assets/widgets/js/orientation-widget.js'
console.error = function(msg) {
    alert(msg)
};

$(document).ready(function(){
    $('#tabs').indicatedTabs("#content section", {}, {});
    devicesizeWidget.init();
    orientationWidget.init();
    load();

    var adtag = getQueryStringValue('adtag'), 
        fragmentArea;

    if (adtag  && adtag !== '') {
        setTimeout(function () {
            fragmentArea = document.getElementById('adFragment');
            if (fragmentArea) {
                fragmentArea.value =  decodeURIComponent(adtag);
            }
        }, 1000);
    }
});