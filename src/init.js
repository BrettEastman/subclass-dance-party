$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction (
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
      currentDancer.left = $('body').width() * Math.random();
      $(window.dancers[i].$node).hide().fadeIn(1000).css('top', currentDancer.top + 'px');
      $(window.dancers[i].$node).hide().fadeIn(1000).css('left', currentDancer.left + 'px');
    }
  });


  $('.danceLineUp').on('click', function(event) {
    var widthAmt = ($('body').width() / window.dancers.length);
    for (let i = 0; i < window.dancers.length; i++) {
      currentDancer = window.dancers[i];
      currentDancer.left = i * widthAmt;
      $(window.dancers[i].$node).hide().fadeIn(1000).css('top', '450px');
      $(window.dancers[i].$node).hide().fadeIn(1000).css('left', currentDancer.left + 'px');
    }
  });


  $('.danceLineUpVertical').on('click', function(event) {
    var widthAmt = ($('body').width() / window.dancers.length);
    var topAmt = ($('body').height() / window.dancers.length);
    // need to store the height 800
    // need to store the (width 1400) / 2
    // if greater than height, then reverse calculation
    for (let i = 0; i < window.dancers.length; i++) {
      // var widthAmt - divide width by the length of window.dancers (1400 / 10)
      // for each index, increment amount should change based on index
      currentDancer = window.dancers[i];
      currentDancer.left = i * widthAmt;
      currentDancer.top = i * topAmt;
      $(window.dancers[i].$node).hide().fadeIn(1000).css('top', currentDancer.top + 'px');
      $(window.dancers[i].$node).hide().fadeIn(1000).css('left', currentDancer.left + 'px');
      // $(window.dancers[i].$node).hide().fadeIn(1000).css('left', '0px');
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





