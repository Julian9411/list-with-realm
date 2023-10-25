import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Realm, { ObjectSchema } from "realm";
import { RealmProvider } from "@realm/react";
import ButtonAction from "@components/ButtonAction";

class Person extends Realm.Object<Person> {
  name!: string;
  age?: number;
  static schema: ObjectSchema = {
    name: "Person",
    properties: {
      name: "string",
      age: "int?",
    },
  };
}
export default function App() {
  return (
    <RealmProvider schema={[Person]}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <ButtonAction
        onPress={() => console.log("press")}
        buttonTitle="Add Person"
      />
    </RealmProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
