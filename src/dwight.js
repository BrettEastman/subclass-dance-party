var makeDwightDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  let img = document.createElement('img');
  img.src = 'images/Dwight.png';
  this.$node.append(img);
};

makeDwightDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeDwightDancer.prototype.constructor = makeDwightDancer.prototype;
