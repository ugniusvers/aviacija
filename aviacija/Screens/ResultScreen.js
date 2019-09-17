import React from "react";
import { Text, View } from "native-base";
import { StyleSheet, Image } from "react-native";
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

  render() {
    const { navigation } = this.props;
    const qr = navigation.getParam("qr", "NO-QR");
    console.log(data[qr], qr)
    if (data[qr] !== undefined) {
      return <View style={styles.qrCard}>
        <Text>{data[qr].title}</Text>
        <Text>{data[qr].sn}</Text>
        <Text>{data[qr].pn}</Text>
        <Image
          style={{
            width: 250, height: 250,
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#d6d7da'
          }}
          source={{ uri: 'data:image/png;base64,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' }}
        />
        <Text>{data[qr].location}</Text>
        <Text>{data[qr].instructions}</Text>
      </View>
    }
    return (
      <View style={styles.qrCard}>
        <Text>QR code not found.</Text>
      </View>
    );
  } 1
}

const styles = StyleSheet.create({
  qrCard: {
    marginTop: 20
  }
});

export default ResultScreen;
