import React, { useEffect, useState, useRef } from 'react';
import { FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskList from './src/components/TaskList';
import firebase from './src/config/firebaseConnection';
import Icon from 'react-native-vector-icons/Feather';


export default function App() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [keyEdit, setKeyEdit] = useState('');
  const inputRef = useRef()
  // console.disableYellowBox = true;

  useEffect(() => {
    async function getData() {
      await firebase.database().ref('tasks').on('value', (snapshot) => {
        setTasks([]);
        snapshot.forEach((child) => {
          let data = { key: child.key, nome: child.val().nome }
          setTasks(old => [...old, data]);
        })
      });
    }
    getData();
  }, [])

  async function handleAdd() {
    if (newTask !== '') {
      let tasks = await firebase.database().ref('tasks');
      if (keyEdit !== '') {
        await tasks.child(keyEdit).update({
          nome: newTask
        });
        setKeyEdit('');
      } else {
        let key = (await tasks.push()).key;
        await tasks.child(key).set({
          nome: newTask
        });
      }

      Keyboard.dismiss();
      setNewTask('');
    }
  }

  async function handleDelete(key) {
    await firebase.database().ref('tasks').child(key).remove();
  }

  async function handleEdit(task) {
    setNewTask(task.nome);
    setKeyEdit(task.key);
    inputRef.current.focus();
  }

  function cancelEdit() {
    setKeyEdit('');
    setNewTask('');
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>

      {(keyEdit !== '') && (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={cancelEdit}>
            <Icon
              name="x-circle"
              size={20}
              color="#FF0000"
            />
          </TouchableOpacity>
          <Text style={{ marginLeft: 5, marginBottom: 8, color: '#FF0000' }}>Você está editando uma tarefa</Text>
        </View>)}

      <View style={styles.containerTask}>
        <TextInput
          style={styles.input}
          placeholder="Digite a tarefa de hoje"
          underlineColorAndroid="transparent"
          value={newTask}
          ref={inputRef}
          onChangeText={(value) => { setNewTask(value) }}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TaskList data={item} editItem={handleEdit} deleteItem={handleDelete} />
        )}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10
  },
  containerTask: {
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 40
  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#121212',
    paddingLeft: 14,
    paddingRight: 14,
    marginLeft: 5,
    fontSize: 17
  },
  buttonText: {
    color: '#FFF',
    fontSize: 23
  }
})
