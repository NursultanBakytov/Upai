import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import styles from '../../styles';

const HorizontalComponent = ({
  icon,
  title,
  mtop,
  data,
  fullStars,
  rating,
  recall,
  firstProcent,
  secondProcent,
  reverse,
}) => {
  const [defaultRating, setdefaultRating] = useState(fullStars);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  const FullStar = (
    <Image
      style={{width: 10, height: 10}}
      source={require('../../assets/FullStar.png')}
    />
  );
  const unFullStar = (
    <Image
      style={{width: 10, height: 10}}
      source={require('../../assets/unFullStar.png')}
    />
  );
  return (
    <>
      {/* ---------------------------- */}
      <View style={[styles.HomeHorizontalComponent, {marginTop: mtop || 21}]}>
        <View style={styles.fdRow}>
          <Text style={{fontSize: 16, color: '#313131', fontFamily: 'Pro'}}>
            {title}
          </Text>
          <Image
            style={{width: 20, height: 19, marginLeft: 13}}
            source={icon}
          />
        </View>
        <TouchableOpacity>
          <Text style={{fontSize: 12, color: '#8D8D8D', fontFamily: 'Pro'}}>
            Всё
          </Text>
        </TouchableOpacity>
      </View>
      {/* ---------------------------- */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, key) => (
          <View key={key}>
            <View
              style={[
                styles.HomeHorizontalComponentShadow,
                {marginRight: data.length === key + 1 ? 20 : 0},
              ]}>
              <TouchableOpacity activeOpacity={0.9}>
                <Image
                  style={{
                    width: 200,
                    height: 85,
                    borderRadius: 10,
                    marginTop: -2,
                  }}
                  source={{uri: item}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.HomeHorizontalComponent,
                {marginRight: data.length === key + 1 ? 20 : 0},
              ]}>
              <View style={[styles.fdRow, {alignSelf: 'flex-start'}]}>
                {maxRating.map((item, key) => (
                  <View key={item}>
                    <Image
                      style={{width: 10, height: 10}}
                      source={
                        item <= defaultRating
                          ? require('../../assets/FullStar.png')
                          : require('../../assets/unFullStar.png')
                      }
                    />
                  </View>
                ))}
                <Text style={styles.HomeHorizontalRating}>{rating}</Text>
                <Text style={styles.HomeHorizontalRecall}>( {recall})</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={
                    reverse
                      ? styles.HomeHorizontalSecondProcent
                      : styles.HomeHorizontalFirstProcent
                  }>
                  {firstProcent}
                </Text>
                <Text
                  style={
                    reverse
                      ? [styles.HomeHorizontalFirstProcent, {marginTop: -5}]
                      : styles.HomeHorizontalSecondProcent
                  }>
                  {secondProcent}
                </Text>
              </View>
            </View>
            <Text
              style={{
                marginTop: -5,
                marginLeft: 20,
                fontSize: 12,
                color: '#313131',
                fontWeight: '500',
              }}>
              Walmart
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 10,
                color: '#8D8D8D',
              }}>
              Fast food
            </Text>
          </View>
        ))}
      </ScrollView>
      {/* ---------------------------- */}
      {/* ---------------------------- */}
    </>
  );
};
export default HorizontalComponent;
