# chrome-headless-worker

Reproduce failing case on chrome headless after bump to version 71.

### Run the test

    npm test
    
Result on Chrome Headless:

    worker
      ✗ should receive / send message
    	  Error: Failed: error received: {"isTrusted":true}
    	    at <Jasmine>
    	    at Worker.worker.onerror (lib/test.spec.js:11:7)        


Result on Chrome:

    worker
      ✓ should receive / send message
