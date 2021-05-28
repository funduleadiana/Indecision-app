//var template = <p>This is JSX from app.js!</p>;
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleActions = this.handleActions.bind(this);
        this.state = {
            options: ['Thing One', 'Thing Two', 'Thing five']
        };
    }
    handleDeleteOptions(){
        this.setState(()=> {
            return{
                options: []
            }
        })
    }
    handleActions(){
        const randomNum = Math.floor(Math.random()* this.state.options.length)
        const option = this.state.options[randomNum];
        alert(option)
    }
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of your computer';
    
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length>0}
                handleActions={this.handleActions}
                />
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        );
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
                <button 
                onClick={this.props.handleActions}
                disabled={!this.props.hasOptions}>
                What should I do?</button>
            </div>
        )
    }
}
//Components such as Options cannot change its own props // but new prop values can be passed down from the parent and that can trigger a re-render from the child
//PROPS ARE READ-ONLY
class Options extends React.Component{
    
    render(){
        return(
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
    handleAddOption(e){
        e.preventDefault();
        console.log(e.target)
        const optionToAdd = e.target.elements.option.value.trim();

        if(optionToAdd){
            alert(optionToAdd)
        }

    }
    render(){
        
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                
                    <input type="text" name="option"></input>
                    <button>Add your option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('root'))