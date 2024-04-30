import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {

    navigation.navigate("MainMenu");
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Username or email"
          selectionColor={"#909090"}
        />
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          selectionColor={"#909090"}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
