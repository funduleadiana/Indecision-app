class Counter extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleResetCount = this.handleResetCount.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
        if(!isNaN(count)){
            this.setState(()=>({count: count}))
        }

    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count)
        }

    }
    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            };
        })

    }
    handleMinusOne(){
        this.setState((prevState)=> {
            return { 
                count: prevState.count - 1
            }
        })

    }
    handleResetCount(){
        // works the same as :
        // this.setState({count: 0}) - but this is not recommended
        //this.setState is async function
        this.setState(()=>{
            return{
                count: 0
            }
        })
        // will continue to increment due to asyncronous behavior:
        /*
            //this.setState({count: 0});
            //this.setState({count: this.state.count +1})
            ---The above will continue to increment instead of setting it to the value of 1 when called this is due to the func being async

            ///----------The below will reset count to 1, no matter the current value---------
            //this.setState(()=>{
                return{
                    count: 0
                }
            });
            //this.setState((prevState)=> {
                return{
                    count: prevState.count +1
                }
            })
        */
    }
    render(){
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleResetCount}>Reset counter</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     count: 0
// }
ReactDOM.render(<Counter />, document.getElementById('root'));