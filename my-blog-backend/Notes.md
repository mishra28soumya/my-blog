1. npx create-react-app my-blog
2. cd my-blog
3. npm install tailwindcss -D
4. npm install postcss-cli -D
5. npm install autoprefixer npm-run-all postcss
6. Create a styles folder inside src and move index.css there

6. add this script in package.json for css debugging  - "build:css":"postcss src/styles/index.css  -o src/style/tailwind.css", "watch:css":"postcss src/styles/index.css -o src/style/tailwind.css --watch","react-script:start": "timeout 5 && react-script",
7. Update the start and build command to these -  "start": "run-p watch:css react-scripts start",
    "build": "run-s build:css react-scripts build",

8. replace the content of src/styles/index.css with these 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

9. in src, create a file postcss.config.js and add this - 
module.exports = {
    plugins: [require("tailwindcss"), require("autoprefixer")]
}

10. run this command - npx tailwindcss-cli@latest init

11. run npm start and tailwind.css will automatically be created

12. go to App,js and add following code
    <div className="container bg-blue-500 text-center p-5">
      A
    </div>

13. run following command
npm install postcss -D 
npm install autoprefixer -D

14. add this in tailwind.config.js
content: ["./src/**/*.{html,js}"], and remove purge:[]

15. create /pages/Home.js inside src and paste the code in Home.js

16. update the div style of App.js div

17. Run following command
npm install --save react-router
npm install --save react-router-dom


18. Update app.js with 
import { BrowserRouter, Route, Routes } from "react-router-dom";


19. Create About, Article, ArtcilesList.js in /pages


20. Create navBar and add it to App.js

21. crate url parameter used for dynamic routing-> do 'useParam' changes in Article.js

22. create pages/article-content and add the dummy data

23. import artcile-content in article.js and bind the values 

24. create components/Artciles.js

25. Use articles in articlelist

26. Create and integrate not found page

27. Add other articles in Article.js

28. create a folder my-blog-backend and run npm init, npm install --save express, npm install --save nodemon, npm install --save body-parser

29. create src folder and src/index.js

30. create a start script

31. create basic server in index.js

32. import body parser and initialize it

33. create artcilesInfo in index.js and add each article and their comment

34. add endpoint to add comment

35. add comments in article-content.js

36. npm install --save mongodb

37. instead of having a local comments obbject, ftech it from db

38. Use MongoCLient to connect to db

39. Update article/name endpoint

40. update artcile/name/add-comments endpoint
