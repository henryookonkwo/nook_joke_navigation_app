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
          <Card.Title style={styles.header}>{props.title}</Card.Title>
          <Card.Divider />
          <Text style={styles.body}>{props.data}</Text>
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
  header: {
    backgroundColor: "#034f84",
    color: "#FFFFFF",
    fontSize: 20,
  },

  body: {
    fontSize: 16,
    marginTop: 5,
    backgroundColor: "#92a8d1",
    color: "#000000",
    fontFamily: "Avenir",
  },
});

export default Cards;
