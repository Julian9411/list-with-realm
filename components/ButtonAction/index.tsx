import { FC } from "react";
import { Button, View } from "react-native";

interface IButtonAction {
  onPress: () => void;
  buttonTitle: string;
}
const ButtonAction: FC<IButtonAction> = ({
  onPress,
  buttonTitle,
}) => (
  <View
    style={{
      position: "absolute",
      bottom: 0,
      width: "100%",
    }}
  >
    <Button title={buttonTitle} onPress={onPress} />
  </View>
);

export default ButtonAction
