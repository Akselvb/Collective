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
        user={this.props.user}
        messages={this.props.messages}
      />
    );
  }
}

const mapStateToProps = ({ chat: { collectiveId, messages, user } }) => ({
  collectiveId,
  messages,
  user
});

export default connect(mapStateToProps, {
  fetchMessages
})(Messages);
