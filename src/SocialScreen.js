import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

class SocialScreen extends Component {

    render() {
        return (
            <View>
                <Text style={styles.text}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Text>
                <LottieView
                    source= { require('./cart.json')}
                    autoPlay = { true }
                    loop = { true }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "IndieFlower",
    }
});
export default SocialScreen;
