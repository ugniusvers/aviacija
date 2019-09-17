import React from "react";
import { Text } from "native-base";

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
    console.log({ qr });

    return (
      <Text>{qr}</Text>
    );
  }
}

export default ResultScreen;
