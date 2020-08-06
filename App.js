import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import MyTasks from './MyTasks';
import { AntDesign } from '@expo/vector-icons';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", paddingTop: 35, alignItems: "center",}}>
        <View style={{ flex: 0.5, }}>
          <AntDesign name="appstore-o" size={27} color="#64B5F6" style={{ paddingLeft: 15}} />
        </View>
        <View style={{ flex: 1, }}>
          <Text style={{ fontSize: 25, color: "grey", }}>All Tasks</Text>
        </View>
      </View>
      <ScrollView style={{ backgroundColor: "#fff", padding: 10, marginVertical: 10 }}>
        <MyTasks task="Create new project" />
        <MyTasks task="Working call" />
        <MyTasks task="Meet with doctor" />
        <MyTasks task="Go to shop" />
        <MyTasks task="Take the kids to school" />
        <MyTasks task="Finish dribble marathon" />
        <MyTasks task="Walk with dog" />
        <MyTasks task="Play NFSMW" />
        <MyTasks task="Complete assignments" />
        <MyTasks task="Apply to internships" />
        <MyTasks task="Do competitive programming" />
      </ScrollView>
      <View style={{ alignItems: "center" }}>
        <TouchableHighlight style={{
          position: "absolute",
          bottom: 20,
          height: 80,
          width: 80,
          backgroundColor: "#64B5F6",
          borderRadius: 40,
          justifyContent: "center",
          alignItems: "center",
          elevation: 10,
        }}>
          <Text style={{ color: "#fff", fontSize: 40 }}>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
