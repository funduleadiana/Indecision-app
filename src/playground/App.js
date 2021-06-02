//var template = <p>This is JSX from app.js!</p>;
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleActions = this.handleActions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    componentDidMount(){
        try{
        // Lifecyicle methods for class components
        //fetching data
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
            this.setState(()=> ({options: options}))
            }
        }catch(e){

        }
    }
    componentDidUpdate(prevProps, prevState){
        //We have acces to prevProps and prevState as arguments
        //updating data
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDeleteOptions(){
        this.setState(()=>  ({ options: [] }));
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState)=> ({
            options: prevState.options.filter((option)=>( optionToRemove !== option))
        }));

    }
    handleActions(){
        const randomNum = Math.floor(Math.random()* this.state.options.length)
        const option = this.state.options[randomNum];
        alert(option)
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState)=> ({ 
            options: prevState.options.concat(option)}))

    }
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of your computer';
    
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0}
                handleActions={this.handleActions}
                />
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                
                handleDeleteOption={this.handleDeleteOption}
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
//Header.defaultProps={
 //   title: 'Indecision'
//};

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
const Options = (props) => {
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
          {
             props.options.map(option=> (
                <Option key={option} 
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
                />
                ))
          }
        </div>

    );
}

const Option = (props) => {
    return(
        <div>
        
        {props.optionText}
        <button onClick={(e)=>{props.handleDeleteOption(props.optionText)}}>Remove</button> 
        </div>
    )
}

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
        
        this.setState(()=>({ error }));
        if(!error){
            e.target.elements.option.value = '';
        }

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