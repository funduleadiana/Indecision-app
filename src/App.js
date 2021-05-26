//var template = <p>This is JSX from app.js!</p>;
class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of your computer';
        const options = ['Thing One', 'Thing Two', 'Thing five']
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
    handlePick(){
        alert('Random choice is being made')
    }
    render(){
        return(
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{
    handleRemoveAll(){
        alert('Removing all options')
    }
    render(){
        return(
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
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