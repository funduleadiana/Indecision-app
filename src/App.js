//var template = <p>This is JSX from app.js!</p>;
const root = document.getElementById('root');

const objectApp = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of your computer'
}
const template = (
    <div>
        <h1>{objectApp.title}</h1>
        <p>{objectApp.subtitle}</p>
        <ol>
        <li>Item one</li>
        <li>Item two</li>
        </ol>
    </div>
);

const userName = 'Mikaela';
const userAge = 28;
const userLocation = 'london';
const templateTwo = (
    <div>
        <h1>{userName}</h1>
        <p>Age: {userAge}</p>
        <p>Location: {userLocation.toUpperCase()}</p>
    </div>
);


ReactDOM.render(template, root);