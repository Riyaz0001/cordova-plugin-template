
var exec = require('cordova/exec');
var PLUGIN_NAME = 'StoragePath';
var StoragePath = {
    getPath: function (name, successCallback, errorCallback) {
        exec(successCallback, errorCallback, PLUGIN_NAME, "getPath", [name]);
    }
};

module.exports = StoragePath;
