
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.countReset = this.countReset.bind(this);
        this.state = {
              count : 0
            };
    };

    componentDidMount(){
        try {
            const json = localStorage.getItem('count');
            const count = parseInt(json, 10);
            if(!isNaN(count)){
                this.setState(() => ({ count })) 
            }
        } catch (e){
            //Do nothing
        }

       
    }

    componentDidUpdate(prepProps, prevState){
        if(prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
            console.log('saving data');
        };
        
    }

    addOne ()  {
        this.setState((prevState)=> {
            return {
                count : prevState.count +1
            };
        });
    };
     minusOne() {
        this.setState((prevState)=> {
            return {
                count : prevState.count -1
            };
        });
   };
   countReset() { 
        this.setState(()=> {
            return {
                count : 0
            };
        });
   };
     
    render () {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                 <button onClick={this.minusOne}>-1</button>
                <button onClick={this.countReset}>reset</button>
    </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));



/*
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={countReset}>reset</button>
    </div>
 )


 let count = 0;
 const addOne = () =>  {
     count++;
     renderCounterApp();
 };
 const minusOne = () => {
    count--;
    renderCounterApp();
};
const countReset = () => {
    count=0;
    renderCounterApp();
};
ReactDOM.render(templateTwo, appRoot);
*/