'use strict';

//var template = <p>This is JSX from app.js!</p>;
var root = document.getElementById('root');

var objectApp = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of your computer'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        objectApp.title
    ),
    React.createElement(
        'p',
        null,
        objectApp.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var userName = 'Mikaela';
var userAge = 28;
var userLocation = 'london';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        userAge
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        userLocation.toUpperCase()
    )
);

ReactDOM.render(template, root);
