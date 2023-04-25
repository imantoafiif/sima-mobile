import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.hero}>
                <Image
                source={require('../../assets/sima/logosima.png')}/>
                <Text style={styles.welcome}>Selamat datang di SIMA !</Text>
                <View style={styles.input_field}>
                <Text style={styles.input_hint}>Email</Text>
                <TextInput
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor="#d3d3d3"
                    style={styles.input}
                    placeholder='Masukkan email'/>
                </View>
                <View style={styles.input_field}>
                <Text style={styles.input_hint}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholderTextColor="#d3d3d3"
                    style={styles.input}
                    placeholder='Masukkan password'/>
                </View>
                <TouchableOpacity style={{width: '100%'}}>
                <Text
                    style={styles.text}>Lupa Password ?
                </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{width: '100%'}}
                onPress={() => alert('123')}>
                <View style={styles.button_container}>
                    <Text style={styles.text_masuk}>Masuk</Text>
                </View>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                <Text>
                    Tidak punya akun ? &nbsp;
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                    <Text style={styles.text}>Daftar sekarang</Text>
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
    },
    hero: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20,
      marginLeft: 24,
      marginRight: 24,
    },
    text: {
      fontSize: 16,
      textAlign: 'right',
      width: '100%',
      color: '#E81255',
    },
    text_masuk: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 700,
    },
    button_container: {
      backgroundColor: '#E81255',
      padding: 15,
      borderRadius: 12,
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
    input_hint: {
      width: '100%',
      textAlign: 'left',
      fontWeight: 600,
      marginBottom: 12,
    },
    input_field: {
      width: '100%'
    },
    welcome: {
      width: '100%',
      textAlign: 'left',
      fontWeight: 700,
      fontSize: 24,
      marginTop: 32,
      marginBottom: 32,
    }
  });

  export default Login;