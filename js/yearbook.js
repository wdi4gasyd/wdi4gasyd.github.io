var yearBook = yearBook || {};

//seed objects for all students. Create one large object/var 

yearBook.yearBookStudents = new yearBook.Students([
  new yearBook.Student({
    name: 'Tom',
    slug: 'tom-dane',
    photoURL: 'img/headshot-tom.jpg',
    aboutMe: 'The bite of an irradiated javascript bug granted Tom Dane the power of code. When a burglar killed his parent\'s laptop, Tom vowed to use those abilities to improve the web.',
    portfolioImage1: 'img/playgo.png',
    portfolioImage2: 'img/erik-butterfly.jpg',
    portfolioImage3: 'img/elance.png',
    portfolioURL1: 'http://playgo.herokuapp.com',
    portfolioURL2: 'http://butterflyeffect.herokuapp.com',
    portfolioURL3: 'httP://elancedataviz.herokuapp.com',
    portfolioBlurb1: 'rails app that joins people in a postgres database when they are attending the same events. Modeled on tinder method of matching people. Used jQuery and animate.css for the card effect.',
    portfolioBlurb2: 'Group project with two friends using the phaser.js game framework. Aim of the game is to collect butterflies and reveal information about each player',
    portfolioBlurb3: 'Data visualization using the Elance API, d3.js and backbone.js to show best value for money of freelancers by country',
    github: 'https://github.com/thomasdane',
    twitter: 'https://twitter.com/tomjdane',
    linkedin: 'http://www.linkedin.com/pub/tom-dane/3b/9ab/b17',
    email: 'tjdane@gmail.com'
  }),
  new yearBook.Student({
    name: 'Nix',
    slug: 'nix-siow',
    photoURL: 'img/headshot-nix.jpg',
    aboutMe: 'I am a full stack web developer focusing on Javascript and Ruby on Rails. I am passionate about front end technologies such as jQuery, Backbone, CSS3 and HTML5. I am doing a pivot from my real estate business and starting my career as a web developer in Sydney. I love to code and excited to work on products that bring value to people.',
    portfolioImage1: 'img/nix/Effy.jpg',
    portfolioImage2: 'img/nix/Demochattic.jpg',
    portfolioImage3: 'img/nix/MarketPlac.jpg',
    portfolioURL1: 'https://effy.herokuapp.com/',
    portfolioURL2: 'https://demochattic.herokuapp.com/',
    portfolioURL3: 'https://marketplac.herokuapp.com/',
    portfolioBlurb1: 'Manage your time with Effy.',
    portfolioBlurb2: 'Democratic + Chat Apps = Demochattic',
    portfolioBlurb3: 'MarketPlac, a E-Commerce site literally look good.',
    github: 'https://github.com/nixsiow',
    twitter: 'https://twitter.com/nixsiow',
    linkedin: 'http://www.linkedin.com/in/nixsiow',
    email: 'nixsiow@hotmail.com'
  }),
  new yearBook.Student({
    name: 'Kriss',
    slug: 'kriss-heimanis',
    photoURL: 'img/headshot-kriss.jpg',
    aboutMe: 'I\'ve always been obsessed with knowing how things work. Code let\'s me build things from the ground-up, and I get to write the rules, I love it, it\'s like a game!',
    portfolioImage1: 'img/kriss-news.jpg',
    portfolioImage2: 'img/kriss-loople.jpg',
    portfolioImage3: 'img/kriss-div.jpg',
    portfolioURL1: 'http://whatsat.herokuapp.com/',
    portfolioURL2: 'http://loople.herokuapp.com/',
    portfolioURL3: 'http://divandconquer.herokuapp.com/',
    portfolioBlurb1: 'What\'s@ is a news app that allows you to post or search news by location - find out what\'s happening in your neighbourhood.',
    portfolioBlurb2: 'Quickly and easily create short musical loops. Save loops so you can cue them up and create a full track!',
    portfolioBlurb3: 'A bookmarklet-based app that allows you to play a game with elements of any page on the internet.',
    github: 'https://github.com/citizengit',
    twitter: 'https://twitter.com/modeltwitizen',
    linkedin: 'http://www.linkedin.com/in/krissheimanis',
    email: 'citizen.kriss@gmail.com'
  }),
  new yearBook.Student({
    name: 'Olly',
    slug: 'olly-dutton',
    photoURL: 'img/headshot-olly.jpg',
    aboutMe: 'Just a man with 10 fingers, 10 toes, and a penchant for Backbone masochism. When I\'m not coding I can usually be found Snapchatting videos of my cat.',
    portfolioImage1: 'img/olly-bourbon.jpg',
    portfolioImage2: 'img/olly-bitcoin.jpg',
    portfolioImage3: 'img/erik-butterfly.jpg',
    portfolioURL1: 'http://rocky-reaches-8467.herokuapp.com',
    portfolioURL2: 'http://coinhome.herokuapp.com',
    portfolioURL3: 'http://butterflyeffect.herokuapp.com',
    portfolioBlurb1: 'A Bourbon recommendation app. Front end built with Marionette and Backbone, JavaScript and jQuery. Data visualization using D3js framework. Rails back end with PostgreSQL database.',
    portfolioBlurb2: 'A Bitcoin-only real estate and arbitration website featuring a full CRUD system, live BTC pricing, and Bitcoin key generation. Key technologies used include Rails, PostgreSQL, Bitcoin Average Price API, and Bitcoin-Ruby gem.',
    portfolioBlurb3: 'An HTML5 game, the aim of which is to unlock segments of a resume by catching butterflies. Built using the HTML5 Phaser Framework, JavaScript, jQuery and Rails.',
    github: 'https://github.com/ollyd',
    twitter: 'https://twitter.com/beefwrapper',
    linkedin: 'http://www.linkedin.com/profile/view?id=74952025',
    email: 'ollydutton@hotmail.com'
  }),
  new yearBook.Student({
    name: 'Charlie',
    slug: 'charlie-gerard',
    photoURL: 'img/headshot-charlie.jpg',
    aboutMe: "Born in MCMXC, Charlie grew up wanting to be a Pokemon master or a wizard. After a few years experience in mastering the art of bipolarity, she decided she would be a coding padawan with the dream of one day becoming a Jedi. Passionate about all things geeky, she is a massive nerd and loves creative technology and robotics. Most of all, she hates talking about herself with the third person. If you get to know her one day, she'll tell you stories about the time she... ",
    portfolioImage1: 'img/charlie/readr.png',
    portfolioImage2: 'img/charlie/loople_homepage.png',
    portfolioImage3: 'img/charlie/spectrm.png',
    portfolioURL1: 'http://readr.herokuapp.com',
    portfolioURL2: 'http://loople.herokuapp.com',
    portfolioURL3: 'http://spectrm.herokuapp.com',
    portfolioBlurb1: "readR is a newsreader app built with Rails, that allows users to add their own favorite websites and make them directly available to other users. ",
    portfolioBlurb2: 'Loople is an interactive music composer in the browser using Javascript and the Web Audio API',
    portfolioBlurb3: 'Spectrm is a music visualizer combining the Web Audio API, Three.js, the Soundcloud API and the Leap Motion API',
    github: 'https://github.com/charliegerard',
    twitter: 'https://twitter.com/Charlie__Gerard',
    linkedin: 'au.linkedin.com/in/charliegerard/en',
    email: 'charlie.a.gerard@gmail.com'
  }),
  new yearBook.Student({
    name: 'Anne',
    slug: 'anne-homann',
    photoURL: 'img/headshot-anne.jpg',
    aboutMe: "When I\'m not tuning in to watch Australia\'s number one award-winning drama \'Neighbours\', you\'ll find me coding, reading code or reading about code. Or watching more Neighbours on YouTube",
    portfolioImage1: 'img/relove.jpg',
    portfolioImage2: 'img/kriss-loople.jpg',
    portfolioImage3: 'img/kollate.jpg',
    portfolioURL1: 'http://relove-me.herokuapp.com',
    portfolioURL2: 'http://loople.herokuapp.com',
    portfolioURL3: 'http://kollate.herokuapp.com',
    portfolioBlurb1: 'A platform where the community can advertise their garage sale or find one to visit',
    portfolioBlurb2: 'Loople is an interactive music composer within the browser using Javascript and the Web Audio API kit',
    portfolioBlurb3: 'An online CMS for designers where they can keep track of their projects and resources they have collected',
    github: 'https://github.com/annehomann',
    twitter: 'https://twitter.com/an_hmn',
    linkedin: 'http://www.linkedin.com/in/annehomann',
    email: 'annehomann@gmail.com'
  }),
  new yearBook.Student({
    name: 'Erik',
    slug: 'erik-froese',
    photoURL: 'img/headshot-erik.jpg',
    aboutMe: 'Part computer, part typewriter, the Erik Froese 9000 was manufactured for all your communication and programming needs. Check out the instruction manual on LinkedIn to find out more.',
    portfolioImage1: 'img/erik-bad-hair.jpg',
    portfolioImage2: 'img/erik-butterfly.jpg',
    portfolioImage3: 'img/erik-fridge.jpg',
    portfolioURL1: 'http://bad-hair-day-predictor.herokuapp.com/',
    portfolioURL2: 'http://butterflyeffect.herokuapp.com/',
    portfolioURL3: 'http://magneticpoetry.herokuapp.com/',
    portfolioBlurb1: 'This is a light-hearted web application that uses a weather API and user input to predict the likelihood of a bad hair day. The custom algorithm was coded in Ruby.',
    portfolioBlurb2: 'Butterfly Effect is a small HTML5 game built with Olly Dutton and Tom Dane. It uses the Phaser game framework, JavaScript, jQuery, Underscore, HTML5 and CSS. Game events trigger changes in the DOM to alter elements outside of the game canvas.',
    portfolioBlurb3: 'Magnetic Poetry is a single-page word game built using Rails, AJAX, jQuery UI, jQuery Rotate, Underscore, and a few other bits and bobs. It has a simple drag-and-drop interface.',
    github: 'https://github.com/froesecom',
    twitter: 'https://twitter.com/eafroese',
    linkedin: 'http://www.linkedin.com/pub/erik-froese/33/878/829',
    email: 'froesecom@gmail.com'
  }),
  new yearBook.Student({
    name: 'Mark',
    slug: 'mark-pereira',
    photoURL: 'img/headshot-mark.jpg',
    aboutMe: '1987 and \'California Games\' was my first experience with a pc. 27 years later I\'ve finally learned to code. Becoming a full stack developer has allowed me to turn my ideas into something tangible. I am passionate about creating successful global businesses that provide value for everyday people and help them achieve their goals. With this new skillset I have a license to be dangerous... Investors get your pens and chequebooks ready.',
    portfolioImage1: 'img/mark-recipes.jpg',
    portfolioImage2: 'img/simon-demochattic.jpg',
    portfolioImage3: 'img/mark-airtribuo.jpg',
    portfolioURL1: 'tba',
    portfolioURL2: 'http://demochattic.herokuapp.com/',
    portfolioURL3: 'http://airtribuo.herokuapp.com/',
    portfolioBlurb1: 'Justlike is a web based recipe search and database to allow you to access, share and update your family heirloom recipes in one place',
    portfolioBlurb2: 'Demochattic is a web based chat client with a difference. There are no channel/room admins and all decisions only proceed after a majority vote from the users. It\'s Democrattic!',
    portfolioBlurb3: 'Airtribuo is a web based, geolocated todo list allowing you to set, assign and be notified when you are close to any todo list locations',
    github: 'https://github.com/markpereira',
    twitter: 'https://twitter.com/parkmereira',
    linkedin: 'http://www.linkedin.com/in/gmpereira',
    email: 'mark.pereira@xtra.co.nz'
  }),
  new yearBook.Student({
    name: 'Simon',
    slug: 'simon-taylor',
    photoURL: 'img/headshot-simon.jpg',
    aboutMe: 'I\'m a full stack web dev who loves both the intricacies of Javascript and the elegance of Ruby on Rails. I\'m also a nerd at heart who loves Video Games, Board Games and Roleplaying games.',
    portfolioImage1: 'img/simon-tab.jpg',
    portfolioImage2: 'img/simon-demochattic.jpg',
    portfolioImage3: 'img/simon-reviewmi.jpg',
    portfolioURL1: 'http://txt-adv.herokuapp.com/',
    portfolioURL2: 'http://demochattic.herokuapp.com/',
    portfolioURL3: 'http://review-mi.herokuapp.com/',
    portfolioBlurb1: 'Text Adventure Builder lets you create and share your own custom text based adventure games. The complex adventure editor lets you easily build your own story and bring this to life with images. Those who enjoyed "Choose your own Adventure" books will find it instantly familiar',
    portfolioBlurb2: 'Demochattic is a web based chat client with a difference. There are no channel/room admins and all decisions only proceed after a majority vote from the users. It\'s Democrattic!',
    portfolioBlurb3: 'Review Mi is a content review site, allowing users to rate and review content that they have read / watched or listened to. Currently only Movie reviews have been implemented.',
    github: 'https://github.com/nizmox',
    twitter: 'https://twitter.com/SimonTaylorAU',
    linkedin: 'http://www.linkedin.com/in/simontaylorau',
    email: 'simon@93made.com'
  })

]);

yearBook.router = new yearBook.AppRouter ();

$(document).ready(function(){
  //fetch main container AppView and insert data from the Students collection.  
  var view = new yearBook.AppView({collection: yearBook.yearBookStudents});
  view.render();
  Backbone.history.start();

  // we will need some dom elements, let's set variables here
  $('header').on('click', '.trigger-open', function(){
    $('.trigger-open').html('close');
    $('.trigger-open').addClass('trigger-close');
    $('.trigger-open').removeClass('trigger-open');
    $('.overlay').fadeIn(function (){
      runGame();//game = new Phaser.Game(900, 600, Phaser.AUTO, 'phaser-canvas', { preload: preload, create: create, update: update });
    });
  });
  $('header').on('click', '.trigger-close', function(){
    $('.trigger-close').html('Enter the Wizard School');
    $('.trigger-close').addClass('trigger-open');
    $('.trigger-close').removeClass('trigger-close');
    $('.overlay').fadeOut();
    $('#phaser-canvas').remove();
    $('.overlay').append('<div id="phaser-canvas"></div>');
  })
});