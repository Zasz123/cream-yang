import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
} from "react-native";
import useGetItem from "../../hooks/current/useGetItem";

import BackgroundViedo from "./BackgroundVideo";
import Detail from "./Detail";
import DetailFooter from "./Footer/Footer";

import { Props } from "../Types/types";

import { data } from "../../data";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const DetailScreen = ({ navigation, route }: Props) => {
  const nowItem = useGetItem();

  const nowData =
    data[data.findIndex((item: any) => item.id === nowItem.item?.id)];

  const [onHeader, setOnHeader] = useState(false);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { y } = e.nativeEvent.contentOffset;

    if (y >= 400) {
      setOnHeader(true);
    } else {
      setOnHeader(false);
    }
  };

  if (!nowItem.item)
    return (
      <View style={styles.container}>
        <Text>로딩중...</Text>
      </View>
    );

  const { id, name, info, tag, src, beforeVideo, profile } = nowItem.item;

  useEffect(() => {
    if (onHeader) {
      navigation.setOptions({
        headerTitle: name,
      });
    } else {
      navigation.setOptions({
        headerTitle: () => null,
        headerBackground: () => null,
      });
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.video}>
        <BackgroundViedo src={nowData.src} onHeader={onHeader} />
      </View>
      <View style={styles.detail} pointerEvents="box-none">
        <ScrollView onScroll={onScroll} scrollEventThrottle={100}>
          <Detail
            id={id}
            name={name}
            info={info}
            tag={tag}
            src={src}
            beforeVideo={beforeVideo}
            profile={profile}
          />
          <DetailFooter />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  video: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  detail: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    width: WIDTH,
    height: "100%",
  },
});

export default DetailScreen;
