describe('dwightDancer', function() {

  var dwightDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dwightDancer = new makeDwightDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dwightDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(dwightDancer.$node, 'toggle');
    dwightDancer.step();
    expect(dwightDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(dwightDancer, 'step');
      expect(dwightDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(dwightDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(dwightDancer.step.callCount).to.be.equal(2);
    });
  });
});
