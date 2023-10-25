import ButtonAction from "../ButtonAction";
import { useRealm } from "@realm/react";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import Realm from "realm";


const CreatePersonInput = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const realm = useRealm();

  const handleAddPerson = () => {
    realm.write(() => {
      realm.create("Person", { _id: new Realm.BSON.UUID(), name, age: Number(age) });
    });
  };

  return (
    <ScrollView>
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        Add new person
      </Text>
      <View style={{ marginVertical: 20, paddingHorizontal: 15 }}>
        <Text>Name of person</Text>
        <TextInput
          style={{
            marginVertical: 15,
            borderWidth: 1,
            borderColor: "#000",
            borderRadius: 20,
            paddingHorizontal: 20,
          }}
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={{ paddingHorizontal: 15, marginBottom: 50 }}>
        <Text>Age of person</Text>
        <TextInput
          style={{
            marginVertical: 15,
            borderWidth: 1,
            borderColor: "#000",
            borderRadius: 20,
            paddingHorizontal: 10,
          }}
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
      </View>
      <ButtonAction
        onPress={() => handleAddPerson()}
        buttonTitle="Add Person"
      />
    </ScrollView>
  );
};

export default CreatePersonInput
