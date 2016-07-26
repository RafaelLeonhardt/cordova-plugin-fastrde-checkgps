var cordova = require('cordova'),
    proxy = require("cordova/exec/proxy");

proxy.add("CheckGPS", {
    check:function(onEnabled, onDisabled) {
        "geolocation" in navigator ? onEnabled : onDisabled;
    }
});