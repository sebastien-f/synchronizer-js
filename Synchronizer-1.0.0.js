/*!
* Synchronizer.js
* async synchronization class
* https://github.com/sebastien-f/synchronizer-js
* MIT License : https://github.com/sebastien-f/synchronizer-js/blob/master/LICENSE
* 90% of this is inspired by this article:
* http://forrst.com/posts/callWhenDone_a_simple_synchronized_callback_clo-zi1
*/
/* v1.0.0 */
var Synchronizer = (function () {
    function Synchronizer(cb) {
        this.counter = 0;
        this.callback = cb || function () {
        };
    }
    Synchronizer.prototype.add = function (amount) {
        if (!amount) {
            amount = 1;
        }

        this.counter += amount;
    };

    Synchronizer.prototype.done = function (amount) {
        if (!amount) {
            amount = 1;
        }

        var newCounter = this.counter - amount;

        if (newCounter < 0) {
            throw "counter is negative";
        }

        this.counter = newCounter;
        if (this.counter == 0) {
            this.callback();
        }
    };
    return Synchronizer;
})();
//# sourceMappingURL=Synchronizer-1.0.0.js.map
