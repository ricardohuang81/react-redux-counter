import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';
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
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 4 }),
        onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 8 }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElementId: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);