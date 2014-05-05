var yearBook = yearBook || {};

yearBook.AppRouter = Backbone.Router.extend({
  routes:{
    '': 'index', // index page
    ':id': 'showStudent', //student page by id
    '*anything': 'goHome' // 404 route
  },

  index: function(){
    var view = new yearBook.AppView({collection: yearBook.yearBookStudents});
    view.render();
    console.log('index page')
  },

  // index.html#12
  showStudent: function(slug){

    var view = new yearBook.AppView({collection: yearBook.yearBookStudents});
    view.render();

    // setup the student in question from the id in the url
    
    var student = yearBook.yearBookStudents.get(slug);
    new yearBook.StudentView({model: student});
    console.log('student page')
  },

  // 404 error page
  goHome: function(){
    document.location.hash = '';
  }

});