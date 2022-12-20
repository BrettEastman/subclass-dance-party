var makeAngelaDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  let img = document.createElement('img');
  img.src = 'images/AngelaMartin.png';
  this.$node.append(img);
};

makeAngelaDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeAngelaDancer.prototype.constructor = makeAngelaDancer.prototype;
