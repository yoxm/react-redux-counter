import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as ActionCreators from '../actions/index'
import { connect } from 'react-redux'
import Counter from '../components/Counter/index'

class CounterContainer extends Component {
    render() {
        const { count, increment, decrement, incrementIfOdd, incrementAsync } = this.props;
        return (
            <Counter
                count={count}
                increment={increment}
                decrement={decrement}
                incrementIfOdd={incrementIfOdd}
                incrementAsync={incrementAsync} />
        )
    }
}

CounterContainer.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(
    mapStateToProps,
    ActionCreators
)(CounterContainer);