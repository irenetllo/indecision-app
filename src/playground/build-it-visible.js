


class VisibilityToggle extends React.Component {

    constructor (props){
        super(props);
        this.showHide = this.showHide.bind(this);
        this.state ={
            title : 'Visibility Toggle',
            subtitle : 'Here something to show',
            sh : true
        };
    };

    showHide()  {
        this.setState((prevState) => {
            return {
                sh : !prevState.sh
            };
        });
    };

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button  onClick={this.showHide}>{this.state.sh ? 'Show details' : 'Hide details' }</button>
                <p>{this.state.sh ? undefined : this.state.subtitle}</p>
            </div>
            );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


/*
const appRoot = document.getElementById('app');

const app = {
    title : 'Visibility Toggle',
    subtitle : 'Here something to show'
};
let sh= true;
const showHide = () => {
    sh=!sh;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button  onClick={showHide}>{sh ? 'Show details' : 'Hide details' }</button>
            <p>{sh ? undefined : app.subtitle}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();
*/

