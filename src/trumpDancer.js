var makeTrumpDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('trump');

  this.$node.mouseover(function() {
    $(this).css({
      '-ms-transform': 'rotate(180deg)',
      '-webkit-transform': 'rotate(180deg)',
      'transform': 'rotate(180deg)',
      '-ms-transition': '5s transform linear',
      '-webkit-transition': '5s transform linear; -0- transition: 5s transform linear',
      'transition': '5s transform linear'
    });
  });
};

makeTrumpDancer.prototype = Object.create(makeDancer.prototype);
makeTrumpDancer.prototype.constructor = makeTrumpDancer;

makeTrumpDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this, this.timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
};
