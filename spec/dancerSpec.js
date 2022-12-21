describe('dancer', function() {

  var dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new makeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('setPosition should work', function() {
    sinon.spy(dancer.$node, 'css');
    dancer.setPosition(1, 2);
    expect(dancer.$node.css.called).to.be.true;
  });

  describe('hover', function() {
    it('hover should work', function() {
      sinon.spy(dancer.$node, 'hover');
      dancer.enlarge();
      expect(dancer.$node.hover.called).to.be.true;
    });
  });
});
