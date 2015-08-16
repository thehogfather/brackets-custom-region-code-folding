/**
 * Manages preferences for custom regions.
 * @author Patrick Oladimeji
 * @date 16/08/2015 10:23 AM
 */
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, brackets*/
define(function (require, exports, module) {
    "use strict";
    var PreferencesManager      = brackets.getModule("preferences/PreferencesManager"),
        prefs                   = PreferencesManager.getExtensionPrefs("custom-region-fold"),
        strings                 = require("strings");

    //define default preference values if they have not yet been defined
    prefs.definePreference("startRegionWord", "string", "region",
                           {name: strings.START_REGION_WORD, description: strings.START_REGION_WORD_DESC});
    prefs.definePreference("endRegionWord", "string", "endregion",
                           {name: strings.END_REGION_WORD, description: strings.END_REGION_WORD_DESC});


    /**
      * Get the  setting with the specified key
      * @param {!string} key The key for the setting to retrieve
      * @return {string} the setting with the specified key
      */
    function get(key) {
        return prefs.get(key);
    }
    /**
        Set the setting attributed to the given key using the value supplied
        @param {!string} key the key for the setting to set
        @param {object} value the new value for the object
    */
    function set(key, value) {
        prefs.set(key, value);
    }

    exports.get = get;
    exports.set = set;
});
