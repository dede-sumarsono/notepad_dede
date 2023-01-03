import React from "react";
import { Alert, View } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import * as Style from '../assets/styles';
import { Text } from "react-native";
import {styles} from './Note';
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DeletedNotes = ({...props}) => {

    function emptyBin(){
        Alert.alert(
            'Hapus semua',
            'Apakah anda yakin ingin menghapus semuanya catatan secara permanen? ',
            [{
                text: 'Tidak',
                onPress: () => console.log('Tidak ada yang ditekan'),
                style:'cancel'
            },
            {
                text:'Ya',
                onPress:() => {
                    let emptyArray = [...props.moveToBin];
                    emptyArray =[];
                    props.setMoveToBin(emptyArray);

                    AsyncStorage.setItem('deletedNotes',JSON.stringify(emptyArray)).then(()=> {
                        props.setMoveToBin(emptyArray)
                    }).catch(error => console.log(error))
                }
            }
        
        ]
        )
    }

    function undoAllNotes(){
        let deletedNotes = [...props.moveToBin];
        let notes = [...props.notes];
        deletedNotes.forEach((item, index) => {
            notes.push(item)
        })
        props.setMoveToBin([]);
        props.setNotes(deletedNotes);

        AsyncStorage.setItem('storedNotes',JSON.stringify(notes)).then(()=> {
            props.setNotes(notes)
        }).catch(error => console.log(error))

        AsyncStorage.setItem('deletedNotes',JSON.stringify([])).then(()=> {
            props.setMoveToBin([])
        }).catch(error => console.log(error))
    }

    function undoNote(index){
        let getBack = props.moveToBin[index];
        let array = [getBack, ...props.notes];
        props.setNotes(array);

        let newArray = [...props.moveToBin];
        newArray.splice(index, 1);
        props.setMoveToBin(newArray);

        AsyncStorage.setItem('storedNotes',JSON.stringify(array)).then(()=> {
            props.setNotes(array)
        }).catch(error => console.log(error))

    

        AsyncStorage.setItem('deletedNotes',JSON.stringify(newArray)).then(()=> {
            props.setMoveToBin(newArray)
        }).catch(error => console.log(error))
    }

    function permanentlyDelete(index){
        Alert.alert(
            'Hapus',
            'Apakah kamu yakin ingin menghapus catatan ini secara permanen?',
            [
                {
                    text: 'Tidak',
                    onPress: () => console.log('Tidak ada yang ditekan'),
                    style: 'cancel',
                },
                {
                    text: 'Ya',
                    onPress: () => {
                        let newArray = [...props.moveToBin];
                        newArray.splice(index,1);
                        props.setMoveToBin(newArray);

                        AsyncStorage.setItem('deletedNotes',JSON.stringify(newArray)).then(()=> {
                            props.setMoveToBin(newArray)
                        }).catch(error => console.log(error))
                    }
                }
            ]
        )
    }
    return (
        
        <ScrollView>

            <View style={[styles.notesContainer]}>

                <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}>

                    <TouchableOpacity style={style.emptyButton} onPress={() => undoAllNotes()}>
                        <Text style={style.emptyButtonText}>Undo All</Text>
                    </TouchableOpacity>

                    <Text style={{fontWeight:'700', fontSize: 18, color: Style.color}}>
                        Total: {props.moveToBin.length}
                    </Text>

                    <TouchableOpacity style={style.emptyButton} onPress={() => emptyBin()}>
                        <Text style={style.emptyButtonText}>Hapuskan</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.divider}></View>

                {props.moveToBin.length === 0 
                ?
                <View style={styles.emptyNoteContainer}>
                    <Text style={styles.emptyNoteText}>Tidak ada yang ditampilkan...!</Text>

                </View>
            :
            
            props.moveToBin.map((item, index) => 
                <View style={styles.item} key={index}>
                    <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                        <View style={styles.note}>
                            <Text style={styles.index}>{index+1}.</Text>
                            <Text style={styles.text}>{item}</Text>
                        </View>

                        <TouchableOpacity onPress={() => undoNote(index)}>
                            <Text style={styles.delete}>Undo</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dateContainer} >
                        <Text>{props.date}</Text>    

                        <TouchableOpacity onPress={() => permanentlyDelete(index)}>
                            <Text style={styles.delete}>Hapus</Text>
                        </TouchableOpacity>
                    </View>    
                </View>
            )}
            </View>
        </ScrollView>

    )
}

export const style = StyleSheet.create({
    emptyButton:{
        backgroundColor: Style.color,
        width: '25%',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        marginBottom: 5
    },
    emptyButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    }
})
export default DeletedNotes;