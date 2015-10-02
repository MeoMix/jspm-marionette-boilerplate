import Application from 'src/application/application';

describe('Application', () => {
  let application;

  beforeEach(() => {
    application = new Application();
  });

  it('should start', () => {
    const spy = sinon.spy();
    application.on('start', spy);
    application.start();
    expect(spy.calledOnce).to.equal(true);
  });
});