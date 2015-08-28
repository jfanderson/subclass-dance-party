var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.mouseover(function() {
    $(this).animate({
      "border-radius": "0px",
    }, 'fast');
    // $(this).css({'border-color': 'blue'});
  });

  // var rad = ($(this.$node).css("border-radius")) / 2;
  // console.log("radius: " + rad);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this, this.timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    if (this.checkForCollidingTrump()) {
      // this.$node.css({'border-color': 'blue'});
      this.$node.addClass('flag');
      // this.$node.css({"background-image": "url(American_Flag.gif)"});
      this.$node.animate({top: '-=20'});
      this.$node.animate({top: '+=20'});
    } else {
      this.$node.toggle();  
    }
};

makeBlinkyDancer.prototype.checkForCollidingTrump = function() {
  var blinkyLeft = this.left + 20;
  var blinkyTop = this.top + 20;

  for (var i = 0; i < trumpDancers.length; i++) {
    var trumpLeft = trumpDancers[i].left + 195;
    var trumpTop = trumpDancers[i].top + 200;

    var side1 = Math.abs(blinkyLeft - trumpLeft);
    var side2 = Math.abs(blinkyTop - trumpTop);
    var dist = Math.sqrt(side1*side1 + side2*side2);
    if (dist < 200) {
      return true;
    }
  }
  return false;

  // var circle={x:100,y:290,r:10};
  // var rect={x:100,y:100,w:40,h:100};
  // $("body").width()
  // $("body").height()

  // // return true if the rectangle and circle are colliding
  //   function RectCircleColliding(circle,rect){
  //       var distX = Math.abs(circle.x - rect.x-rect.w/2);
  //       var distY = Math.abs(circle.y - rect.y-rect.h/2);

  //       if (distX > (rect.w/2 + circle.r)) { return false; }
  //       if (distY > (rect.h/2 + circle.r)) { return false; }

  //       if (distX <= (rect.w/2)) { return true; } 
  //       if (distY <= (rect.h/2)) { return true; }

  //       var dx=distX-rect.w/2;
  //       var dy=distY-rect.h/2;
  //       return (dx*dx+dy*dy<=(circle.r*circle.r));
  // }
};
