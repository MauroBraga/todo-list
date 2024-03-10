import { Text, View,Image,TouchableOpacity,TextInput, FlatList} from 'react-native';
import { styles } from './styles';
import Task from '../components/Task';


export default function Home(){
    const tasks = ['1','2','2','2','2','2']
    const concluidas = 2
    
    
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

                <TextInput  style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity  style={styles.button}>
                    <Image
                    accessibilityLabel='Adicioar'
                    style={styles.image}
                    source={require('../../../assets/add.png')}
                    />
                </TouchableOpacity>    

            </View>
            <View
                style={styles.totais}>
                <View
                    style={styles.totalCriado}>
                    <Text style={styles.totaisCriadas}>Criadas </Text>
                    <Text style={styles.totaisValor}> {tasks.length}</Text>    
                </View>    
                <View
                style={styles.totalConcluido}>
                    <Text style={styles.totaisConcluidas}>Concluídas </Text>
                    <Text style={styles.totaisValor}> {concluidas}</Text>
                </View>
                        
            </View>

            <FlatList 
                data={tasks}
                keyExtractor={item => item}
                renderItem={ ({item}) =>(
                    <Task />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
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
                )}
            />

           
            
            
        </View>
    )
}