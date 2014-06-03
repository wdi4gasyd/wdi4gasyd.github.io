var yearBook = yearBook || {};

//After we have the Student model/object,  extend it to a collection of many Students. 
yearBook.Students = Backbone.Collection.extend({
  model: yearBook.Student
});
//in the routes, we refer to this collection with yearBook.yearBookStudents



