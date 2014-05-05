var yearBook = yearBook || {};

yearBook.StudentView = Backbone.View.extend({
  el: '#content',
  
  initialize: function(){
    this.template = _.template($('#studentView').html() );
    this.render();
  },

  render: function(){
    $('.student').fadeOut();
    this.$el.prepend(this.template(this.model.toJSON() ) )
  }

})