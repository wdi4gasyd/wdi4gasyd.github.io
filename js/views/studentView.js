var yearBook = yearBook || {};

yearBook.StudentView = Backbone.View.extend({
  el: '#main',
  
  initialize: function(){
    this.template = _.template($('#studentView').html() );
    this.render();
  },

  render: function(){
    $('.student').fadeOut();
    this.$el.append(this.template(this.model.toJSON() ) )
  }

})