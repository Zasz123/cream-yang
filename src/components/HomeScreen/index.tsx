import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import SelectItem from "../../hooks/current/useSelect";
import { Props } from "../Types/types";

import { data } from "../../data";

const HomeScreen = ({ navigation }: Props) => {
  const selectItem = SelectItem();
  const onClick = (
    id: number,
    name: string,
    info: string,
    tag: Array<string>,
    src: string,
    beforeVideo: Array<string>,
    profile: string
  ) => {
    selectItem({ id, name, info, tag, src, beforeVideo, profile });
    navigation.push("Detail", {
      id,
      name,
      info,
      tag,
      src,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {data
          ? data.map((item: any) => (
              <>
                <TouchableHighlight
                  onPress={() =>
                    onClick(
                      item.id,
                      item.name,
                      item.info,
                      item.tag,
                      item.src,
                      item.beforeVideo,
                      item.profile
                    )
                  }
                >
                  <ImageBackground
                    source={{ uri: item.profile }}
                    style={{ width: "100%", height: 300, marginBottom: 10 }}
                  >
                    <Text style={{ color: "white" }}>{item.name}</Text>
                  </ImageBackground>
                </TouchableHighlight>
              </>
            ))
          : "데이터가 없습니다."}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
