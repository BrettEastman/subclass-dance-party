$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      // the total body height * random num between 0 and 1
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  // function getDistance (xA, yA, xB, yB) {
  //   var xDiff:Number = xA - xB;
  //   var yDiff:Number = yA - yB;
  //   return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  // }

  $('.danceLineUp').on('click', function(event) {
    // for loop through window.dancers array
  //     display: flex;
  // justify-content: space-around;
  // align-items: center;
    for (let i = 0; i < window.dancers.length; i++) {
      $(window.dancers[i].$node).css('top', '450px');
      // $(window.dancers[i].$node).css('justify-content', 'space-around');
      // $(window.dancers[i].$node).css('align-items', 'center');
    }
  });

  // $('.moveFunny').on('click', function(event) {
  //   // for loop through window.dancers array
  // //     display: flex;
  // // justify-content: space-around;
  // // align-items: center;
  //   for (let i = 0; i < window.dancers.length; i++) {
  //     $(window.dancers[i].$node).css('top', getDistance(a,b,c,d)'px');
  //     // $(window.dancers[i].$node).css('justify-content', 'space-around');
  //     // $(window.dancers[i].$node).css('align-items', 'center');
  //   }
  // });
});

// //https://www.kirupa.com/html5/using_the_pythagorean_theorem_to_measure_distance.htm
// function getDistance(xA, yA, xB, yB) {
// 	var xDiff:Number = xA - xB;
// 	var yDiff:Number = yA - yB;

// 	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
// }

// var distance = getDistance(0, 0, 100, 100);
// alert(distance);





