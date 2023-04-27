import CheckBox from "@react-native-community/checkbox"
import { useAtomValue } from "jotai"
import { useState } from "react"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { countryAtom } from "."

const Terms = ({ navigation }) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const country = useAtomValue(countryAtom)
    
    return (
        <SafeAreaView style={styles.container}>  
            <View style={styles.hero}>
                <Image
                    source={require('../../assets/sima/logosima.png')}/>
                <Text style={styles.kewarganegaraan}>Ketentuan Pengguna</Text>
                <Text style={styles.redaksi}>
                    Tanggal Efektif : 11 April 2023
                </Text>
                <View style={styles.control_container}>
                    <View style={styles.terms_container}>
                        <ScrollView>
                            <Text style={{textAlign: 'justify'}}>
                                Selamat datang di Layanan Digital Sign !
                                { '\n' }
                                { '\n' }
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                { '\n' }
                                { '\n' }
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                            </Text>
                        </ScrollView>
                    </View>
                    {/* <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    /> */}
                    <Text style={styles.accept}>
                        Saya menyetujui Syarat & Ketentuan
                    </Text>
                    <TouchableOpacity
                        style={styles.button}>
                        <Text style={styles.button_label}>Lanjutkan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    hero: {
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        marginLeft: 24,
        marginRight: 24,
        marginTop: '20%',
        marginBottom: '20%',
    },

    kewarganegaraan: {
        width: '100%',
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 18,
        marginTop: 30,
    },

    redaksi: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        textAlign: 'center',
        color: '#6B778C',
        marginBottom: 20,
    },

    control_container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    button_label: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 700,
    },

    button: {
        backgroundColor: '#E81255',
        padding: 15,
        borderRadius: 12,
    },

    terms_container: {
        backgroundColor: '#F9F9F9',
        height: '75%',
        borderRadius: 10,
        padding: 30,
        overflow: 'scroll',
    },

    accept: {
        textAlign: 'center',
    }
})

export default Terms