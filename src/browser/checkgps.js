var cordova = require('cordova'),
    proxy = require("cordova/exec/proxy");

var CheckGPS = {
    check:function(onEnabled, onDisabled) {
        "geolocation" in navigator ? onEnabled : onDisabled;
    }
};

proxy.add("CheckGPS", CheckGPS);