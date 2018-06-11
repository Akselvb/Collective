import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image, Animated } from 'react-native';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      up: require('../../../img/arrow_up.png'),
      down: require('../../../img/arrow_down.png')
    };

    this.state = {
      title: props.title,
      expanded: true,
      animation: new Animated.Value()
    };
  }

  setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height
    });
  }

  toggle() {
    const initialValue = this.state.expanded ?
      this.state.maxHeight + this.state.minHeight : this.state.minHeight;

    const finalValue = this.state.expanded ?
      this.state.minHeight : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded
    });

    this.state.animation.setValue(initialValue);

    Animated.spring(
      this.state.animation,
      {
        toValue: finalValue
      }
    ).start();
  }

  render() {
    const {
      containerStyle,
      titleContainerStyle,
      titleStyle,
      buttonStyle,
      bodyStyle,
      buttonImageStyle
    } = styles;

    let icon = this.icons.down;

    if (this.state.expanded) {
      icon = this.icons.up;
    }

    return (
      <Animated.View style={[styles.container, { height: this.state.animation }]}>
        <View style={containerStyle}>
          <View style={titleContainerStyle} onLayout={this.setMinHeight.bind(this)}>
            <Text style={titleStyle}>{this.state.title}</Text>
            <TouchableHighlight
              style={buttonStyle}
              onPress={this.toggle.bind(this)}
              underlayColor="#f1f1f1"
            >
              <Image
                style={buttonImageStyle}
                source={icon}
              />
            </TouchableHighlight>
          </View>

          <View style={bodyStyle} onLayout={this.setMaxHeight.bind(this)}>
            {this.props.children}
          </View>
        </View>
      </Animated.View>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#fefefe',
    margin: 10,
    overflow: 'hidden'
  },
  titleContainerStyle: {
    flexDirection: 'row'
  },
  titleStyle: {
    flex: 1,
    padding: 10,
    color: '#2a2f43',
    fontWeight: 'bold'
  },
  bodyStyle: {
    padding: 10,
    paddingTop: 0
  },
  buttonImageStyle: {
    width: 30,
    height: 25
  },
};


export default Panel;
