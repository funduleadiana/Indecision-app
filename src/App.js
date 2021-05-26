//var template = <p>This is JSX from app.js!</p>;
class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of your computer';
        const options = ['thing One', 'Thing Two', 'Thing three']
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption />
            </div>
        )
    }
}


class Header extends React.Component{
    render(){
        return( 
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }

}
class Action extends React.Component{
    render(){
        return(
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
              {
                 this.props.options.map(option=> <Option key={option} optionText={option}/>)
              }
            </div>

        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
            Option component here: 
            {this.props.optionText}
                
            </div>
        )
    }
}

class AddOption extends React.Component{
    render(){
        return(
            <div>
                <input type="text"></input>
                <button>Add your option</button>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('root'))