import React, {Component, createRef} from 'react';
import {Image, ScrollView, View, StyleSheet, Dimensions} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

export default class BackCarousel extends Component {
  scrollRef = createRef();
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      customWidth: Dimensions.get('window').width,
    };
  }
  componentDidMount() {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        this.setState({customWidth: width});
        this.setState({customWidth: width});
      } else {
        this.setState({customWidth: width});
      }
      this.setState({customWidth: width});
    });
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
            x: this.state.customWidth * this.state.selectedIndex,
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
    const {customWidth} = this.state;

    return (
      <View style={{width: '100%', height: 180}}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}>
          {images.map((image, i) => (
            <Shadow
              key={image}
              paintInside={true}
              offset={[3, 4]}
              containerViewStyle={[
                styles.backImage,
                {width: customWidth - 40},
              ]}>
              <Image
                source={{uri: image}}
                style={[
                  styles.backImage,
                  {width: customWidth - 40, marginHorizontal: 0},
                ]}
              />
            </Shadow>
          ))}
        </ScrollView>
        <View style={styles.circle}>
          {images.map((item, i) => (
            <View
              key={item}
              style={[
                styles.indicator,
                {
                  backgroundColor: i === selectedIndex ? '#FF6B00' : '#C4C4C4',
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backImage: {
    width: Dimensions.get('window').width - 40,
    alignSelf: 'center',
    alignItems: 'center',
    height: 150,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  circle: {
    position: 'absolute',
    top: 170,
    height: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  indicator: {
    marginVertical: 8,
    height: 1,
    width: 12.11,
    margin: 5,
  },
});
