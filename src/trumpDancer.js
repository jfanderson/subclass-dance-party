var makeTrumpDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<img class="dancer trump">');
  // this.$node.attr("src", "Peanuts_Dancing.gif");
  this.$node.addClass('trump');


  this.toggleTrump = function() {
    this.$node.css('background-image','none');
    this.$node.css('background-image','url("Peanuts_Dancing.gif")');
  };

  setInterval(this.toggleTrump.bind(this.$node), 1000);

   // if ($(img).hasClass('trump'))
   // {
   //    $(img).removeClass('trump').addClass('trump');
   // }
};

makeTrumpDancer.prototype = Object.create(makeDancer.prototype);
makeTrumpDancer.prototype.constructor = makeTrumpDancer;

makeTrumpDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this, this.timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle;
  };