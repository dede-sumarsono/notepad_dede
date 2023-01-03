import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notes from './component/Note';
import AddNote from './component/AddNote';
import DeletedNotes from './component/DeletedNotes';
import React, {useState, useEffect} from 'react';
import EditNote from './component/EditNote';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function App() {

  const [note, setNote] = useState();
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState(new Date().toUTCString());
  const [moveToBin, setMoveToBin] = useState([]);

  function handleNote(){
    let newNote = note;
    let newNotes = [newNote, ...notes];
    setNotes(newNotes);
    setNote('');

    AsyncStorage.setItem('storedNotes', JSON.stringify(newNotes)).then(() => {
      setNotes(newNotes)
    }).catch(error => console.log(error))

    AsyncStorage.setItem('date', JSON.stringify(date)).then(() => {
      setDate(date);
    })
  }

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = () => {
    AsyncStorage.getItem('storedNotes').then(data => {
      if (data !== null) {
        setNotes(JSON.parse(date));
      }
    }).catch((error) => console.log(error))

    AsyncStorage.getItem('deletedNotes').then(data => {
      if (data !== null) {
        setMoveToBin(JSON.parse(date));
      }
    }).catch((error) => console.log(error))

    AsyncStorage.getItem('date');
  }

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name='Note'>
          {props => <Notes {...props} notes = {notes} moveToBin={moveToBin} setMoveToBin={setMoveToBin} setNotes={setNotes} note={note} setNote={setNote} date={date} setDate={setDate}/>}
        </Stack.Screen>

        <Stack.Screen name="AddNote">
          {props => <AddNote {...props} note={note} setNote={setNote} handleNote={handleNote}/>}
        </Stack.Screen>

        <Stack.Screen name="DeletedNotes">
          {props => <DeletedNotes {...props} moveToBin={moveToBin} setMoveToBin={setMoveToBin} notes={notes} setNotes={setNotes} date={date}/>}
        </Stack.Screen>

        <Stack.Screen name = "EditNote">
          {props => <EditNote {...props} notes={notes} setNotes={setNotes}/>}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

