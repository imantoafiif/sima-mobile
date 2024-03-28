import { useEffect, useState } from "react";
import Picker from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, TextInput, Image, Platform } from "react-native"
import DropDownPicker from "react-native-dropdown-picker"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from "react-native";

const Personal = ({ navigation }) => {

    const StatusBarHeight = StatusBar.currentHeight || 0
    const [KTP, setKTP] = useState(null)
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState(new Date())

    const [value, setValue] = useState(null)
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
        // <SafeAreaView style={{ flex: 1, backgroundColor: 'pink' }}>
        //     <View style={{ flex: 1 }}>
        //         {/* Your component content */}
        //         <Text>Hello, World!</Text>
        //     </View>
        // </SafeAreaView>
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 27, backgroundColor: 'white', gap: 12 }}>
                {/* {
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(item => {
                        return <Text style={{ padding: 12 }}>skajasj</Text>
                    })
                } */}
                <Text style={styles.title}>Masukkan Kontak Aktif</Text>
                {/* {
                    [1,1,1,1,1,1,1,1,1].map(item => {
                        return (
                            <View style={styles.inputContainer}>
                                <Text style={{ fontWeight: 500 }}>
                                    Nama Lengkap <Text style={{ color: '#E81255' }}>*</Text>
                                </Text>
                                <TextInput 
                                    placeholder="Nama Lengkap"
                                    style={{ borderWidth: 1, padding: 12, borderColor: '#D8DADC', borderRadius: 9, marginVertical: 8 }}/>
                            </View>
                        )
                    })
                } */}
            <ScrollView>
                <Text style={styles.subtitle}>Masukkan data kontak Aktif Anda yang sedang digunakan</Text>
                <View style={styles.inputContainer}>
                    <Text style={{ fontWeight: 500 }}>
                        Nama Lengkap <Text style={{ color: '#E81255' }}>*</Text>
                    </Text>
                    <TextInput 
                        placeholder="Nama Lengkap"
                        style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={{ fontWeight: 500 }}>
                        Nomor Induk Kependudukan <Text style={{ color: '#E81255' }}>*</Text>
                    </Text>
                    <TextInput    
                        onChangeText={v => {
                            const ktp_ = v.replace(/[^0-9]/g, '')
                            setKTP(ktp_)
                        }}
                        value={KTP}
                        maxLength={16}
                        placeholder="Nomor Induk Kependudukan"
                        style={styles.input}/>
                </View>
                
            </ScrollView>
            {/* <View style={styles.warning}>
                <Icon name="exclamation-circle" size={16} style={{ color: '#6B778C' }}/>
                <Text style={styles.warningLabel}>Pastikan data diri yang telah diinput sudah benar dan sesuai dengan identitas yang dimiliki</Text>
            </View> */}
            <View style={styles.tip}>
                <Icon name="exclamation-circle" size={16} style={{ color: '#6B778C' }}/>
                <Text style={styles.redaksi_tip}>
                    Pastikan data diri yang telah diinput sudah benar dan sesuai dengan institusi yang dimiliki
                </Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonLabel}>Lanjutkan</Text>
            </TouchableOpacity>
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'red',
    },
    input: {
        borderWidth: 1, 
        padding: 14, 
        borderColor: '#D8DADC', 
        borderRadius: 9, 
        marginVertical: 8
    },
    inputSelect: {
        borderWidth: 1, 
        borderColor: '#D8DADC', 
        borderRadius: 9, 
        marginVertical: 8,
        padding: Platform.OS === 'ios' ? 16 : null,
    },
    button: {
        backgroundColor: '#E81255',
        padding: 15,
        borderRadius: 12,
    },
    buttonLabel: {
        textAlign: 'center',
        fontWeight: '500',
        color: 'white',
    },
    title: {
        width: '100%',
        fontWeight: '700',
        fontSize: 18,
        marginTop: 30,
    },
    subtitle: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        color: '#6B778C',
        marginBottom: 12,
        // marginBottom: 20,
        // paddingVertical: 12,
    },
    inputContainer: {
        // paddingBottom: 8
    },
    warning: {
        backgroundColor: '#F4F5F7',
        padding: 16,
        borderRadius: 8,
        flex: 1,
        flexDirection: 'row',
        gap: 8,
        color: 'black',
        marginTop: 8,
    },
    warningLabel: {
        fontSize: 12
    },
    tip: {
        gap: 6,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F4F5F7',
        padding: 14,
        borderRadius: 9,
    },

    redaksi_tip: {
        fontSize: 12
    },
})


export default Personal