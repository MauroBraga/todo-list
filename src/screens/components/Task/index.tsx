import { Text, View,Image,TouchableOpacity,TextInput} from 'react-native';
import { styles } from './styles';
import { ITask } from '../../Home';

type Props ={
    task:ITask,
    onRemove: () => void
}

export default function Task(p: Props){
    return(
        <View style={styles.container}>
                
            <TouchableOpacity>
                <Image style={{flex:1}}
                accessibilityLabel='Check'
                source={
                    require('../../../../assets/check.png')
                    }/>
            </TouchableOpacity>  
            
            <Text style={styles.texto}>
            {p.task ? p.task.texto : ''}
            </Text>

            <TouchableOpacity onPress={p.onRemove}>
                <Image style={{flex:1}}
                accessibilityLabel='Excluir'
                source={require('../../../../assets/trash.png')}/>
            </TouchableOpacity>  
        </View>
    )

}    