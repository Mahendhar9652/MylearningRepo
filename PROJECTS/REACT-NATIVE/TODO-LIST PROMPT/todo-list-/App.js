import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput,Alert,Button ,TouchableOpacity,ScrollView} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [message,setMessage]=useState('')
  const [key,setKey]=useState();
  useEffect(() => {
    fetchData();
  
  
    
    

  }, [todos,text]);
   

  async function fetchData() {
    const resposnse = await fetch('https://mahi-42a51-default-rtdb.firebaseio.com/todos.json');
    const resposnseJson = await resposnse.json();
  
    const keys = Object.keys(resposnseJson);
    setKey(keys)
    const todoList = keys.map(key => resposnseJson[key]);
    setTodos(todoList);
  }

  const addTodo = () => {
    if(!text){
      setMessage('Please Enter AnyThing');

    }else{
    fetch('https://mahi-42a51-default-rtdb.firebaseio.com/todos.json', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ text})
    }).then(
      console.log("Data is Submitted successfully :"+text)
    )
      .then(() => {
        const newTodos = [...todos, text];
        console.log(newTodos)
        setTodos(newTodos);
        console.log(todos)
        setText('');
      });}}
  const deleteTodo=(indexValue)=>{
       fetch(
      `https://mahi-42a51-default-rtdb.firebaseio.com/todos/${key[indexValue]}.json`,
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },})
    const newTodo =todos.filter((todo ,index)=>index !==indexValue)
    setTodos(newTodo);

  
  }


    const updateTodo = (index) => {
  const todo = todos[index];
  const newTodos = [...todos];
  const newTodoText = window.prompt('Rename A Task');
  if (newTodoText) {
    const newTodo = { ...todo, text: newTodoText };
    newTodos[index] = newTodo;
    fetch(
      `https://mahi-42a51-default-rtdb.firebaseio.com/todos/${key[index]}.json`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ text: newTodo.text }),
      }
    )
      .then(() => {
        console.log('Updated successfully : ' + newTodo.text);
        setTodos(newTodos);
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

  

 



 

  return (
    <View style={styles.container}>
    <View style={styles.headings}>
    <Text style={styles.heading}>Daily Work Management</Text>
    </View>
    <View style={styles.inputContainer}>
       <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder='Enter Your Tasks To Do'
        />
         <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableOpacity>
        
    </View>
    <View>
    {!text&&<Text style={styles.message}>{message}</Text>}
    </View>
  
      <View style={styles.todosContainer}>
        <ScrollView>
        {todos.map((todo, index) => (
          <View key={index} style={styles.todoContainer}>
            <Text style={styles.todoText}>{todo.text}</Text>
            <TouchableOpacity style={styles.buttonDelete} onPress={() => deleteTodo(index)}>
              <Text style={styles.buttonDeleteText}>❌</Text>
            </TouchableOpacity>
              <TouchableOpacity style={styles.editIcon} onPress={()=>updateTodo(index)}>
             <MaterialCommunityIcons name="pencil" size={24} color="red" />
             </TouchableOpacity>
          </View>
        ))}
          </ScrollView>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headings:{
    background:' #13A6E6',
    width:'100%',
    height:100,
    borderRadius:10,
    padding:5,
    positon:'fixed',
  },
  heading:{
    fontSize:25,
    padding:10,
    marginTop:20,
    paddingLeft:30,
    positon:'fixed',
    fontFamily:'Cochin',
  },
 
  inputContainer:{
   positon:'fixed',
   background:'white',
   width:'100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
   marginBottom: 20,
   marginTop:20,
   marginLeft:10,
  },
  input:{
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius:8,
      fontFamily:'Cochin',
  },
   button: {

    height: 40,
    backgroundColor: '#13A6E6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
      fontFamily:'Cochin',
  },
   message:{  

   height:40,
   padding:10,
   borderRadius:10,
   width:'100%',
   fontSize:20,
   fontFamily:'Cochin',
   },
  todosContainer:{
   background:'white',
   width:'100%',
  justifyContent:'space-between', 
  },
   

  todoText:{
    width:195,
    fontFamily:'Cochin',
    padding:20,
    height:70,
    fontSize:25,
    marginTop:20,
    marginLeft:20,
    background:'#13A6E6',
    borderRadius:10,
    color:'white',

  },
  buttonDelete:{
    height: 30,
    width:35,
    backgroundColor: '#13A6E6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft:250,
    marginTop:-65,
    
  },
  editIcon:{
    marginLeft:250,
    marginTop:10,
    width:35,
    height:30,
    background:'#13A6E6',
    borderRadius:8,
    padding:3,
  }






 
  


});

export default TodoList;
