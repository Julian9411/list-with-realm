import { RealmProvider } from "@realm/react";
import ButtonAction from "./components/ButtonAction";
import { useState } from "react";
import Modal from "./components/Modal";
import CreatePersonInput from "./components/Form/CreatPersonForm";
import { Person } from "./scheme";
import List from "./components/List";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <RealmProvider schema={[Person]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex: 1}}
      >
        <>
          <List />
          <ButtonAction
            onPress={() => setShowModal(!showModal)}
            buttonTitle="Add Person"
          />
          <Modal setShowModal={setShowModal} showModal={showModal}>
            <CreatePersonInput />
          </Modal>
        </>
      </KeyboardAvoidingView>
    </RealmProvider>
  );
}
