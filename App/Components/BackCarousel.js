import React, {Component, createRef} from 'react';
import {Image, ScrollView, View, StyleSheet} from 'react-native';

import {CustomWidth} from './TopComponents';

export default class BackCarousel extends Component {
  scrollRef = createRef();
  constructor(props) {
    super(props);
    this.state = {selectedIndex: 0};
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex === this.props.images.length - 1
              ? 0
              : prev.selectedIndex + 1,
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            y: 0,
            x: CustomWidth * this.state.selectedIndex,
          });
        },
      );
    }, 2000);
  }

  setSelectedIndex = e => {
    // width of the viewSize
    const viewSize = e.nativeEvent.layoutMeasurement.width;
    // get current postition of the scrollview
    const contentOffset = e.nativeEvent.contentOffset.x;

    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({selectedIndex});
  };
  render() {
    const {images} = this.props;
    const {selectedIndex} = this.state;
    return (
      <View style={{width: '100%', height: '100%'}}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}>
          {images.map(image => (
            <Image key={image} source={{uri: image}} style={styles.backImage} />
          ))}
        </ScrollView>
        <View style={styles.circle}>
          {images.map((item, i) => (
            <View
              key={item}
              style={[
                styles.indicator,
                {opacity: i === selectedIndex ? 0.5 : 1},
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backImage: {width: CustomWidth, height: '100%'},
  circle: {
    position: 'absolute',
    top: 160,
    height: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  indicator: {
    width: 12.11,
    height: 1,
    width: 12.11,
    margin: 5,
    backgroundColor: 'red',
  },
});
