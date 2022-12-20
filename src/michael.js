var makeMichaelDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  let img = document.createElement('img');
  img.src = 'images/MichaelScott.png';
  this.$node.append(img);
};

makeMichaelDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeMichaelDancer.prototype.constructor = makeMichaelDancer.prototype;
