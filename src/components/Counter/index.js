import React, { Component } from 'react';
import { List, TextareaItem, Button, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import './counter.css'

export default class Counter extends Component {
    render() {
        const { count, increment, decrement, incrementIfOdd, incrementAsync } = this.props;
        return (
            <div>
                <h1 className={'count'}>Clicked:{count} times</h1>
                <WhiteSpace />
                <Button onClick={increment}>+</Button>
                <WhiteSpace />
                <Button onClick={decrement}>-</Button>
                <WhiteSpace />
                <Button onClick={incrementIfOdd}>如果是奇数就增加</Button>
                <WhiteSpace />
                <Button onClick={incrementAsync}>异步增加</Button>
            </div>
        )
    }
}