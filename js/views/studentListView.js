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
    this.leftPos = ( Math.floor(Math.random() * ( this.windowWidth - 32) ) );
    this.$el.css({'left': this.leftPos + 'px', 'border': '1px solid #FFF'});
    thisName = this.model.get('slug');
    // NEXT - add a function for walk left, walk right, and some way of selecting the correct function
    // randomly apply walkLeft or walkRight to start them off
    if ((parseInt(this.$el.css('left')) % 2) === 0 ) {
      this.walkTime('left', this.$el);
    } else {
      this.walkTime('right', this.$el);
    }
  },

  // this method is called by the click event defined above
  viewStudent: function(event){
    // get the router instance, and use it to navigate accordng to the students id
    event.preventDefault();
    yearBook.router.navigate(this.model.get('slug'), true);
    console.log('you clicked a student');
  },

  walkTime: function(direction, student) {
    student.direction = direction




    setInterval(function () {
      student.thisPos = parseInt(student.css('left') );
      if (student.thisPos <= 0 ) {
        student.direction = 'right'
        console.log('limit - now go ' + student.direction)
      }
      if (student.thisPos >= 928 ) {
        student.direction = 'left'
        console.log('limit - now go ' + student.direction)
      }

      if (student.direction === 'left') {
        student.css({
          'left': (student.thisPos - 1) + 'px',
          'border' : 'solid 3px #F40'
        });
      } else {     
        student.css({
          'left': (student.thisPos + 1) + 'px',
          'border' : 'solid 3px #F09'
        });
      }

      

      




    }, 100)
  }
  // walkLeft: function(){
  //   var thisPos = parseInt($(this.el).css('left'));
  //   var walkSwitch = ''
  //   if (thisPos <= 0 ){
  //     this.walkSwitch = 'right'
  //     // this.unbind(this.walkLeft, this)
  //     // this.walkRight()
  //   }
  //   if (thisPos > (960 - 32) ){
  //     this.walkSwitch = 'left'
  //   }
  //   if (this.walkSwitch == 'left'){
  //     (this.$el).css({'left': (thisPos + 1) + 'px', 'border': 'solid 3px #F40'})
  //   } else {
  //     (this.$el).css({'left': (thisPos - 1) + 'px', 'border': 'solid 3px #F40'})
  //   }
  // },

  // walkRight: function(){
  //   var thisPos = parseInt($(this.el).css('left'));
  //   if (thisPos > (960 - 32) ){
  //     //this.unbind(this.walkRight, this)
  //     this.walkLeft()
  //   } else {
  //     $(this.el).css({'left': (thisPos + 1) + 'px', 'border': 'solid 3px #1F0'})
  //   }
});