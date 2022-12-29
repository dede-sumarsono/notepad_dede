import React from "react";
import { Text,StyleSheet } from "react-native";

const Notes = () => {
    return(
        <Text>Hello</Text>
    )
}

export const styles = StyleSheet.create({
    notesContainer:{
        paddingTop:10,
        paddingHorizontal:20,
        marginBottom:70,
        opacity:0.9
    },
    heading:{
        fontSize:30,
        fontWeight:'700',
        color:StyleSheet.color,
    },
    divider:{
        width:'100%',
        height:2,
        backgroundColor: StyleSheet.color,
        marginTop:5,
        marginBottom:5
    },
    item:{
        marginBottom: 20,
        padding:15,
        color:'black',
        opacity:0.8,
        marginTop: 10,
        shadowColor: StyleSheet.color,
        shadowOpacity:0.5,
        shadowOffset:{width: 0,height: 4},
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: StyleSheet.color,
        borderWidth: 2,
        borderRadius: 5,
        borderLeftWidth: 15,
    },
    index: {
        fontSize: 20,
        fontWeight: '800',
    },
    headingContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        backgroundColor: StyleSheet.color,
        width: 50,
        borderRadius:100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        height: 50
    },
    buttonText:{
        color: 'white',
        fontSize:32,
        fontWeight: '800'
    },
    scrollView:{
        marginBottom:70
    },
    note:{
        flexDirection: 'row',
        width: '75%'
    },
    text:{
        fontWeight: '700',
        fontSize: 17,
        alignSelf: 'center'
    },
    delete: {
        color: StyleSheet.color,
        fontWeight: '700',
        fontSize: 15
    },
    input: {
        height:40,
        paddingHorizontal: 20,
        width: '65%',
        fontSize: 19,
        color: 'black',
        fontWeight: '600',
        opacity: 0.8,
        shadowColor: StyleSheet.color,
        shadowOpacity: 0.4,
        shadowOffset: {width:0,height:4},
        shadowRadius: 9,
        elevation:5,
        backgroundColor: StyleSheet.color,
        borderWidth: 2,
        borderRadius: 5,
    },
    searchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginVertical: 8
    },
    searchButton:{
        backgroundColor: Style.color,
        alignItems:'center',
        justifyContent:'center',
        width: 60,
        borderRadius: 5,
        height: 40
    },
    searchButtonText: {
        color: 'white',
        fontWeight: '700',
        fontSize:12
    },
    emptyNoteContainer:{
        alignItems:'center',
        marginTop:240
    },
    emptyNoteText:{
        color : Style.color,
        fontWeight: '600',
        fontSize: 15
    },
    dateContainer:{
        marginTop:10,
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
})
export default Notes;