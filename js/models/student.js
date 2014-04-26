var yearBook = yearBook || {};

yearBook.Student = Backbone.Model.extend({
  idAttribute: 'slug',
  defaults: {
    name: 'FirstName',
    slug: 'new-student',
    aboutMe: 'New student content'
  }
});