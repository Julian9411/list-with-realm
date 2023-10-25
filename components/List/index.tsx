import { useQuery, useRealm } from "@realm/react";
import { FlatList, Pressable, Text, View } from "react-native";
import { Person } from "../../scheme";
import { useMemo } from "react";

const List = () => {
  const people = useQuery(Person);
  const realm = useRealm();

  const deleteDog = (item) => {
    realm.write(() => {
      realm.delete(item);
    });
  };

  const list = useMemo(() => (
    <View style={{marginTop: 30}}>
    <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
      List of people
    </Text>
    <FlatList
      data={people}
      renderItem={({ item, index }) => (
        <View
          key={`${item.name}-${index}`}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 15,
          }}
        >
          <Text>{item.name}</Text>
          <Pressable onPress={() => deleteDog(item)}>
            <Text>X</Text>
          </Pressable>
        </View>
      )}
    />
  </View>
  ), [people])

  return list
  
};

export default List