import { Text, View,Image,TouchableOpacity,TextInput} from 'react-native';
import { styles } from './styles';


export default function Task(){

    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={{flex:1}}
                accessibilityLabel='Check'
                source={require('../../../../assets/check.png')}/>
            </TouchableOpacity>  
            
            <Text style={styles.texto}>
            Integer urna interdum massa libero auctor neque turpis turpis semper.
            </Text>

            <TouchableOpacity>
                <Image style={{flex:1}}
                accessibilityLabel='Excluir'
                source={require('../../../../assets/trash.png')}/>
            </TouchableOpacity>  
        </View>
    )

}    