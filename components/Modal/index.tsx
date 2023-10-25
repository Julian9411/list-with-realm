import { View, Pressable } from "react-native";
import React, { FC, ReactElement } from "react";

interface IModal {
  children: ReactElement;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}
const Modal: FC<IModal> = ({ children, showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <Pressable
          onPress={() => setShowModal(false)}
          style={{
            backgroundColor: "#0000007e",
            width: "100%",
            height: "100%",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 30,
            zIndex: 99,
          }}
        >
          <View
            style={{ backgroundColor: "#fff", width: "100%", height: "40%" }}
          >
            {children}
          </View>
        </Pressable>
      )}
    </>
  );
};

export default Modal;
