import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface Props {
  info: string;
}

const DetailInfo = ({ info }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>소개</Text>
      <Text>{info}</Text>
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
});

export default DetailInfo;
