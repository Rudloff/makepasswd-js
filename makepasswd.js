//Based on https://launchpad.net/ubuntu/+source/makepasswd
/*jslint devel: true */
var makepasswd = {};
makepasswd.StringUsed = "ABCDEFGHIJKLMNPQRSTUVWXYabcdefghijmnopqrstuvwxyz0123456789";
makepasswd.ValString = makepasswd.StringUsed.length - 1;
makepasswd.CharMin = 8;
makepasswd.CharMax = 10;
makepasswd.random = function (min, max) {
    'use strict';
    return Math.random() * (max - min) + min;
};
makepasswd.MakePassword = function () {
    'use strict';
    var i, Password = "", Total = this.random(this.CharMin, this.CharMax);
    for (i = 0; i < Total; i += 1) {
        Password += this.StringUsed.substr(this.random(0, this.ValString), 1);
    }
    return Password;
};
console.log(makepasswd.MakePassword());
