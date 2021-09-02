import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import BackCarousel from '../../Components/BackCarousel';

import CustomStatusBar from '../../Components/CustomStatusBar';
import styles from '../../styles';
import HorizontalComponent from './HorizontalComponent';

const HomePage = props => {
  // -------------------------
  const images = [
    'https://w.wallhaven.cc/full/96/wallhaven-96q7y8.jpg',
    'https://w.wallhaven.cc/full/76/wallhaven-76moj9.jpg',
    'https://w.wallhaven.cc/full/j8/wallhaven-j8lyky.jpg',
    'https://w.wallhaven.cc/full/ym/wallhaven-ymgyxk.jpg',
    'https://w.wallhaven.cc/full/47/wallhaven-47l3q3.jpg',
    'https://w.wallhaven.cc/full/6k/wallhaven-6k22z6.jpg',
    'https://w.wallhaven.cc/full/p8/wallhaven-p83w1p.jpg',
  ];
  const Categories = [
    {
      img: require('../../assets/Bicycle.png'),
      nav: () => {},
      title: 'Аксессуары',
    },
    {
      img: require('../../assets/Cinema.png'),
      nav: () => {},
      title: `Кино и\nтеатры`,
    },
    {
      img: require('../../assets/Food.png'),
      nav: () => {},
      title: `Кафе и\nрестораны`,
    },
    {
      img: require('../../assets/Kids.png'),
      nav: () => {},
      title: 'Для детей',
    },
  ];

  const HorCompData = [
    'https://w.wallhaven.cc/full/p8/wallhaven-p83w1p.jpg',
    'https://w.wallhaven.cc/full/83/wallhaven-83rr62.jpg',
  ];
  // ----------------Stores----------------
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  const StoresData = [
    {
      img: 'https://e7.pngegg.com/pngimages/359/1024/png-clipart-firebase-cloud-messaging-computer-icons-google-cloud-messaging-android-angle-triangle-thumbnail.png',
      ratings: 4,
      ratingText: '4.5',
      name: 'Si Boutique',
      description: 'Одежда и обувь',
    },
    {
      img: 'https://image.flaticon.com/icons/png/512/732/732084.png',
      ratings: 5,
      ratingText: '4.8',
      name: 'Nike',
      description: 'Одежда и обувь',
    },
    {
      img: 'https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/apple.png',
      ratings: 5,
      ratingText: '4.7',
      name: 'Apple',
      description: 'Гаджеты и техника',
    },
    {
      img: 'https://e7.pngegg.com/pngimages/375/469/png-clipart-adidas-trefoil-adidas-text-photography-thumbnail.png',
      ratings: 5,
      ratingText: '4.6',
      name: 'Adidas',
      description: 'Одежда и обувь',
    },
  ];
  // ----------------End Stores----------------

  return (
    <SafeAreaView style={styles.fl1}>
      <CustomStatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ------------------ */}
        <View style={styles.HomeHeader}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <Image
              style={{width: 20, height: 22}}
              source={require('../../assets/BurgerIcon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image
              style={{width: 21, height: 21}}
              source={require('../../assets/SearchIcon.png')}
            />
          </TouchableOpacity>
        </View>
        {/* ------------------ */}
        <View style={styles.HomeHeaderBalance}>
          <View style={styles.fdRow}>
            <Image
              style={{width: 60, height: 60, marginRight: 13}}
              source={require('../../assets/defaultAva.png')}
            />
            <Text style={{fontSize: 16, fontFamily: 'Pro'}}>Акиева Айпери</Text>
          </View>
          <TouchableOpacity style={styles.HomeCoin}>
            <Text style={{fontSize: 12, fontFamily: 'Pro', color: 'white'}}>
              1520 сом
            </Text>
          </TouchableOpacity>
        </View>
        {/* ------------------ */}
        <BackCarousel images={images} />
        {/* ------------------ */}
        <View style={{marginVertical: 50}} />
        <View style={[styles.rowBetween, styles.HomecategoriesText]}>
          <Text style={{fontSize: 16, color: '#313131', fontFamily: 'Pro'}}>
            Категории
          </Text>
          <TouchableOpacity>
            <Text style={{fontSize: 12, color: '#8D8D8D', fontFamily: 'Pro'}}>
              Всё
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Categories.map((item, key) => (
            <TouchableOpacity
              activeOpacity={0.9}
              style={{
                marginLeft: 20,
                marginTop: 14,
                marginRight: Categories.length === key + 1 ? 20 : 0,
              }}
              key={key}
              onPress={item.nav}>
              <View style={styles.HomeCategoriesImage}>
                <Image style={{width: 31, height: 31}} source={item.img} />
              </View>
              <Text style={{textAlign: 'center', marginTop: 13, fontSize: 12}}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* ------------------ */}
        <HorizontalComponent
          title="Горящие кешбеки"
          icon={require('../../assets/SecondCashBack.png')}
          data={images}
          fullStars={5}
          rating="5.0"
          recall="193 отзыва"
          firstProcent="до"
          secondProcent="25%"
        />
        <HorizontalComponent
          title="Новинки"
          icon={require('../../assets/New.png')}
          data={images}
          fullStars={5}
          rating="5.0"
          recall="193 отзыва"
          firstProcent="14%"
          reverse={true}
          secondProcent="на всё"
        />
        {/* ------------------ */}
        {/* {SpeechRecognitionResult.map} */}
        <View
          style={[styles.rowBetween, {marginHorizontal: 20, marginTop: 22}]}>
          <Text style={{fontSize: 16, color: '#313131', fontFamily: 'Pro'}}>
            Магазины
          </Text>
          <TouchableOpacity>
            <Text style={{fontSize: 12, color: '#8D8D8D', fontFamily: 'Pro'}}>
              Всё
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {StoresData.map((item, key) => (
            <Card
              key={key}
              elevation={7}
              style={{
                width: 100,
                height: 111,
                marginLeft: 20,
                marginVertical: 14,
                alignItems: 'center',
                padding: 10,
                borderRadius: 10,
                marginRight: Categories.length === key + 1 ? 20 : 0,
              }}>
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={item.nav}>
                <Image
                  style={{width: 31, height: 31, marginBottom: 4}}
                  source={{uri: item.img}}
                />
                <View style={styles.fdRow}>
                  {maxRating.map((rating, key) => (
                    <View key={rating}>
                      <Image
                        style={{width: 10, height: 10}}
                        source={
                          rating <= item.ratings
                            ? require('../../assets/FullStar.png')
                            : require('../../assets/unFullStar.png')
                        }
                      />
                    </View>
                  ))}
                  <Text style={styles.HomeHorizontalRating}>
                    {item.ratingText}
                  </Text>
                </View>
                <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 11}}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 10}}>{item.description}</Text>
              </TouchableOpacity>
            </Card>
          ))}
        </ScrollView>
        {/* ------------------ */}
        <View style={{marginVertical: 50}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
