let visibility = false;

const showMessage = () => {
    visibility = !visibility;
    render()
}

const appRoot = document.getElementById('app')

const render = () => { 
    const template = (
        <div>
             <h1>Visibility Toggle</h1>
             <button onClick={showMessage}>
             {visibility ? 'Hide details' : 'Show details'}
             </button> 
             {visibility && (
                <div>
                    <p>Here are the details you can see</p>
                </div>
             )}
        </div>
    )
    ReactDOM.render(template, appRoot);
}

render();