import React from 'react';
import AddOptions from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    
    state = {
        options : [],
        selectedOption : undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const optionn = this.state.options[randomNumber];
        this.setState(() => ({
            selectedOption : optionn
        }));
    };

    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }  
        this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption : undefined}));
    }

    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options })) 
            }
        } catch (e){
            //Do nothing
        }
    }

    componentDidUpdate(prepProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        };
        
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div> 
                <Header subtitle = {subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions = {this.state.options.length>0} 
                        handlePick = {this.handlePick}
                    />
                    <div className= "widget">
                        <Options 
                            options = {this.state.options}  
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOptions 
                            options = {this.state.options} 
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        );
    };
};