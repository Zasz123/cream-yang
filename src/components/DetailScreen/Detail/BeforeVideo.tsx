import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Video } from "expo-av";

interface Props {
  beforeVideo: Array<string>;
}

const DetailVideo = ({ beforeVideo }: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text style={styles.text}>이전 영상 보기 </Text>
        <Text style={styles.countText}>{beforeVideo.length}</Text>
      </View>
      <View style={styles.video}>
        <Video
          source={{
            uri: beforeVideo[0],
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay
          isLooping
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
  countText: {
    justifyContent: "center",
    fontSize: 20,
    color: "#FC4B4B",
  },
  video: {
    flex: 1,
    height: 350,
  },
});

export default DetailVideo;
