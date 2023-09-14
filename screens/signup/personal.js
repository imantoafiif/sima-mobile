import { useState } from "react";
import Picker from 'react-native-picker-select';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, TextInput, Image, Platform } from "react-native"
import DropDownPicker from "react-native-dropdown-picker"
import Icon from 'react-native-vector-icons/FontAwesome';

const Personal = ({ navigation }) => {

    const StatusBarHeight = StatusBar.currentHeight || 0
    const [open, setOpen] = useState(false)
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
        <View style={{ flex: 1, padding: 24, paddingTop: StatusBarHeight, backgroundColor: 'white' }}>
            <ScrollView style={{ marginBottom: 28, }}>
                {/* {
                    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(item => {
                        return <Text style={{ padding: 12 }}>skajasj</Text>
                    })
                } */}
                <Text style={styles.title}>Masukkan Data Diri</Text>
                <Text style={styles.subtitle}>Masukkan data identitas anda berdasarkan KTP atau Surat Keterangan Kependudukan. Masukkan juga email dan nomor telepon yang aktif</Text>
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
                        Jenis Kelamin <Text style={{ color: '#E81255' }}>*</Text>
                    </Text>
                    <View style={styles.inputSelect}>
                        <Picker
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Football', value: 'football' },
                                { label: 'Baseball', value: 'baseball' },
                                { label: 'Hockey', value: 'hockey' },
                            ]}
                        />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={{ fontWeight: 500 }}>
                        Nomor Induk Kependudukan <Text style={{ color: '#E81255' }}>*</Text>
                    </Text>
                    <TextInput 
                        placeholder="Nomor Induk Kependudukan"
                        style={styles.input}/>
                </View>
                <View style={styles.warning}>
                    <Icon name="exclamation-circle" size={16} style={{ color: '#6B778C' }}/>
                    <Text style={styles.warningLabel}>Pastikan data diri yang telah diinput sudah benar dan sesuai dengan identitas yang dimiliki</Text>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonLabel}>Lanjutkan</Text>
            </TouchableOpacity>
        </View> 
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
        fontWeight: 500,
        color: 'white',
    },
    title: {
        width: '100%',
        fontWeight: 700,
        fontSize: 18,
        marginTop: 30,
    },
    subtitle: {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        color: '#6B778C',
        marginBottom: 20,
        paddingVertical: 12,
    },
    inputContainer: {
        paddingBottom: 8
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
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });
  

export default Personal