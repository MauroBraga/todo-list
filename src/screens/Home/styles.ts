import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
      },
        title:{
        marginTop: 56,
        width:'100%',
        alignItems:'center'    
        
    },
    image:{
        resizeMode: 'stretch',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    input:{
      flex: 1,
      height: 56,
      backgroundColor: '#1F1E25',
      borderRadius: 5,
      color: '#FFFF',
      padding: 16,
      fontSize: 16,
      marginRight: 5
    },
    button:{
      color: '#FFF',
      fontSize: 24
    },
    buttonText:{
       color: '#FFF',
      fontSize: 24
    },  
    totais:{
        flex:1,
        flexDirection:"row",
        justifyContent:'space-between',
        maxHeight:20,
      
    },
    totalCriado:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    totalConcluido:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    totaisCriadas:{
        color:'#4EA8DE'
       
    },
    totaisValor:{
        color:'#fff',
        borderColor:'#333',
        borderRadius:5

    },
    totaisConcluidas:{
        color:'#8284FA',
       
    },
    listEmpty:{
        flex:1,
        width:'100%',
        alignItems:'center',
        marginTop:20 ,
        padding:30,
        borderTopColor:'#333333',
        borderTopWidth:1
    },
    listEmptyText:{
        color: '#808080',
        marginTop: 16,
        fontSize: 14,
        textAlign: 'center'
    },
})