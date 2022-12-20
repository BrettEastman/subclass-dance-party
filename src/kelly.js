var makeKellyDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  let img = document.createElement('img');
  img.src = 'images/KellyKapour.png';
  this.$node.append(img);
};

makeKellyDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeKellyDancer.prototype.constructor = makeKellyDancer.prototype;
