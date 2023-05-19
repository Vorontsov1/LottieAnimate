import React, {useState, Fragment} from 'react';
import {View, Text, StyleSheet, Button, Linking} from 'react-native';
import LottieView from 'lottie-react-native';

export interface LottieContainerProps {
  name: string;
  source: string;
  author: string;
}

const LottieContainer = ({name, source, author}): JSX.Element => {
  const [show, setShow] = useState<boolean>(true);
  return (
    <Fragment>
      <View style={styles.container}>
        {show && (
                  <LottieView
            source={source} // pass source directly to LottieView
            autoPlay
            loop={false}
            onAnimationFinish={() => setTimeout(() => setShow(false), 1000)}
            resizeMode="contain"
          />
        )}
      </View>
      <Button
        title={`Play ${name} by ${author}`}
        onPress={() =>  setShow(true)}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 3 / 4,
    alignSelf: 'center',
  },
});
export default LottieContainer;
