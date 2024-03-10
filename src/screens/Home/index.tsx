import { Text, View,Image,TouchableOpacity,TextInput, FlatList, Alert} from 'react-native';
import { styles } from './styles';
import Task from '../components/Task';
import { useState } from 'react';

export interface ITask {
    id:number,
    texto:string,
    check:false
}


export default function Home(){
    
    const [tasks, setTasks] = useState<ITask[]>([]); 
    const [taskTexto, setTaskTexto] = useState<string>(''); 
    const [concluidas, setConcluidas] = useState<number>(0);

    function handleParticipantAdd(){
        
        if(taskTexto===''){
            return Alert.alert("Task","Campo Tarefa está vazio")
        }
       var id = tasks.length +1;  
       setTasks(p => [...p, {id,texto:taskTexto,check:false}]);
       setTaskTexto(''); 
    }

    function handletRemove(task:ITask){
        Alert.alert("Remover", `Remover a tarefa ?`, [
            {
              text: 'Sim',
              onPress: () => {
                setTasks(prevState => prevState.filter(partipant => partipant.id !=task.id))
                Alert.alert("Deletado!");
              }
            },
            {
              text: 'Não',
              style: 'cancel'
            }
          ])
    }
    
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
                    onChangeText={setTaskTexto}
                />

                <TouchableOpacity  style={styles.button}
                    onPress={handleParticipantAdd}
                    >
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
                keyExtractor={item => item.texto}
                renderItem={ ({item}) =>(
                    <Task  key={item.texto} 
                    task={item}
                    onRemove={() => handletRemove(item)}/>
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