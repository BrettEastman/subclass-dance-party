$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      // the total body height * random num between 0 and 1
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node.hide().fadeIn(1000).css('transform', 'scale(1.75)'));
  });

  $('.returnDancerButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      currentDancer = window.dancers[i];
      currentDancer.top = $('body').height() * Math.random();
      currentDancer.left = $('body').height() * Math.random();
      $(window.dancers[i].$node).hide().fadeIn(1000).css('top', currentDancer.top + 'px');
      $(window.dancers[i].$node).hide().fadeIn(1000).css('left', currentDancer.left + 'px');
    }
  });


  $('.danceLineUp').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      $(window.dancers[i].$node).hide().fadeIn(1000).css('top', '450px');
    }
  });

  $('.danceLineUpVertical').on('click', function(event) {
    for (let i = 0; i < window.dancers.length; i++) {
      currentDancer = window.dancers[i];
      console.log(currentDancer.top);
      nextDancerTop = currentDancer.top + 100;

      $(window.dancers[i].$node).hide().fadeIn(1000).css('top', currentDancer.top + 'px');
      // $(window.dancers[i].$node).hide().fadeIn(1000).css('left', '300px');
    }
  });

  $('.moveFunny').on('click', function(event) {
    var getDistance = function(xA, yA, xB, yB) {
      var xDiff = xA - xB;
      var yDiff = yA - yB;
      return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    };
    for (let i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i + 1] !== undefined) {
        var currentDancer = window.dancers[i];
        var nextDancer = window.dancers[i + 1];
        var pythagorean = getDistance(currentDancer.top, nextDancer.top, currentDancer.left, nextDancer.left);
        if (pythagorean < 500) {
          $(window.dancers[i].$node).css('transform', 'rotate(180deg) scale(1.75)');
        }
      }
    }
  });
});





