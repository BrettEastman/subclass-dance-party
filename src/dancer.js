// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.enlarge();
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.enlarge = function() {
  this.$node.hover(function() {
    $(this).css('transform', 'scale(2.5)');
  },
  function() {
    $(this).css('transform', 'scale(1)');
  });
};
// var newDancerTest = new makeDancer;
// console.log(newDancerTest);