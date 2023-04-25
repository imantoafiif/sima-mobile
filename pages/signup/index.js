import { Text, View } from "react-native"
import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Signup = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.hero}>
                <Text>Signup</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hero: {
        
    }
})

export default Signup