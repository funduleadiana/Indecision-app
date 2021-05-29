//var template = <p>This is JSX from app.js!</p>;
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleActions = this.handleActions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }
    handleDeleteOptions(){
        this.setState(()=>  ({ options: [] }));
    }
    handleActions(){
        const randomNum = Math.floor(Math.random()* this.state.options.length)
        const option = this.state.options[randomNum];
        alert(option)
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState)=> ({ options: prevState.options.concat(option)}))

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
                <AddOption
                handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props)=>{
    return( 
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}


// class Header extends React.Component{
//     render(){
//         return( 
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }

// }

const Action = (props) => {
    return(
        <div>
            <button 
            onClick={props.handleActions}
            disabled={!props.hasOptions}>
            What should I do?
            </button>
        </div>
    )
}
// class Action extends React.Component{

//     render(){
//         return(
//             <div>
//                 <button 
//                 onClick={this.props.handleActions}
//                 disabled={!this.props.hasOptions}>
//                 What should I do?</button>
//             </div>
//         )
//     }
// }
//Components such as Options cannot change its own props // but new prop values can be passed down from the parent and that can trigger a re-render from the child
//PROPS ARE READ-ONLY

const Options = (props) => {
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
          {
             props.options.map(option=> <Option key={option} optionText={option}/>)
          }
        </div>

    );
}
// class Options extends React.Component{
    
//     render(){
//         return(
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//               {
//                  this.props.options.map(option=> <Option key={option} optionText={option}/>)
//               }
//             </div>

//         );
//     }
// }


const Option = (props) => {
    return(
        <div>
        
        {props.optionText}
            
        </div>
    )
}
// class Option extends React.Component{
//     render(){
//         return(
//             <div>
            
//             {this.props.optionText}
                
//             </div>
//         )
//     }
// }

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state={
            error: undefined
        }
    }
    handleAddOption(e){
        //Because of the behaviour below we need to keep this function in the child and not the parent
        e.preventDefault();
        
        const optionToAdd = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(optionToAdd)
        
        //Implicitly returning an option - removing the return key
        this.setState(()=>({ error }))

    }
    render(){
        
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                
                    <input type="text" name="option"/> 
                    <button>Add your option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('root'))