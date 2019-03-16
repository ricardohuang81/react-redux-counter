import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch(action) {
            case 'inc':
                this.setState(prevState => { return { counter: prevState.counter + 1 }});
                break;
            case 'dec':
                this.setState(prevState => { return { counter: prevState.counter - 1 }});
                break;
            case 'add':
                this.setState(prevState => { return { counter : prevState.counter + value }});
                break;
            case 'sub':
                this.setState(prevState => { return { counter: prevState.counter - value }});
                break;
            default:
                return "blah";
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.kounter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 4" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 8" clicked={this.props.onSubtractCounter} />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        kounter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT'}),
        onAddCounter: () => dispatch({ type: 'ADD', val: 4 }),
        onSubtractCounter: () => dispatch({ type: 'SUBTRACT', val: 8 }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);