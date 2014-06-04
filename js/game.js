var wizGame = {
    //to reference the game object
    phaser: undefined,

    //to reference the player sprite
    player: undefined,

    //where the image assets are stored on the server
    imgPath: 'images/',

    movement: {
        //a tolerance so player sprite doesn't need to exactly matchup with mouse click
        tolerance: 5,
        //the coordinates for the players mouse click (where to move to)
        destX: undefined,
        destY: undefined
    }
};

var runGame = function (){
    var game = new Phaser.Game(900, 600, Phaser.AUTO, 'phaser-canvas', { preload: preload, create: create, update: update });

    //temporary hack to allow access to game outside of document ready
    wizGame.phaser = game;

    var lastName;

    function preload() {
        //the random number here dictates which player character is loaded.
        var playerNum = Math.floor(Math.random()*10);
      
      //here we load all of the assets we need
        
        wizGame.phaser.load.image('background', wizGame.imgPath + 'background-V2.jpg');
        wizGame.phaser.load.spritesheet('player', wizGame.imgPath + 'player' + playerNum + '.png', 32, 32);
        wizGame.phaser.load.spritesheet('powerup', wizGame.imgPath + 'powerup.png', 80, 74);   
        wizGame.phaser.load.image('reset-button', wizGame.imgPath + 'reset-button.png');
        wizGame.phaser.load.image('contact-button', wizGame.imgPath + 'contact-button.png');
        wizGame.phaser.load.spritesheet('baddie', wizGame.imgPath + 'baddie.png', 32, 32);
        wizGame.phaser.load.spritesheet('explosion', wizGame.imgPath + 'explode.png', 128, 128);

        //NPC Sprits
        wizGame.phaser.load.spritesheet('Joel', wizGame.imgPath + 'butterfly2.png', 70, 65); //Joel's NPC Sprite

        wizGame.phaser.load.spritesheet('Erik', wizGame.imgPath + 'talk-erik.png', 32, 56); // Erik's NPC Sprite
        wizGame.phaser.load.spritesheet('Mark', wizGame.imgPath + 'talk-mark.png', 32, 56); // Mark's NPC Sprite
        wizGame.phaser.load.spritesheet('Simon', wizGame.imgPath + 'talk-simon.png', 32, 56); // Simon's NPC Sprite
        wizGame.phaser.load.spritesheet('Nix', wizGame.imgPath + 'talk-nix.png', 32, 56); // Nix's NPC Sprite
        wizGame.phaser.load.spritesheet('Anne', wizGame.imgPath + 'talk-anne.png', 32, 56); // Anne's NPC Sprite
        wizGame.phaser.load.spritesheet('Charlie', wizGame.imgPath + 'talk-charlie.png', 32, 56); // Charlie's NPC Sprite
        wizGame.phaser.load.spritesheet('Kriss', wizGame.imgPath + 'talk-kriss.png', 32, 56); // Kriss's NPC Sprite
        wizGame.phaser.load.spritesheet('Olly', wizGame.imgPath + 'talk-olly.png', 32, 56); // Olly's NPC Sprite
        wizGame.phaser.load.spritesheet('Tom', wizGame.imgPath + 'talk-tom.png', 32, 56); // Tom's NPC Sprite
        wizGame.phaser.load.spritesheet('Mathilda', wizGame.imgPath + 'butterfly.png', 80, 80); // Mathilda's NPC Sprite

        wizGame.phaser.load.spritesheet('purple-sq', wizGame.imgPath + 'purple_sq.png', 10, 10);
    }

    var player;
    var cursors;
    var button;
    var enemies;
    var Joel;
    var Erik;
    var Mark;
    var Simon;
    var Nix;
    var Anne;
    var Charlie;
    var Kriss;
    var Olly;
    var Tom;
    var Mathilda;
            
    //here we set two more vars
    var score = 0;
    var scoreText;

    //here we store the names of each NPC as the player speaks to them
    winArray = [];


    function create() {

        //setting the game canvas size
        wizGame.phaser.world.setBounds(0, 0, 2200, 1650);

        //  A simple background for our game
        game.add.sprite(0, 0, 'background');

        // Set stage background color
        //this.game.stage.backgroundColor = 0x8B7765;

        //  We're going to be using physics, so enable the Arcade Physics system
        wizGame.phaser.physics.startSystem(Phaser.Physics.ARCADE);
        
        // this keeps track of the last time an NPC 'spoke'
        this.LAST_SPOKE = 0;

        // The player and its settings
        player = game.add.sprite(200, game.world.height - 150, 'player');

        //temporary hack to allow access to the plae of document ready
        wizGame.player = player;

        //  enable physics on the player
        game.physics.arcade.enable(player);

        //  Player physics properties.
        player.body.collideWorldBounds = true;

        //  animations add.
        player.animations.add('left', [3, 4, 5], 10, true);
        player.animations.add('right', [6, 7, 8], 10, true);
        player.animations.add('up', [9, 10, 11], 10, true);
        player.animations.add('down', [0, 1, 2], 10, true);
        
        game.camera.follow(player);
            


// <<===========================================================================================================>> 
                        //Create Invisible Walls
// <<===========================================================================================================>>

        wizGame.invisWalls = game.add.group();
        wizGame.invisWalls.enableBody = true;

        //make the walls invisible
        wizGame.invisWalls.alpha = 0;

        var createInvisWall = function(posX, posY, width, height) {
            var newWall = wizGame.invisWalls.create(posX, posY, 'purple-sq');
            newWall.body.immovable = true;
            newWall.scale.x = width / 10;
            newWall.scale.y = height / 10;
        };

        //LOWER LEFT ROOM
        createInvisWall(1,1182,416,12);
        createInvisWall(386,1183,30,87);
        createInvisWall(1,1377,413,24);
        createInvisWall(385,1314,31,80);


        //MIDDLE LEFT ROOM
        createInvisWall(1,1139,368,28);
        createInvisWall(343,988,26,178);
        createInvisWall(1,720,368,21);
        createInvisWall(343,740,25,159);

        //UPPER LEFT ROOM
        createInvisWall(1,671,362,43);
        createInvisWall(318,1,44,499);
        createInvisWall(1,1,319,11);
        
        //TOP 2ND FROM THE LEFT ROOM
        createInvisWall(367,1,43,573);
        createInvisWall(409,531,239,43);
        createInvisWall(786,531,276,44);
        createInvisWall(1030,1,33,530);

        //TOP 2ND FROM THE RIGHT ROOM
        createInvisWall(1078,1,42,575);
        createInvisWall(1120,531,8,45);
        createInvisWall(1298,532,462,45);
        createInvisWall(1725,1,34,531);

        //TOP RIGHT ROOM
        createInvisWall(1815,1,131,15);
        createInvisWall(2048,1,152,15);
        createInvisWall(1772,1,43,576);
        createInvisWall(1815,538,127,39);
        createInvisWall(2080,538,120,40);

        //MIDDLE RIGHT ROOM
        createInvisWall(2097,589,103,38);
        createInvisWall(1381,589,547,38);
        createInvisWall(1380,626,43,516);
        createInvisWall(1423,1106,303,37);
        createInvisWall(1899,1107,301,36);

        //LOWER RIGHT SMALL ROOM
        createInvisWall(2130,1325,70,29);
        createInvisWall(1998,1326,88,29);
        createInvisWall(1998,1354,12,296);

        //LOWER 2ND FROM THE RIGHT SMALL ROOM
        createInvisWall(1726,1324,106,36);
        createInvisWall(1726,1360,14,290);
        createInvisWall(1885,1324,105,36);
        createInvisWall(1978,1360,12,291);

        //LOWER 3RD FROM THE RIGHT SMALL ROOM
        createInvisWall(1492,1387,94,33);
        createInvisWall(1573,1418,13,232);
        createInvisWall(1352,1388,94,31);
        createInvisWall(1352,1419,13,231);

        //LOWER 4TH FROM THE RIGHT SMALL ROOM
        createInvisWall(1081,1322,104,35);
        createInvisWall(1081,1357,14,293);
        createInvisWall(1237,1321,104,36);
        createInvisWall(1327,1357,14,293);


// <<===========================================================================================================>> 

                        //Create NPC for WDI students - START
// <<===========================================================================================================>>

        // Joel =====
        Joel = game.add.sprite(1850, 300, 'Joel'); // placement of butterfly on canvas
        game.physics.arcade.enable(Joel);
        Joel.enableBody = true;
        Joel.body.immovable = true;
        Joel.animations.add('flutter', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
        Joel.animations.play('flutter');


        // Erik =====
        Erik = game.add.sprite(1400, 1550, 'Erik');
        game.physics.arcade.enable(Erik);
        Erik.enableBody = true;
        Erik.body.immovable = true;
        Erik.animations.add('talk', [0, 1], 5, true);


        // Mark butterfly =====
        Mark = game.add.sprite(1780, 1400, 'Mark');
        game.physics.arcade.enable(Mark);
        Mark.enableBody = true;
        Mark.body.immovable = true;
        Mark.animations.add('talk', [0, 1], 5, true);

        // Simon  =====
        Simon = game.add.sprite(1400, 300, 'Simon');
        game.physics.arcade.enable(Simon);
        Simon.enableBody = true;
        Simon.body.immovable = true;
        Simon.animations.add('talk', [0, 1], 5, true);


         // Nix  ======
        Nix = game.add.sprite(150, 800, 'Nix');
        game.physics.arcade.enable(Nix);
        Nix.enableBody = true;
        Nix.body.immovable = true;
        Nix.animations.add('talk', [0, 1], 5, true);

         // Anne  =====
        Anne = game.add.sprite(250, 1200, 'Anne');
        game.physics.arcade.enable(Anne);
        Anne.enableBody = true;
        Anne.body.immovable = true;
        Anne.animations.add('talk', [0, 1], 5, true);

        // Charlie  =====
        Charlie = game.add.sprite(550, 350, 'Charlie');
        game.physics.arcade.enable(Charlie);
        Charlie.enableBody = true;
        Charlie.body.immovable = true;
        Charlie.animations.add('talk', [0, 1], 5, true);
        
        // Kriss  =====
        Kriss = game.add.sprite(1100, 1450, 'Kriss');
        game.physics.arcade.enable(Kriss);
        Kriss.enableBody = true;
        Kriss.body.immovable = true;
        Kriss.animations.add('talk', [0, 1], 5, true);

        // Olly  =====
        Olly = game.add.sprite(1500, 750, 'Olly');
        game.physics.arcade.enable(Olly);
        Olly.enableBody = true;
        Olly.body.immovable = true;
        Olly.animations.add('talk', [0, 1], 5, true);


        // Tom  =====
        Tom = game.add.sprite(275, 500, 'Tom');
        game.physics.arcade.enable(Tom);
        Tom.enableBody = true;
        Tom.body.immovable = true;
        Tom.animations.add('talk', [0, 1], 5, true);


        // Mathilda butterfly =====
        Mathilda = game.add.sprite(2080, 1400, 'Mathilda');
        game.physics.arcade.enable(Mathilda);
        Mathilda.enableBody = true;
        Mathilda.body.immovable = true;

        //butterfly animate
        Mathilda.animations.add('flutter', [0, 1, 2, 3], 10, true);
        Mathilda.animations.play('flutter');
        //
// <<===========================================================================================================>> 

                        //Create NPC for WDI students - END
// <<===========================================================================================================>>


        //CREATE ENEMIES BELOW
        enemies = game.add.group();
        enemies.enableBody = true;

        for (var i = 0; i < 9; i++)
        {
            var enemy = enemies.create( 540 + (i * 700), 400, 'baddie');
            enemy.body.collideWorldBounds = true;
            enemies.callAll('animations.add', 'animations', 'left', [0, 1], 10, true);        
            enemies.callAll('animations.add', 'animations', 'right', [2, 3], 10, true);   

        }
        //add a second group of enemies with different movement styles. these baddies have short distance animations. good for platforms. 
        baddies = game.add.group();
        baddies.enableBody = true;
        for (var i = 0; i < 4; i++)
        {
            var baddy = baddies.create( 400 + (i * 900), 400, 'baddie');
            baddy.body.collideWorldBounds = true;
            baddies.callAll('animations.add', 'animations', 'left', [0, 1], 10, true);        
            baddies.callAll('animations.add', 'animations', 'right', [2, 3], 10, true);   

        }
        enemiesRight();
         
        // ---------------------------------------------------------
        // SHADOW AND TORCHLIGHT BELOW
        // ----------------------------------------------------------
        
         // The radius of the circle of light
        this.LIGHT_RADIUS = 200;
   
        // Create the shadow texture
        this.shadowTexture = this.game.add.bitmapData(this.world.width, this.world.height);

        // Create objectS that will use the bitmap as a texture
        // the coordinates define where the textures will appear in the game world
        var lightSprite = this.game.add.image(0, 0, this.shadowTexture);
        

         // Set the blend mode to MULTIPLY. This will darken the colors of
        // everything below this sprite.
        lightSprite.blendMode = Phaser.blendModes.MULTIPLY;

        // These functions animate the enemies
       
        //------------
        // ANIMATIONS
        //------------
        function enemiesRight(){
            var tween = game.add.tween(enemies).to( { x: 40 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);

            // enemies.x += 100;
            enemies.callAll('animations.play', 'animations', 'left');
            setTimeout(enemiesLeft, 2000);
        }
       
        function enemiesLeft(){
            var tween = game.add.tween(enemies).to( { x: 130 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);
            // enemies.x += -100;
            enemies.callAll('animations.play', 'animations', 'right');
            setTimeout(enemiesRight, 2000);
        }

        baddiesRight();
    
        function baddiesRight(){
            var tween = game.add.tween(baddies).to( { x: 50 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);

            // baddies.x += 100;
            baddies.callAll('animations.play', 'animations', 'left');
            setTimeout(baddiesLeft, 2000);
        }
       
        function baddiesLeft(){
            var tween = game.add.tween(baddies).to( { x: 350 }, 2000, Phaser.Easing.Sinusoidal.InOut, true, 0, Number.MAX_VALUE, true);
            // baddies.x += -100;
            baddies.callAll('animations.play', 'animations', 'right');
            setTimeout(baddiesRight, 2000);
        }

        
        
        //  The score
        scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        //  Our controls.
        cursors = game.input.keyboard.createCursorKeys();
        
    }
    

    function update() {

        // enable wall collisions
        game.physics.arcade.collide(wizGame.player, wizGame.invisWalls);

// <<===========================================================================================================>> 

                        //Create speak function when collide with WDI students - START
// <<===========================================================================================================>> 

        //  Checks to see if the player overlaps with an NPC
        game.physics.arcade.overlap(player, Joel, easterEgg, lastSpoke, this);

        game.physics.arcade.overlap(player, Erik, erikSpeak, lastSpoke, this);

        game.physics.arcade.overlap(player, Mark, markSpeak, lastSpoke, this);

        game.physics.arcade.overlap(player, Simon, simonSpeak, lastSpoke, this);

        game.physics.arcade.overlap(player, Nix, nixSpeak, lastSpoke, this);

        game.physics.arcade.overlap(player, Anne, anneSpeak, lastSpoke, this);

        game.physics.arcade.overlap(player, Charlie, charlieSpeak, lastSpoke, this);

        game.physics.arcade.overlap(player, Kriss, krissSpeak, lastSpoke, this);

        game.physics.arcade.overlap(player, Olly, ollySpeak, lastSpoke, this);

        game.physics.arcade.overlap(player, Tom, tomSpeak, lastSpoke, this);

        game.physics.arcade.overlap(player, Mathilda, mathildaSpeak, lastSpoke, this);

// <<===========================================================================================================>> 

                        //Create speak function when collide with WDI students - END
// <<===========================================================================================================>>

        // KILL PLAYER IF HE BUMPS INTO BAD GUY
        game.physics.arcade.overlap(player, enemies, killPlayer, null, this);
        game.physics.arcade.overlap(player, baddies, killPlayer, null, this);


        // Draw shadow THIS IS WHAT defines THE SIZE OF THE SHADOW AREAS, and the color of the shadow
        this.shadowTexture.context.fillStyle = 'rgb(100, 100, 100)';
        this.shadowTexture.context.fillRect(0, 0, wizGame.phaser.world.width, wizGame.phaser.world.height);


        // Draw circle of light with a soft edge
        var gradient = this.shadowTexture.context.createRadialGradient(
                wizGame.player.world.x + 16, wizGame.player.world.y + 32, this.LIGHT_RADIUS * 0.75,
                wizGame.player.world.x + 16, wizGame.player.world.y + 32, this.LIGHT_RADIUS);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

        this.shadowTexture.context.beginPath();
        this.shadowTexture.context.fillStyle = gradient;
        this.shadowTexture.context.arc(wizGame.player.world.x + 16, wizGame.player.world.y + 32,
            this.LIGHT_RADIUS, 0, Math.PI*2);
        this.shadowTexture.context.fill();

        // This just tells the engine it should update the texture cache
        this.shadowTexture.dirty = true;

        //--------------------------------------
        // PLAYER MOVEMENT WITH KEYS
        //--------------------------------------

        //Reset the players velocity (movement)
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;

        //=========================
        //PLAYER MOVEMENT WITH KEYS
        //=========================

        if (cursors.left.isDown) {
            player.body.velocity.x = -200;
            player.animations.play('left');
            
        } else if (cursors.right.isDown) {
            player.body.velocity.x = 200;
            player.animations.play('right');
        } else if (cursors.up.isDown) {
            player.body.velocity.y = -200;
            player.animations.play('up');
        } else if (cursors.down.isDown) {
            player.body.velocity.y = 200;
            player.animations.play('down');
        } else {
            //  Stand still
            player.animations.stop();
            player.frame = 1;
        }
     

        //--------------------------------------
        // PLAYER MOVEMENT WITH MOUSE
        //--------------------------------------

        if (game.input.activePointer.isDown) {

            console.log("click detected");
            //NEED TO THROTTLE THIS FUNCTION TO PREVENT TOO MANY READINGS
            //A COLLISION SHOULD CLEAR THE MOVEMENT DESTINATION
            
            // save the mouseclick location on the canvas in a variable
            wizGame.movement.destX = game.input.worldX - (wizGame.player.width / 2);
            wizGame.movement.destY = game.input.worldY - (wizGame.player.height / 2);
            // console.log(game.input.x, game.input.y);
            console.log(game.input.worldX, game.input.worldY);

        }

        if (typeof wizGame.movement.destX != 'undefined') {
            //HORIZONTAL MOVEMENT
            if (wizGame.movement.destX > (wizGame.player.x + wizGame.movement.tolerance)) {
                player.body.velocity.x = 200;
            } else if (wizGame.movement.destX < (wizGame.player.x - wizGame.movement.tolerance)) {
                player.body.velocity.x = -200;
            } else {
                player.body.velocity.x = 0;
            }

            //VERTICAL MOVEMENT
            if (wizGame.movement.destY > (wizGame.player.y + wizGame.movement.tolerance)) {
                player.body.velocity.y = 200;
            } else if (wizGame.movement.destY < (wizGame.player.y - wizGame.movement.tolerance)) {
                player.body.velocity.y = -200;
            } else {
                player.body.velocity.y = 0;
            }
        }

    }
    
    // This function checks when the players last spoke, to avoid printing text overtop of text already on the canvas
    function lastSpoke () {
        if (this.game.time.now > this.LAST_SPOKE + 1500){
            this.LAST_SPOKE = this.game.time.now;
            return true;
          } else {
              return false;
        }
    }



// <<===========================================================================================================>> 

                        //WDI students add comments to the array they want their NPC to speak - START
// <<===========================================================================================================>>


    function easterEgg (player, Joel) {
    
        // Samples an array of Joel's best comments
        joelStyle = { font: "20px Arial", fill: "#fff", align: "center" };
        var joelisms = ["\"Have the best time... seriously.\"", "\"Turn up the autism for that one.\"", "\"It's past 9am - R.I.P.\""]
        var joelText = game.add.text(1650, 350, _.sample(joelisms), joelStyle);
        // var joelText = game.add.text(300, 960, "\"Have the best time... seriously.\"", joelStyle); //<< CAN THIS BE REMOVED?  
        winChecker(Joel.key);
        // Call removeText function after a couple seconds
        setTimeout(removeText, 1500);

        function removeText () {
            game.world.remove(joelText);   
        }

        

    }

    function erikSpeak (player, Erik) {
    
        // Samples an array of Erik's best comments
        erikStyle = { font: "20px Arial", fill: "#fff", align: "center" };
        var erikisms = ["\"I'm Erik.\"", "\"Will today be a bad hair day?\"", "\"Blame Canada.\""]
        var erikText = game.add.text(1390, 1450, _.sample(erikisms), erikStyle);
        // var joelText = game.add.text(300, 960, "\"Have the best time... seriously.\"", joelStyle);  //<< CAN THIS BE REMOVED?
        Erik.animations.play('talk');
        // Call removeText function after a couple seconds 
        winChecker(Erik.key);
        setTimeout(removeText, 1500);

        function removeText () {
            game.world.remove(erikText);
            Erik.animations.stop();
            Erik.frame = 0;   
        }

    }

    function markSpeak (player, Mark) {
    
        // Samples an array of Mark's best comments
        markStyle = { font: "20px Arial", fill: "#fff", align: "center" };
        var markisms = ["\"This is Mark.\"", "\"I did the WDI course.\"", "\"Marks words of wisdom\""]
        var markText = game.add.text(1720, 1300, _.sample(markisms), markStyle);  
        Mark.animations.play('talk');
        winChecker(Mark.key);
        // Call removeText function after a couple seconds
        setTimeout(removeText, 1500);

        function removeText () {
            game.world.remove(markText);
            Mark.animations.stop();
            Mark.frame = 0;    
        }      

    }

    function simonSpeak (player, Simon) {
    
        // Samples an array of Simon's best comments
        simonStyle = { font: "20px Arial", fill: "#fff", align: "center" };
        var simonisms = ["\"This is Simon.\"", "\"I did the WDI course.\"", "\"Simons words of wisdom\""]
        var simonText = game.add.text(1350, 270, _.sample(simonisms), simonStyle);  
        Simon.animations.play('talk');
        winChecker(Simon.key);
        // Call removeText function after a couple seconds
        setTimeout(removeText, 1500);

        function removeText () {
            game.world.remove(simonText);
            Simon.animations.stop();
            Simon.frame = 0;    
        }      

    }

     function nixSpeak (player, Nix) {
    
        // Samples an array of Nix's best comments
        nixStyle = { font: "20px Arial", fill: "#fff", align: "center" };
        var nixisms = ["\"This is Nix.\"", "\"I did the WDI course.\"", "\"Nixs words of wisdom\""]
        var nixText = game.add.text(125, 700, _.sample(nixisms), nixStyle);  
        Nix.animations.play('talk');
        winChecker(Nix.key);
        // Call removeText function after a couple seconds
        setTimeout(removeText, 1500);
        
        function removeText () {
            game.world.remove(nixText);
            Nix.animations.stop();
            Nix.frame = 0;    
        }

    }

    function anneSpeak (player, Anne) {
    
        // Samples an array of Anne's best comments
        anneStyle = { font: "20px Arial", fill: "#fff", align: "center" };
        var anneisms = ["\"Hi! I'm Anne Homann.\"", "\"Why yes, I would love to watch Neighbours with you\"", "\"My WDI sorcery will amaze you\""]
        var anneText = game.add.text(250, 1100, _.sample(anneisms), anneStyle);  
        Anne.animations.play('talk');
        winChecker(Anne.key);
        // Call removeText function after a couple seconds
        setTimeout(removeText, 1500);

        function removeText () {
            game.world.remove(anneText);
            Anne.animations.stop();
            Anne.frame = 0;    
        }

    }

    function charlieSpeak (player, Charlie) {
    
        // Samples an array of Charlie's best comments
        charlieStyle = { font: "20px Arial", fill: "#fff", align: "center" };
        var charlieisms = ["\"This is Charlie.\"", "\"I did the WDI course.\"", "\"Charlies words of wisdom\""]
        var charlieText = game.add.text(450, 325, _.sample(charlieisms), charlieStyle);  
        Charlie.animations.play('talk');
        winChecker(Charlie.key);
        // Call removeText function after a couple seconds
        setTimeout(removeText, 1500);

        function removeText () {
            game.world.remove(charlieText);
            Charlie.animations.stop();
            Charlie.frame = 0;    
        }

    }

    function krissSpeak (player, Kriss) {
    
        // Samples an array of Kriss's best comments
        krissStyle = { font: "20px Arial", fill: "#fff", align: "center" };
        var krissisms = ["\"This is Kriss.\"", "\"I did the WDI course.\"", "\"Kristos words of wisdom\""]
        var krissText = game.add.text(1050, 1300, _.sample(krissisms), krissStyle);  
        Kriss.animations.play('talk');
        winChecker(Kriss.key);
        // Call removeText function after a couple seconds
        setTimeout(removeText, 1500);

        function removeText () {
            game.world.remove(krissText);
            Kriss.animations.stop();
            Kriss.frame = 0;   
        }

    }

    function ollySpeak (player, Olly) {
    
        // Samples an array of Olly's best comments
        ollyStyle = { font: "20px Arial", fill: "#fff", align: "center" };
        var ollyisms = ["\"This is Olly.\"", "\"I did the WDI course.\"", "\"Ollys words of wisdom\""]
        var ollyText = game.add.text(1500, 650, _.sample(ollyisms), ollyStyle);  
        Olly.animations.play('talk');
        winChecker(Olly.key);
        // Call removeText function after a couple seconds
        setTimeout(removeText, 1500);

        function removeText () {
            game.world.remove(ollyText);
            Olly.animations.stop();
            Olly.frame = 0;    
        }

    }

    function tomSpeak (player, Tom) {
    
        // Samples an array of Tom's best comments
        tomStyle = { font: "20px Arial", fill: "#fff", align: "center" };
        var tomisms = ["\"Hi I'm Tom Dane, your friendly NPC.\"", "\"Thank you for finding me, but our princess is in another castle.\"", "\"I used to be a project manager, but then I took a WDI to the knee\""]
        var tomText = game.add.text(250, 425, _.sample(tomisms), tomStyle);  
        Tom.animations.play('talk');
        winChecker(Tom.key);
        // Call removeText function after a couple seconds
        setTimeout(removeText, 1500);

        function removeText () {
            game.world.remove(tomText);
            Tom.animations.stop();
            Tom.frame = 0;    
        }

    }

    function mathildaSpeak (player, Mathilda) {

        // Samples an array of Mathilda's best comments
        mathildaStyle = { font: "20px Arial", fill: "#fff", align: "center" };
        var mathildaisms = ["\"Call me Tilly\"", "\"WDI students love me.\"", "\"I'm Mazza.\""]
        var mathildaText = game.add.text(1900, 1350, _.sample(mathildaisms), mathildaStyle);  
        Mathilda.animations.play('talk');
        winChecker(Mathilda.key);
        // Call removeText function after a couple seconds
        setTimeout(removeText, 1500);

        function removeText () {
            game.world.remove(mathildaText);   
        }

    }

// <<===========================================================================================================>> 

                        //WDI students add comments to the array they want their NPC to speak - END
// <<===========================================================================================================>>




     // Here we check if the user has collected all the collectables when they enter the door
     function winChecker (npcName) {
        console.log("inside winchecker" + npcName);
        if (($.inArray(npcName, winArray) === -1)) {
            winArray.push(npcName);
            console.log(npcName + " is not in the array");
        } else {
            if (winArray.length >= 11 ) {
                win();
            }
        }
        
     }

    // Win function: f the right score is reached then pause music, remove player from screen and call win function 
    function win () {   
        console.log("You win! Now how about offering us a job?");             
        style = { font: "65px Arial", fill: "#fff", align: "center" };
        game.add.text(game.camera.x+325, game.camera.y+150, "You Win!", style);
       
        explosion = game.add.sprite(player.body.x - 32, player.body.y - 32,  'explosion');
        explosion.animations.add('run_explode', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, true);
        explosion.animations.play('run_explode');
        // Removes the player from the screen
        player.kill(); 
        setTimeout(explodeKill, 1500);
        function explodeKill () {
            explosion.kill();
        }

    } 

    function killPlayer (player, enemy) {
        explosion = game.add.sprite(player.body.x - 32, player.body.y - 32,  'explosion');
        explosion.animations.add('run_explode', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, true);
        explosion.animations.play('run_explode');
        
        setTimeout(gameOverText, 1500);
        setTimeout(gameRestart, 3000);
        


        // Show text to say you died, then reload the game.
        function gameOverText () {
            style = { font: "65px Arial", fill: "#fff", align: "center" };
            var text = game.add.text(game.camera.x+450, game.camera.y+250, "You Lose! Try Again...", style);
            text.anchor.set(0.5);
        }
        // Removes the player from the screen
        player.kill();     
    }

    // This function gets called when restarting the game via the reset button after winning, or when you die and start over.
    function gameRestart () {
        location.reload();
    }


};