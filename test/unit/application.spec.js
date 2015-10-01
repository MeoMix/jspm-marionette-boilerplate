import Application from 'src/application/application';

describe('Application', function() {
  beforeEach(function() {
    this.application = new Application();
  });

  it('should start', function() {
    var spy = sinon.spy();
    this.application.on('start', spy);
    this.application.start();
    expect(spy.calledOnce).to.equal(true);
  });
});