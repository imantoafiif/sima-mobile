import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useAtomValue } from "jotai"
import { useState } from "react"
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { countryAtom } from "."

const platform = Platform.OS

const Terms = ({ navigation }) => {

    const [accept, setAccept] = useState(false)
    
    return (
        // <SafeAreaView style={styles.container}>  
            
        // </SafeAreaView>'
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
                <TouchableWithoutFeedback>
                    <View style={styles.accept}>
                        <BouncyCheckbox
                            size={18}
                            fillColor="#E81255"
                            unfillColor="#FFFFFF"
                            iconStyle={{ borderRadius: 3 }}
                            innerIconStyle={{ borderWidth: 1, borderRadius: 3 }}
                            textStyle={{ 
                                textDecorationLine: 'none'
                            }}
                            onPress={v => setAccept(v)}
                        />
                        <Text style={styles.redaksi_accept_terms}>
                            Saya menyetujui&nbsp;
                            <Text style={styles.bold_red}>Syarat & Ketentuan </Text>
                            dan&nbsp;
                            <Text style={styles.bold_red}>Kebijakan Privasi&nbsp;</Text>
                            yang berlaku
                        </Text>
                    </View> 
                </TouchableWithoutFeedback>
                <TouchableOpacity
                    onPress={() => navigation.navigate('identity')}
                    disabled={!accept}
                    style={accept ? styles.button : [styles.button, styles.button_disabled]}>
                    <Text style={styles.button_label}>Lanjutkan</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        paddingLeft: 24,
        paddingRight: 24,
        paddingVertical: (platform === 'ios' ? '10%' : '20%'),
        backgroundColor: 'white',
        // backgroundColor: 'brown',
    },

    kewarganegaraan: {
        width: '100%',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 18,
        marginTop: 30,
    },

    redaksi: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        textAlign: 'center',
        color: '#6B778C',
        marginBottom: 20,
    },

    control_container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    button_label: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
    },

    button: {
        backgroundColor: '#E81255',
        padding: 15,
        borderRadius: 12,
        width: '100%',
    },

    terms_container: {
        backgroundColor: '#F9F9F9',
        height: '70%',
        borderRadius: 10,
        padding: 30,
        overflow: 'scroll',
    },

    accept: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },

    button_disabled: {
        opacity: 0.5
    },

    redaksi_accept_terms: {
        fontWeight: '600',
    },

    bold_red: {
        color: '#E81255'
    }
})

export default Terms