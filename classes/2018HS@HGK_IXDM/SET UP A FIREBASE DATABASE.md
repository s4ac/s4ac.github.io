# SET UP A FIREBASE DATABASE

1. head to [firebase](https://firebase.google.com/), and log in with your google account. [Do a fake one if you don't want to share personal info]

2. on the top right corner click __GO TO CONSOLE__

3. click add project and fill the form, accept all the terms, and click __CREATE PROJECT__

4. after the project is started click on the icon `</>` to add it to a web app

5. add the code snippets to your project, one should go to your `index.html` file the other should be used in your `sketch.js` inside the `function setup()`

   __index.html__

   ```html
   <!DOCTYPE html>
   <html lang="">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>🖥 ➡️ ☁️</title>
       <link rel="stylesheet" href="style.css">
     	<!-- below the link to the firebase library -->
       <script src="https://www.gstatic.com/firebasejs/5.5.5/firebase.js"></script>
       <script src="js/libraries/p5.min.js"></script>
       <script src="js/libraries/p5.dom.min.js"></script>
       <script src="js/sketch.js"></script>
     </head>
     <body>
     </body>
   </html>
   ```



   __sketch.js__

   ```javascript
   function setup() {
       // Initialize Firebase
       const config = {
         apiKey: "EvErYApIK3yI5D1fF3rEnT",
         authDomain: "data-collection-1e205.firebaseapp.com",
         databaseURL: "https://data-collection-1e205.firebaseio.com",
         projectId: "data-collection-1e205",
         storageBucket: "data-collection-1e205.appspot.com",
         messagingSenderId: "795184964248"
       };
       firebase.initializeApp(config);
   }
   ```


6. on the left side under develop click database => create database and set it to public. __IMPORTANT__ you are now doing a database that everyone with the credentials can access rewrite, delete, insert malicious code, therefore be careful when sharing it.