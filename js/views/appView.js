var yearBook = yearBook || {};

yearBook.AppView = Backbone.View.extend({
  // where will this view be drawn
  el: '#main',
  
  // initialize by adding the template to the view
  initialize: function(){
    // go look for the template on the index page and compile it
    this.template = _.template($('#appView').html());
  },

  render: function(){
    // get this template and stick it into the el: element on page
    this.$el.html(this.template());

    // now send all of this to the view for each item int he collections
    this.collection.each(function(student){
      var view = new yearBook.StudentListView({model: student});
      view.render();
      $('#students').append(view.el);
    });
  }
});