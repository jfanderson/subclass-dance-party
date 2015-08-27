var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  console.log(JSON.stringify(this.prototype));
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // var oldStep = makeDancer.prototype.step;

  // this.step(timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.dance = function() {

};

makeBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this, this.timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    console.log("this.$node is: " + this.$node);
    this.$node.toggle();
  };