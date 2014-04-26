var app = app || {};

app.Student = Backbone.Model.extend({
  
  defaults: {
    name: 'Tom',
    photoURL: 'tba',
    aboutMe: 'your bio',
    portfolioImage1: 'tba',
    portfolioImage2: 'tba',
    portfolioImage3: 'tba',
    portfolioURL1: 'tba',
    portfolioURL2: 'tba',
    portfolioURL3: 'tba',
    portfolioBlurb1: 'tba',
    portfolioBlurb2: 'tba',
    portfolioBlurb3: 'tba',
    github: 'https://github.com/thomasdane',
    twitter: 'https://twitter.com/tomjdane',
    linkedin: '',
    email: ''
  }
});