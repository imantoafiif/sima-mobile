import { StyleSheet, Text, View } from "react-native"

const Personal = () => {
    return (
        <View style={styles.container}>
            <Text>Personal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    }
})

export default Personal