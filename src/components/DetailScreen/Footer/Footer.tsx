import React from "react";
import { StyleSheet, View, Text } from "react-native";

const DetailFooter = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: "white", fontSize: 15 }}>평균 1일 이내 제작</Text>
        <Text style={{ color: "white", fontSize: 30 }}>10크림 캐시</Text>
      </View>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            backgroundColor: "#460883",
            padding: 10,
            justifyContent: "center",
          }}
        >
          지금 요청하기
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#660BB9",
    flexDirection: "row",
    padding: 10,
  },
});

export default DetailFooter;
