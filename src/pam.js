var makePamDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  let img = document.createElement('img');
  img.src = 'images/PamBeesley.png';
  this.$node.append(img);
};

makePamDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makePamDancer.prototype.constructor = makePamDancer.prototype;
