console.log('App.js is running');


const app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of a computer',
    options: ['One', 'Two', 'Three']
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;//valor recogido en el form
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
        console.log('option ', option);
    }
    
};

const OnRemoveAll = () => {
    app.options= [];
    render();
};

//JSX - JavaScript XML

const appRoot = document.getElementById('app');
//ReactDOM.render(template, appRoot);

function getOptions(options){
    if(options.length > 0){
        return (<ol>{options.map(opt => <li key={opt}>{opt}</li>)}</ol>);
    }
    return <p>No options</p>;
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert (option);
    console.log(randomNumber);  
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0 } onClick={onMakeDecision}>What I should do?</button>
            <button onClick={OnRemoveAll}>Delete options</button>
            {getOptions(app.options)}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add options</button>
            </form>
            
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();

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

/*
function getOptions(options){
    if(options.length > 0){
        return (<p>Here are your options</p>&&<ol>{options.map(opt => { return <li id={'opt_'+{opt}}>{opt}</li>})}                                              </ol>)
    }
    return <p>No options</p>;
}

//JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {getOptions(app.options)}
    </div>
);
*/




/*

const user = {
    name : 'Irene',
    age : 27,
    location : 'London' 
};
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
*/