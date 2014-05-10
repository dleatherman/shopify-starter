(function() {
  "use strict";

  var s,
  Client = {

    settings: {
    },

    init: function() {
      s = this.settings;

      this.router({
      });

    },

    router: function (obj) {
      var location = window.location.pathname;
      if (location.substr(location.length - 1) == "/" && location.length != 1) {
        location = location.slice(0, -1);
      }
      location = location.split('/');
      for (var key in obj) {
        var route = key.split('/'),
        test = [],
        wildcards = '',
        hasWildcard = false;
        $(route).each( function(i) {
          if (location[i] == this || this.charAt(0) == ':') {
            test.push(true);
            if (this.charAt(0) == ':') {
              hasWildcard = true;
              wildcards += ', ' + location[i];
            }
          }
          else {
            test.push(false);
          }
        });
        if (!(test.indexOf(false) > -1) && location.length == route.length) {
          if (hasWildcard) {
            var wildcardsArray = wildcards.split(', ');
            wildcardsArray.shift();
            this[obj[key]].apply(this, wildcardsArray);
          }
          else {
            this[obj[key]]();
          }
        }
      }
    }
  };

  Client.init();

})();