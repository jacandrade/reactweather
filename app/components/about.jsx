var React = require('react');


var About = (props) => {
    return (
        <div>
             <h1 className="text-centered">About</h1>
             <p>This is a simple example weather app built on React with Node.js, styled with foundation.</p>
             <p>Some of the tools used:</p>
             <ul>
                 <li>
                    <a href="https://facebook.github.io/react">React</a> - The main JavaScript framework used to build the App
                 </li>
                 <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - Open API that provides weather information. For this app, the search is limitted by name.
                 </li>
                 <li>
                    <a href="https://nodejs.org/">Node.js</a> - Programming Language.
                 </li>
                 <li>
                    <a href="http://expressjs.com/">Express.js</a> -  Web Server framework for Node.js.
                 </li>
                 <li>
                    <a href="http://foundation.zurb.com/">Foundation</a> -  Front End CSS framework.
                 </li>
                 <li>
                    <a href="https://github.com/">GitHub</a> - This project is hosted and can be <a href="https://github.com/jacandrade/reactweather">accessed</a> through GitHub.
                 </li>
                 <li>
                    <a href="https://www.heroku.com/">Heroku</a> - Hosted by Heroku.
                 </li>
             </ul>
        </div>
    );
};

module.exports = About;