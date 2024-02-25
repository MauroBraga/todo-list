import { Text, View,Image,TouchableOpacity,TextInput} from 'react-native';
import { styles } from './styles';


export default function Home(){

    return(
        <View style={styles.container}>
            
            <View
                style={styles.title}>
                <Image
                    accessibilityLabel='Todo'
                    style={styles.image}
                    source={require('../../../assets/Logo.png')}
                />
            </View>
            <View
                style={styles.form}>

                <TextInput 
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>    

            </View>
            
            
        </View>
    )
}