class Indecision extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: []
        }
    }
    UNSAFE_componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {

        }
    }
    UNSAFE_componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            console.log('saving data');
            localStorage.setItem('options', json);
        }

    }
    UNSAFE_componentWillUnMount() {
        console.log('componentWillMount');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter Valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This options Already exists'
        }
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //     };
        // });

        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your live in the hands of a computer.';
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
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
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What Should I do ?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an options to get started!</p>}
            {props.options.map((option) => (
                <Option
                    key={option}
                    OptionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            Options: {props.OptionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.OptionText);
                }}
            >
                Remove
            </button>
        </div>
    );
}
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.options.value.trim()
        const error = this.props.handleAddOption(option);
        // this.setState(() => {
        //     return { error };
        // })
        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.options.value = ''

        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form
                    onSubmit={this.handleAddOption}
                >
                    <input type="text" placeholder="in here put your text" name="options" />
                    <button>Add</button>
                </form>
            </div>
        );
    };
}
ReactDOM.render(<Indecision />, document.getElementById('app'));