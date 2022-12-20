var makeJimDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  let img = document.createElement('img');
  img.src = 'images/Jim.png';
  this.$node.append(img);
};

makeJimDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeJimDancer.prototype.constructor = makeJimDancer.prototype;
