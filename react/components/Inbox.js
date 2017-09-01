import React from 'react';
import Message from './Message';
import store from '../redux/store';

export default class extends React.Component {

    constructor() {
        super();
        this.state= {messages: []}
    }

    render() {
        const messages = this.state.messages.map((val,idx) => {
            return (
                <Message fullMessage={val} />
            )
        })


        return (
            <div>
                <h1>Inbox</h1>
                {messages}
            </div>
        );
    }

}