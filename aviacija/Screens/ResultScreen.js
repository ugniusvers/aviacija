import React from "react";
import { Text, View } from "native-base";
import { StyleSheet, Image, Button } from "react-native";
import { data } from "../components/data";

class ResultScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: "Scan Detail"
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      copied: false

    };
  }

  onClick() {
    this.props.navigation.navigate("Scanner");
  }

  render() {
    const { navigation } = this.props;
    const qr = navigation.getParam("qr", "NO-QR");
    console.log(data[qr], qr)
    if (data[qr] !== undefined) {
      return <View style={styles.qrCard}>
        <Text style={styles.header}>{data[qr].title}</Text>
        <View ></View>
        <Image
          style={{
            width: 350, height: 350,
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#d6d7da'
          }}
          source={{ uri: data[qr].img }}
        />
        <Text>{data[qr].sn}</Text>
        <Text>{data[qr].pn}</Text>
        <Text>{data[qr].location}</Text>
        <Text>{data[qr].instructions}</Text>
        <Button onPress={() => this.onClick()} title="Back" />
      </View>
    }
    return (
      <View style={styles.qrCard}>
        <Text>QR code not found.</Text>
        <Button onPress={() => this.onClick()} title="Back" />
      </View>
    );
  } 1
}

const styles = StyleSheet.create({
  qrCard: {
    marginTop: 40,
    display: 'flex',
    alignItems: 'center'
  },
  header: {
    fontSize: 40
  }
});


export default ResultScreen;
