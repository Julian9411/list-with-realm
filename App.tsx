import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Realm, { ObjectSchema } from "realm";
import { RealmProvider } from "@realm/react";
import ButtonAction from "./components/ButtonAction";
import { useState } from "react";
import Modal from "./components/Modal";
import CreatePersonInput from "./components/Form/CreatPersonForm";

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
  const [showModal, setShowModal] = useState(false);

  return (
    <RealmProvider schema={[Person]}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <ButtonAction
        onPress={() => setShowModal(!showModal)}
        buttonTitle="Add Person"
      />
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <CreatePersonInput />
      </Modal>
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
