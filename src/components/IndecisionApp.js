import React from 'react';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';

export default class IndecisionApp extends React.Component{
    state = {
        options: []
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

    handleDeleteOptions = () => {
        this.setState(()=>  ({ options: [] }));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=> ({
            options: prevState.options.filter((option)=>( optionToRemove !== option))
        }));

    }
    handleActions = () => {
        const randomNum = Math.floor(Math.random()* this.state.options.length)
        const option = this.state.options[randomNum];
        alert(option)
    }
    handleAddOption = (option) => {
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
};