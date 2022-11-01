class Build extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
           return {
            visibility : !prevState.visibility
           }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Here are the details you need</p>
                    </div>
        )}
            </div>
        )
    }

}

ReactDOM.render(<Build/>, document.getElementById('app'))

