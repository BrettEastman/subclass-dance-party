var makeDwightDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  let img = document.createElement('img');
  img.src = 'images/Dwight.png';
  this.$node.append(img);
};

makeDwightDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeDwightDancer.prototype.constructor = makeDwightDancer.prototype;

makeDwightDancer.prototype.enlarge = function() {
  this.$node.hover(function() {
    $(this).css('transform', 'scale(0.75)');
  },
  function() {
    $(this).css('transform', 'scale(1.75)');
  });
};