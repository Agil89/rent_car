import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { changeBackground } from "../store/actions/backgroundAction";

const SwitchMode = () => {
  const dispatch = useDispatch()
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
    if(isEnabled){
        dispatch(changeBackground('lightMode'))
    }else{
        dispatch(changeBackground('darkMode'))
    }
    // dispatch(changeBackground('darkMode'))
};
  
  


  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SwitchMode;