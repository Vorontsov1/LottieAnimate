import React from 'react';
import { View, Text } from 'react-native';
import  LottieView from 'lottie-react-native';

interface SplashProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>;
 }

const Splash = ({
    setIsLoading,
}: SplashProps): JSX.Element => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 0, }}>
          <LottieView source={ require('../assets/iniativeCompany.json') }
              autoPlay
              loop={ false }
              resizeMode="cover"
              onAnimationFinish={ () => setIsLoading(false) }
          />
    </View>
  );
}

export default Splash;
