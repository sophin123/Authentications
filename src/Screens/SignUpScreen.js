import React, { useState, useContext } from "react";

import { View, StyleSheet } from "react-native";

import { Text, Input, Button } from "react-native-elements";

import Spacer from "../Components/Spacer";

import { Context as AuthContext } from "../context/AuthContext";

export default function SignUpScreen({ navigation }) {
  const { state, signup } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={{ textAlign: "center" }}>
          Sign Up For Tracker
        </Text>
      </Spacer>
      <Input
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
      />
      <Input
        label="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        onChangeText={setPassword}
      />

      {state.errorMessage ? (
        <Text style={styles.errorMessageStyle}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 1,
    justifyContent: "center",
    flex: 1,
    paddingBottom: 200,
  },
  errorMessageStyle: {
    fontSize: 16,
    color: "red",
    paddingLeft: 10,
  },
});
