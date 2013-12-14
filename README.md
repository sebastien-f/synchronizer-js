# synchronizer-js v1.0.0

Synchronizer.js is a tiny (666 bytes minified) utility class that you can use to synchronize asynchronous
operations, like AJAX callbacks for example. It wraps the usual operation coutner in a small class so you
can run more than one at once. 

It's 90% inspired by this article : http://forrst.com/posts/callWhenDone_a_simple_synchronized_callback_clo-zi1

## Usage

Don't forget to reference Synchronizer.js or Synchronizer.min.js in your html.


```javascript
// initalize the object with the callback method that will be called when all operations
// are completed
var synchronizer = new Synchronizer(function(){ /* ... */ });

// make a call to add() everytime that you add a new operation
synchronizer.add();
myOperation(myOperationCallback);

// in the callback of your operation, make a call to done() to register the end of the operation
function myOperationCallback() {
	synchronizer.done();
	/* ... */
}

```

Cases you should avoid:

* If you call less done() than add(), the callback will never be called. 
* If you call less add() than done(), an exception will be thrown.


## "Advanced" usage

You can pass an int value to add() and done() to change the number of operations that were completed
```javascript
var synchronizer = new Synchronizer(function(){ /* ... */ });

// you know that there are 5 operations that will have to be completed
synchronizer.add(5);

// ... in one callback, for some obscure reason if you need to complete the 5 operations instead of one
synchronizer.done(5);

```

## Demo

A small [demo page is available](demo.htm)


## See also

If this does not enough for you, there are plenty of libraries that does a lot more. 
Check for example [async](https://github.com/caolan/async).

## Building the JS

You can also build the javascript file yourself (that step is not required tho). 

The javascript is built using [TypeScript](http://www.typescriptlang.org/) in Visual Studio (that's the .sln
and .csproj files) and minified with [Web Essentials](http://vswebessentials.com/), but feel free to use your 
tools of choice ! 