import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as ActionCreators from '../actions/index'
import { connect } from 'react-redux'
import Counter from '../components/Counter/Counter'

class CounterContainer extends Component {
    render() {
        const { counter, increment, decrement, incrementIfOdd, incrementAsync } = this.props;
        return (
            <Counter
                counter={counter}
                increment={increment}
                decrement={decrement}
                incrementIfOdd={incrementIfOdd}
                incrementAsync={incrementAsync} />
        )
    }
}

CounterContainer.propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}


export default connect(
    mapStateToProps, ActionCreators
)(CounterContainer)