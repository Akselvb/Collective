import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions';
import MessageList from './MessageList';

let isCalled = false;

class Messages extends Component {
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
        style={{ minHeight: 100 }}
      />

    );
  }

}


const mapStateToProps = ({ chat: { isFetching, height, collectiveId, messages } }) => ({
  isFetching,
  height,
  collectiveId,
  messages
});

export default connect(mapStateToProps, {
  fetchMessages
})(Messages);
