import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions';
import MessageList from './MessageList';

let isCalled = false;

class Messages extends Component {

  /*
    Life cycle method. Called every time a new prop is fetched.
    Can only fetch messages when collectiveId is retrieved.
    We only want to call fetchMessages once.
  */
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.collectiveId && !isCalled) {
      isCalled = true;
      nextProps.fetchMessages(nextProps.collectiveId);
    }
  }

  render() {
    return (
      <MessageList
        messages={this.props.messages}
        style={{ minHeight: 50 }}
      />
    );
  }
}

const mapStateToProps = ({ chat: { collectiveId, messages } }) => ({
  collectiveId,
  messages
});

export default connect(mapStateToProps, {
  fetchMessages
})(Messages);
