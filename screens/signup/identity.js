import { useCallback, useEffect, useState } from "react";
import { Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import * as DocumentPicker from 'expo-document-picker';
import { atom, useSetAtom } from "jotai";

export const identityAtom = atom(null)
const platform = Platform.OS

const Identity = ({ navigation }) => {

    useEffect(() => {
        setIdentity(selectedFile?.uri)
        console.log(selectedFile?.size)
    }, [selectedFile])


    const setIdentity = useSetAtom(identityAtom)
    const [selectedFile, setSelectedFile] = useState(null);

    const handleDocumentSelection = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'image/*',
            });
            setSelectedFile(result)
            // console.log(
            //   result.uri,
            //   result.type, // mime type
            //   result.name,
            //   result.size
            // );
            } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                setSelectedFile(null)
                console.warn(err)
            } else {
                console.warn(err)
            }
        }
    };

    return (
        // <SafeAreaView style={styles.container}>
            
        // </SafeAreaView>
        <View style={styles.hero}>
            <Image
                source={require('../../assets/sima/logosima.png')}/>
            <Text style={styles.kewarganegaraan}>Unggah Kartu Tanda Penduduk</Text>
            <Text style={styles.redaksi}>
                Dokumen ini diperlukan untuk memverifikasi identitas anda. Gunakan KTP asli atau Surat Keterangan Kependudukan
            </Text>
            {/* <Button
                onPress={handleDocumentSelection} 
                title="presses"/>
            <Text>{ selectedFile?.name }</Text> */}
            <View style={styles.control_container}>
                <View style={styles.document_container}>
                    <TouchableWithoutFeedback
                        onPress={handleDocumentSelection}>
                        <View style={styles.file_container}>
                            {
                                selectedFile ? (
                                    <View style={styles.ktp_container}>
                                        <Image
                                            style={styles.im_template}  
                                            source={{ uri: selectedFile.uri }}/>
                                        <Text style={styles.redaksi_ktp}>{ selectedFile.name }</Text>
                                    </View>
                                ) : (
                                    <View style={styles.ktp_container}>
                                        <Image source={require('../../assets/sima/ktp_dummy.png')}/>
                                        <Text style={styles.redaksi_ktp}>Klik disini untuk memindai KTP</Text>
                                    </View>
                                )
                            }
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.tip}>
                        <Text style={styles.redaksi_tip}>
                            Gambar identitas & pas foto harus terbaca jelas
                            (Gambar tidak kabur, rusak, atau terkena pantulan cahaya)
                            {/* { '\n' }
                            { '\n' }
                            Foto identitas adalah dokumen asli, bukan dokumen fotokopi
                            { '\n' }
                            { '\n' }
                            Identitas yang terdaftar adalah data yang masih berlaku */}
                        </Text>
                    </View>
                    {/* <View style={styles.tip}>
                        <Text style={styles.redaksi_tip}>
                            Foto identitas adalah dokumen asli, bukan dokumen fotokopi
                        </Text>
                    </View>
                    <View style={styles.tip}>
                        <Text style={styles.redaksi_tip}>
                            Identitas yang terdaftar adalah data yang masih berlaku
                        </Text>
                    </View> */}
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('personal')}
                    style={selectedFile ? styles.button : [styles.button, styles.button_disabled]}>
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

    file_container: {
        width: '100%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#B9B9B9',
        borderStyle: 'dashed',
        borderRadius: 10,
        padding: 16,
        height: '40%',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: '#E81255',
        padding: 15,
        borderRadius: 12,
    },

    button_disabled: {
        opacity: 0.5
    },

    button_label: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 700,
    },

    document_container: {
        flex: 1,
        gap: 16,
    },

    tip: {
        backgroundColor: '#F4F5F7',
        padding: 14,
        borderRadius: 9,
    },

    redaksi_tip: {
        fontSize: 12
    },

    redaksi_ktp: {
        marginTop: 6,
        color: '#455154',
        fontSize: 12,
        fontWeight: 600,
    },

    redaksi_bold: {
        color: '#F38704',
    },

    im_template: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
    },

    ktp_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
})

export default Identity