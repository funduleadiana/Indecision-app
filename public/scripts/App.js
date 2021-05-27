'use strict';

var root = document.getElementById('root');

var visibility = false;

var toggleDetails = function toggleDetails() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var visibilityToggle = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleDetails },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'These are some details ...click to hide'
            )
        )
    );
    ReactDOM.render(visibilityToggle, root);
};

render();
