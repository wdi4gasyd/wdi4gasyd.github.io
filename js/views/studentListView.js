var yearBook = yearBook || {};

yearBook.StudentListView = Backbone.View.extend({
  tagName: 'div class="character"',
  windowWidth: $('header').innerWidth(),

  events: {
    'click': 'viewStudent'
  },
  
  initialize: function(){
    this.template = _.template($('#studentListView').html() );
  },

  render: function(){
    // the usual function to add all of the details for each stundent, in this case, the sprite
    this.$el.html(this.template(this.model.toJSON() ) );

    // add the student name to the containing div (this.$el)
    this.$el.addClass(this.model.get('slug'));
    // give the element a random starting position on the stage
    this.leftPos = ( Math.floor(Math.random() * ( this.windowWidth - 32) ) )
    this.$el.css({'left': this.leftPos + 'px', 'border': '1px solid #FFF'});
    thisName = this.model.get('slug');
    // NEXT - add a function for walk left, walk right, and some way of selecting the correct function
    // randomly apply walkLeft or walkRight to start them off
    if ((parseInt(this.$el.css('left')) % 2) == 0 ) {
      this.walkTime('left', thisName);
    } else {
      console.log(this.$el.css('left'))
      console.log('ODD');
      this.walkTime('right', thisName);
    }
  },

  // this method is called by the click event defined above
  viewStudent: function(event){
    // get the router instance, and use it to navigate accordng to the students id
    event.preventDefault();
    yearBook.router.navigate(this.model.get('slug'), true);
    console.log('you clicked a student');
  },
  //tells the sprite to do the walk function at a certain speed
  walkTime: function(direction){
    var thisPos = parseInt($(this.el).css('left'));
    if (direction == 'left'){
      window.setInterval(_.bind(this.walkLeft, this), 10);

      //this.timer = setInterval(this.walkLeft(thisName), 500);
    } else {
      window.setInterval(_.bind(this.walkRight, this), 10);
    }
  },

  walkLeft: function(){
    var thisPos = parseInt($(this.el).css('left'));
    // if (thisPos > 100){    
       (this.$el).css({'left': (thisPos - 1) + 'px', 'border': 'solid 3px #F40'}) 
    //    console.log(thisPos)     
    // } else {
    // this.walkRight()
    // }
    
  },

  walkRight: function(){
    var thisPos = parseInt($(this.el).css('left'));
    // if (thisPos < 900){    
       (this.$el).css({'left': (thisPos + 1) + 'px', 'border': 'solid 3px #F40'})
    //    console.log(thisPos)       
    // } 
         
  }
});