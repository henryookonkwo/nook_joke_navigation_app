import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card } from "react-native-elements";

const jokes = [
  {
    joke: "brynn",
  },
  {
    joke: "thot leader",
  },
];

const Cards = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Card.Title>{props.title}</Card.Title>
          <Card.Divider />
          <Text>{props.data}</Text>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  body: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Cards;
