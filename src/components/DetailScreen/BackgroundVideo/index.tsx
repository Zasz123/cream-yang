import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Video } from "expo-av";

interface Props {
  src: string;
  onHeader: boolean;
}

const BackVideo = ({ src, onHeader }: Props) => {
  const [mute, setMute] = useState(false);
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: src,
        }}
        rate={1.0}
        volume={1.0}
        isMuted={mute}
        resizeMode="contain"
        isLooping
        shouldPlay={!onHeader}
        style={styles.viedo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viedo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "flex-start",
    alignContent: "center",
  },
});

export default BackVideo;
