import { atom, useSetAtom } from "jotai"
import { useEffect, useState } from "react"
import { Platform } from "react-native"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { StyleSheet, Picker } from "react-native"
import DropDownPicker from "react-native-dropdown-picker"
import { SafeAreaView } from "react-native-safe-area-context"

export const countryAtom = atom(null)
const platform = Platform.OS

const Signup = ({ navigation }) => {

    const setCountry = useSetAtom(countryAtom)
    const [value, setValue] = useState(null)
    const [open, setOpen] = useState(false)
    const [items, setItems] = useState([
        {
            label: 'Indonesia', 
            value: 'IDN',
            icon: () => <Image source={{ uri: 'https://cdn.britannica.com/48/1648-004-A33B72D8/Flag-Indonesia.jpg' }} style={styles.item_icon} />
        },
        {
            label: 'United States', 
            value: 'US',
            icon: () => <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/US_flag_51_stars.svg/2560px-US_flag_51_stars.svg.png' }} style={styles.item_icon} />
        }
    ])

    return (
        // <SafeAreaView style={styles.hero}>
        <View style={styles.hero}>
            <Image
                source={require('../../assets/sima/logosima.png')}/>
            <Text style={styles.kewarganegaraan}>Pilih Kewarganegaraan</Text>
            <Text style={styles.redaksi}>
                Silahkan pilih negara anda untuk menentukan ID dokumen mana yang akan dipindai. ID dokumen diperlukan untuk memvalidasi identitas anda. 
            </Text>
            <View style={styles.control_container}>
                <DropDownPicker
                    placeholderStyle={{
                        color: '#d3d3d3'
                    }}
                    placeholder="Pilih Kewarganegaraan"
                    style={styles.input}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    onSelectItem={item => setCountry(item.value)}
                />
                <TouchableOpacity 
                    disabled={!value}
                    onPress={() => navigation.push('terms')}
                    style={value ? styles.button : [styles.button, styles.button_disabled]}>
                    <Text style={styles.button_label}>Lanjutkan</Text>
                </TouchableOpacity>
            </View>
        </View>
        // {/* </SafeAreaView> */}
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
        // paddingVertical: 40,
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
    
    button: {
        backgroundColor: '#E81255',
        padding: 15,
        borderRadius: 12,
    },

    button_label: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
    },

    control_container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    button_disabled: {
        opacity: 0.5
    },

    input: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        width: '100%',
        padding: 12,
        borderRadius: 5,
        borderColor: '#d3d3d3',
    },

    item_icon: {
        borderRadius: 10,
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#e6e6e6',
    }
})

export default Signup