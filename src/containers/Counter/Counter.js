import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';
import './Counter.css';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.kounter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 4" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 8" clicked={this.props.onSubtractCounter} />
                <hr />
                <button className="storeButton" onClick={() => this.props.onStoreResult(this.props.kounter)}>Store Result</button>
                <ul className="storedList">
                    {this.props.storedResults.map(storedResult => (
                        <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        kounter: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(4)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(8)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);