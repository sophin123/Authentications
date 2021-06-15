import React from "react";

import { View, StyleSheet, Text, Button } from "react-native";

export default function SignInScreen({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>SignIn Screen</Text>

      <Button
        title="SignUp"
        onPress={() => navigation.navigate("SignUpScreen")}
      />
    </View>
  );
}
