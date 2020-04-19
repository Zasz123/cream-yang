import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface Props {
  tag: Array<string>;
}

const TagList = ({ tag }: Props) => {
  return (
    <>
      <View style={styles.container}>
        {tag.map((item: any) => (
          <Text key={item.id} style={styles.tagItem}>
            {item}
          </Text>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tagItem: {
    color: "white",
    backgroundColor: "#2c2c2c",
    margin: 5,
    padding: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    textAlign: "center",
    flexWrap: "wrap",
    alignItems: "stretch",
  },
});

export default TagList;
