import React from 'react';
import {
    ListView, Text, Row,
    View, Subtitle, Caption
} from '@shoutem/ui';
import moment from 'moment';

const Message = ({ msg }) => (
  <Row>
    <View styleName="vertical">
      <View styleName="horizontal space-between">
          <Subtitle>{msg.author}</Subtitle>
          <Caption>{moment(msg.time).from(Date.now())}</Caption>
        </View>
      <Text styleName="multiline">{msg.text}</Text>
    </View>
  </Row>
);


const MessageList = ({ messages }) => (
    <ListView
      data={messages}
      autoHideHeader
      renderRow={msg => <Message msg={msg} />}
    />
);

export default MessageList;
