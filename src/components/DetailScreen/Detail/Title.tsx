import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";

interface Props {
  name: string;
}

const DetailTitle = ({ name }: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 12 }}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <Icons name="md-share" size={20} color="#2c2c2c" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 45,
    padding: 10,
  },
});

export default DetailTitle;
