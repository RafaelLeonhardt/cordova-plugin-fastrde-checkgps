var cordova = require('cordova'),
    proxy = require("cordova/exec/proxy");

proxy.add("CheckGPS", {
    check:function() {
        return "geolocation" in navigator ? true : false;
    }
});