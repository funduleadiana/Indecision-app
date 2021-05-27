const root = document.getElementById('root')


let visibility = false;

const toggleDetails = () => {
    visibility = !visibility;
    render();
}


const render = () => {
    const visibilityToggle = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {
                visibility && (
                    <div>
                        <p>These are some details ...click to hide</p>
                    </div>
                )
            }
            
        </div>
        
    )
    ReactDOM.render(visibilityToggle, root)
}

render();