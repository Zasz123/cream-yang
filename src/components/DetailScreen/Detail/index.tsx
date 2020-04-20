import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Item } from "../../../moduels/currentItem";

import DetailTitle from "./Title";
import DetailTags from "./Tags";
import DetailInfo from "./Info";
import DetailVideo from "./BeforeVideo";
import DetailFooter from "../Footer/Footer";

const Detail = ({ id, name, info, tag, src, beforeVideo }: Item) => {
  return (
    <View style={styles.contianer}>
      <View style={styles.item}>
        <DetailTitle name={name} />
      </View>
      <View style={{ marginBottom: 20, flex: 1 }}>
        <DetailTags tag={tag} />
      </View>
      <View style={styles.item}>
        <DetailInfo info={info} />
      </View>
      <View style={styles.divider} />
      <View style={styles.item}>
        <DetailVideo beforeVideo={beforeVideo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    marginTop: 420,
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  divider: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 30,
    marginBottom: 30,
  },
  item: {
    flex: 1,
  },
});

export default Detail;
