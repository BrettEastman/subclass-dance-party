var makeDarrylDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  let img = document.createElement('img');
  img.src = 'images/Darryl.png';
  this.$node.append(img);
};

makeDarrylDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeDarrylDancer.prototype.constructor = makeDarrylDancer.prototype;
