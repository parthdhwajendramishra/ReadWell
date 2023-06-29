import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Sample = ({ navigation }) => {
  const goTo = () => {
    navigation.navigate("Example");
  };
  return (
    <View>
      <Text>Sample</Text>
      <TouchableOpacity onPress={goTo}>
        
          <Text>Go To Example</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sample;
