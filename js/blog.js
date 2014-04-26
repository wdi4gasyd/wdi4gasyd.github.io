// 1. create router
// 2. include all routes and their mothods
// 3. create the router instance and load on body load
// 4. test all routes with console.log messages

// 5. next we define the models
// 6. and the collection

// 7. create some test content
// 8. now you can test in browser that all your model objects are there eg. yearBookStudents.models[0].attributes

// 9. add a view to render eg var view = new AppView({collection: yearBookStudents});
// view.render();

// 10. add the view object
// 11. add a basic templet the the index page

// 5 creating the models
// var Student = Backbone.Model.extend({
//   idAttribute: 'slug',
//   defaults: {
//     title: 'New Student Title',
//     content: 'New student content'
//   }
// });

// 6 the collection
// var Students = Backbone.Collection.extend({
//   model: Student
// });

// 7 a test student
var yearBookStudents = new Students([
  new Student({id:1, title:'Tom', slug: 'tom-dane', content:'Tom content'}),
  new Student({id:2, title:'Nix', slug: 'nix-siow', content:'Nix content'}),
  new Student({id:3, title:'Kriss', slug: 'kriss-heimanis', content:'Kriss content'}),
  new Student({id:4, title:'Anne', slug: 'anne-homann', content:'Ane content'}),
]);

// 10 add the view 
// var AppView = Backbone.View.extend({
//   // where will this view be drawn
//   el: '#main',
  
//   // initialize by adding the template to the view
//   initialize: function(){
//     // go look for the template on the index page and compile it
//     this.template = _.template($('#appView').html());
//   },

//   render: function(){
//     // get this template and stick it into the el: element on page
//     this.$el.html(this.template());

//     // now send all of this to the view for each item int he collections
//     this.collection.each(function(student){
//       var view = new StudentListView({model: student});
//       view.render();
//       $('#students').append(view.el);
//     });
//   }
// });

// the view for the actual student item in the main page
// var StudentListView = Backbone.View.extend({
//   tagName: 'li',

//   events: {
//     'click': 'viewStudent'
//   },
  
//   initialize: function(){
//     this.template = _.template($('#studentListView').html() );
//   },

//   render: function(){
//     this.$el.html(this.template(this.model.toJSON() ) );
//   },

//   // this method is called by the click event defined above
//   viewStudent: function(event){
//     // get the router instance, and use it to navigate accordng to the students id
//     event.preventDefault();
//     router.navigate(this.model.get('slug'), true);
//     console.log('you clicked a student');
//   }
// });


// var StudentView = Backbone.View.extend({
//   el: '#main',
  
//   initialize: function(){
//     this.template = _.template($('#studentView').html() );
//     this.render();
//   },

//   render: function(){
//     $('.student').fadeOut();
//     this.$el.append(this.template(this.model.toJSON() ) )
//   }

// })


// 1-2 router routes
// var AppRouter = Backbone.Router.extend({
//   routes:{
//     '': 'index', // index page
//     ':id': 'showStudent', //student page by id
//     '*anything': 'goHome' // 404 route
//   },

//   // here we need a method to match each route start with basics ie.
//   // showStudent: function(id){
//   //   console.log('student page')
//   // },

//   // index page
//   // 9 - add a view 
//   index: function(){
//     var view = new AppView({collection: yearBookStudents});
//     view.render();
//     console.log('index page')
//   },

//   // index.html#12
//   showStudent: function(slug){
//     // setup the student in question from the id in the url
//     var student = yearBookStudents.get(slug);
//     new StudentView({model: student});
//     console.log('student page')
//   },

//   // 404 error page
//   goHome: function(){
//     console.log('404')
//   }

// });

// 3-4 create an instance of the above router
// var router = new AppRouter ();
// $(document).ready(function(){
//   Backbone.history.start();
// });
