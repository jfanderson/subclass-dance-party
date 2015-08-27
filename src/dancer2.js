var makeDancerTwo = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('another');
};

makeDancerTwo.prototype = Object.create(makeDancer.prototype);
makeDancerTwo.prototype.constructor = makeDancerTwo;

makeDancerTwo.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this, this.timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // debugger;
    // var curr = this.$node.css("top");
    this.$node.animate({top: '+=100', left: '+=100'});
    this.$node.animate({top: '-=100', left: '+=100'});
    this.$node.animate({top: '-=100', left: '-=100'});
    this.$node.animate({top: '+=100', left: '-=100'});

  };