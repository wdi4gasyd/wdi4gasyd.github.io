//The game page does not have a route in backbone because it would increase page load too much.
//Instead, the game page link will be a regular hyperlink on index. 

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'index/:id': 'showStudent',  
    '*anything': 'goHome'
  },
  index: function () {
    var view = new AppView({collection: OurClass});
    view.render();
    console.log('you are at the index page');
  },
  showStudent: function (slug) {
    var student = app.Students.get(slug);
    new StudentView({model: student});
    console.log('you have opened the student drop down')
  },
  goHome: function () {
    document.location.hash = '';
  }
});

var router = new AppRouter();
$(document).ready(function () {
  Backbone.history.start();
});