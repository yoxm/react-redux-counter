import React, { Component } from 'react';
import { List, TextareaItem, Button, WhiteSpace} from 'antd-mobile';
import { createForm } from 'rc-form';

export default class Counter extends Component{
    render(){
        const {counter, increment, decrement, incrementIfOdd, incrementAsync} = this.props;
        return(
            <p>
                Clicked:{counter} times
                {'  '}
                <Button onClick={increment}>+</Button>
                {'  '}
                <Button onClick={decrement}>-</Button>
                {'  '}
                <Button onClick={incrementIfOdd}>increment if Odd</Button>
                {'  '}
                <Button onClick={incrementAsync}>increment async</Button>
            </p>
        )
    }
}