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
          <Subtitle>{moment(msg.time).from(Date.now())}</Subtitle>
          <Caption>{moment(msg.time).from(Date.now())}</Caption>
        </View>
      <Text styleName="multiline">{moment(msg.time).from(Date.now())}</Text>
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
