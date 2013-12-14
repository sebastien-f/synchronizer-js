/*!
* Synchronizer.js
* async synchronization class
* https://github.com/sebastien-f/synchronizer-js
* MIT License : https://github.com/sebastien-f/synchronizer-js/blob/master/LICENSE
* 90% of this is inspired by this article:
* http://forrst.com/posts/callWhenDone_a_simple_synchronized_callback_clo-zi1
*/
/* v1.0.0 */
class Synchronizer {
    private counter: number = 0;
    private callback: Function;
    constructor(cb: Function) {
        this.callback = cb || function () { };
    }


    public add(amount?: number) {
        if (!amount) {
            amount = 1;
        }

        this.counter += amount;
    }

    public done(amount?: number) {
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
    }
}
