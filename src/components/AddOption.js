import React from 'react';

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

export default AddOption;
