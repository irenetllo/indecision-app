
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : []
        };
    }

    componentDidMount(){
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

    componentDidUpdate(prepProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        };
        
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const options = this.state.options[randomNumber];
        alert(options);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }  
        this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle = {subtitle}/>
                <Action 
                    hasOptions = {this.state.options.length>0} 
                    handlePick = {this.handlePick}
                />
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
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title : 'Indecision'
};

const Action = (props) => {
    return(
        <div>
            <button onClick={props.handlePick}
            disabled ={!props.hasOptions}>
            What should I do?
            </button>
        </div>
    )
}

const Options = (props) => {
     return(
         <div>
            <button onClick={props.handleDeleteOptions}>Remove options</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            <ol>
                {props.options.map (( opt =>
                                        <Option 
                                            key= {opt} 
                                            opt = {opt} 
                                            handleDeleteOption = {props.handleDeleteOption}
                                        />))}
            </ol>
        </div>
    )
} 

const Option = (props) => {
    return( 
        <li key={props.opt}> 
        {props.opt}
        <button 
            onClick = {(e) =>{
                props.handleDeleteOption(props.opt)
            }}
        >
        
        Remove</button>
        </li>
        
    )
}


class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if(!error){
            e.target.elements.option.value = '';
        }
    }

    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button >Add option</button> 
            </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

/*
const User = (props) => {
    return (
        <div>
            <p>Name : {props.name}</p>
            <p>Age : </p>
        </div>
    )
}
*/



/*class Action extends React.Component{

    render(){ 
        return(
            <div>
                <button onClick={this.props.handlePick}
                disabled ={!this.props.hasOptions}>
                What should I do?
                </button>
            </div>
        )
    }
}*/