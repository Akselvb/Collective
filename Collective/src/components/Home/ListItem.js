import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../common';
import * as actions from '../../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderTitle() {
    const { expanded } = this.props;
    const { titleStyle } = styles;
    const { title } = this.props.library;
    let backgroundColor = '';
    if (expanded) {
      backgroundColor = '#c0edf1';
    } else {
      backgroundColor = '#eaeaea';
    }
    return (
      <CardSection
        style={{
          borderColor: 'lightgray',
          borderWidth: 0.4,
          backgroundColor }}
      >
        <Text style={titleStyle}>
          {title}
        </Text>
      </CardSection>
    );
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection style={{ backgroundColor: '#fff' }}>
          <Text style={styles.descriptionStyle}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { id } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          {this.renderTitle()}
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 14,
    paddingLeft: 10,
    fontWeight: '500'
  },
  descriptionStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1
  },
  headerBarStyle: {

  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
