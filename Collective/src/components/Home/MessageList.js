import React from 'react';
import {
    ListView, Text, Row,
    View, Subtitle, Caption,
    Divider
} from '@shoutem/ui';
import { connect } from 'react-redux';
import moment from 'moment';

let currentUser = null;

const Message = ({ msg }) => {
  let backgroundColor = '';
  if (msg.author === currentUser.email) {
    backgroundColor = '#CCFFCC';
  } else {
    backgroundColor = '#F0F0F0';
  }
  return (
    <Row>
      <View styleName="vertical" backgroundColor={backgroundColor} borderRadius={20} >
        <View styleName="horizontal space-between">
            <Subtitle style={{ paddingLeft: 10 }}>{msg.author}</Subtitle>
            <Caption style={{ paddingRight: 10 }}>{moment(msg.time).from(Date.now())}</Caption>
          </View>
        <Text styleName="multiline" style={{ paddingLeft: 10, paddingRight: 10 }}>{msg.text}</Text>
        <Divider styleName="line" />
      </View>
    </Row>
  );
};


const MessageList = ({ user, messages }) => {
  currentUser = user;
  return (
    <ListView
      data={messages}
      autoHideHeader
      renderRow={msg => <Message msg={msg} />}
    />
  );
};

const mapStateToProps = ({ chat: { user } }) => ({ user });

export default connect(mapStateToProps, null)(MessageList);
