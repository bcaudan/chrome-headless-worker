describe('worker', () => {
  it('should receive / send message', (done) => {
    const workerScript = () => {
      addEventListener("message", () => {
        postMessage('pong');
      })
    };
    const blob = new Blob([`(${workerScript.toString()})()`]);
    const worker = new Worker(URL.createObjectURL(blob));
    worker.onerror = (error) => {
      fail(`error received: ${JSON.stringify(error)}`);
      done();
    };
    worker.onmessage = (message) => {
      expect(message.data).toBe('pong');
      done();
    };

    worker.postMessage('ping');
  });
});
