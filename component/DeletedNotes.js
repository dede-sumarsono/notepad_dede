import React from "react";
import { View } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import * as Style from '../assets/styles';
import { Text } from "react-native";
import {styles} from './Note';
import { TouchableOpacity } from "react-native";

const DeletedNotes = () => {
    return (
        
        <ScrollView>

            <View style={[styles.notesContainer]}>

                <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems:'center'}}>

                    <TouchableOpacity style={style.emptyButton}>
                        <Text style={style.emptyButtonText}>Undo All</Text>
                    </TouchableOpacity>

                    <Text style={{fontWeight:'700', fontSize: 18, color: Style.color}}>
                        Total:
                    </Text>

                    <TouchableOpacity style={style.emptyButton}>
                        <Text style={style.emptyButtonText}>Empty</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.divider}></View>
            
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