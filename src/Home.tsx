import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import LottieContainer, { LottieContainerProps } from './components/LottieContainer';
import Animated, { FadeIn } from 'react-native-reanimated';

const animations: LottieContainerProps[] = [
  {
    name: 'IniativeCompany',
    source: require('../src/assets/iniativeCompany.json'),
    author: 'Travis Gregory',
  },
  {
    name: 'Anim',
    source: require('../src/assets//anim.json'),
    author: 'Travis',
    path: '../src/assets/anim.json',
  },
  {
    name: 'Confetti',
    source: require('../src/assets/confetti.json'),
    author: 'Gregory',
    path: '../src/assets/confetti.json',
  },
  {
    name: 'Hearts',
    source: require('../src/assets/hearts.json'),
    author: 'Hearts',
    path: '../src/assets/hearts.json',
  },
  {
    name: 'Success',
    source: require('../src/assets/success.json'),
    author: 'Success',
    path: '../src/assets/success.json',
  },
  {
    name: 'WaveLoading',
    source: require('../src/assets/waveLoading.json'),
    author: 'WaveLoading',
    path: '../src/assets/waveLoading.json',
  },
];

const Home = (): JSX.Element => {
  return (
    <SafeAreaView style={{backgroundColor: '#F6AD76', flex: 1}}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        entering={FadeIn.duration(500)}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 30,
            color: 'white',
          }}>
          Welcome to the Lottie Viewer
        </Text>
        {animations.map((animation, index) => (
          <LottieContainer key={index} {...animation} />
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};



export default Home;
