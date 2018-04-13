import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions';

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
      <View>
        <Text>hei</Text>
      </View>
    );
  }

}


const mapStateToProps = ({ chat: { isFetching, height, collectiveId } }) => ({
  isFetching,
  height,
  collectiveId
});

export default connect(mapStateToProps, {
  fetchMessages
})(Messages);
