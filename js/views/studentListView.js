var yearBook = yearBook || {};

yearBook.StudentListView = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click': 'viewStudent'
  },
  
  initialize: function(){
    this.template = _.template($('#studentListView').html() );
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON() ) );
    //here we also want to attach their respective sprite. 
  },

  // this method is called by the click event defined above
  viewStudent: function(event){
    // get the router instance, and use it to navigate accordng to the students id
    event.preventDefault();
    yearBook.router.navigate(this.model.get('slug'), true);
    console.log('you clicked a student');
  }
});