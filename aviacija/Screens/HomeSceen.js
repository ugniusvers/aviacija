import React from "react";
import { Text, View } from "native-base";
import { StyleSheet, Image, Button } from "react-native";
import { data } from "../components/data";

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
        title: "Home screen"
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

        return (
            <View style={styles.qrCard}>
                <Button onPress={() => this.onClick()} title="Scan" />
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

export default HomeScreen;