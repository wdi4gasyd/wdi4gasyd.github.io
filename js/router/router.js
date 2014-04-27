var yearBook = yearBook || {};

//most of our functionality occurs in the router. 

//set the three routes. There is no route for the game
//because we want to prevent backbone loading the game/phaser. 
yearBook.AppRouter = Backbone.Router.extend({
  routes:{
    '': 'index', // index page
    ':id': 'showStudent', //student page by id
    '*anything': 'goHome' // 404 route
  },


  index: function(){
    //fetch main container AppView and insert data from the Students collection. 
    var view = new yearBook.AppView({collection: yearBook.yearBookStudents});
    view.render();
    console.log('index page')
  },

  
  showStudent: function(slug){
    // find a student by their slug. 
    var student = yearBook.yearBookStudents.get(slug);
    //fetch the StudentView from index.html and insert the student data. 
    new yearBook.StudentView({model: student});
    console.log('student page')
  },

  // 404 error page
  goHome: function(){
    document.location.hash = '';
  }

});