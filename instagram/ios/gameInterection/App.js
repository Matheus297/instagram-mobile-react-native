import React from 'react';
import { View,Text, StyleSheet,TouchableOpacity} from 'react-native';

// import { Container } from './styles';



const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <TouchableOpacity style={styles.red}>
           
        </TouchableOpacity>
        <TouchableOpacity style={styles.yellow}>
            
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity style={styles.blue}>
           
        </TouchableOpacity>
        <TouchableOpacity style={styles.green}>
               
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startText}>Começar</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  line: {
   flexDirection: 'row',
  },
  red: {
    width: '50%',
    backgroundColor: 'red',
    height: 200,
    borderTopLeftRadius: 200,
  },
  yellow: {
    width: '50%',
    backgroundColor: 'yellow',
    height: 200,
    borderTopRightRadius: 200,    
  },
  blue: {
    width: '50%',
    backgroundColor: 'blue',
    height: 200,
    borderBottomLeftRadius: 200,
  },
  green: {
    width: '50%',
    backgroundColor: 'green',
    height: 200,
    borderBottomRightRadius: 200,
  },
  startButton: {
    width: '80%',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderColor: '#ddd',
    borderWidth:2,
    borderRadius: 40,
    marginTop: 120,
  },
  startText: {
    fontSize: 20,
    color: '#fff'
  }
})