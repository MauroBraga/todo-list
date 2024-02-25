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
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity 
                    style={styles.button}>
                    <Image
                    accessibilityLabel='Todo'
                    style={styles.image}
                    source={require('../../../assets/trash.png')}
                    />
                </TouchableOpacity>    

            </View>
            <View
                style={styles.totais}>
                <View
                    style={styles.totalCriado}>
                    <Text style={styles.totaisCriadas}>Criadas </Text>
                    <Text style={styles.totaisValor}> 0</Text>    
                </View>    
                <View
                style={styles.totalConcluido}>
                    <Text style={styles.totaisConcluidas}>Concluídas </Text>
                    <Text style={styles.totaisValor}> 0</Text>
                </View>
                        
            </View>

            <View style={styles.listEmpty}>
                <Image
                        accessibilityLabel='Todo'
                        style={styles.image}
                        source={require('../../../assets/Clipboard.png')}
                        />
                <Text style={styles.listEmptyText}>
                    Você ainda não tem tarefas cadastradas 
                </Text>

                <Text style={styles.listEmptyText}>
                    Crie tarefas e organize seus itens 
                </Text>
            </View>
            
            
        </View>
    )
}