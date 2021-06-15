import React from "react";

import { View, StyleSheet, Text, Button } from "react-native";

export default function TrackListScreen({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>TrackListScreen</Text>
      <Button
        title="Navigate to Track Details"
        onPress={() => navigation.navigate("TrackDetailScreen")}
      />
    </View>
  );
}
