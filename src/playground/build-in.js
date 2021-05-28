const root = document.getElementById('root')


class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state={
            visibility: false
        }
    }
    toggleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility? 'Hide Details' : 'Show Details'}</button>
                <div>{this.state.visibility? 'These are some details press button to hide': ''}</div>
            
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle/>, root)


// we can also use the former expression:
// {this.state.visibility && (<div><p>These are some detials</p></div>s)}









// let visibility = false;

// const toggleDetails = () => {
//     visibility = !visibility;
//     render();
// }


// const render = () => {
//     const visibilityToggle = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleDetails}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {
//                 visibility && (
//                     <div>
//                         <p>These are some details ...click to hide</p>
//                     </div>
//                 )
//             }
            
//         </div>
        
//     )
//     ReactDOM.render(visibilityToggle, root)
// }

// render();