import { StyleSheet } from 'react-native'
import React from 'react'
import colors from './colors';

const defaultStyles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary.light,
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        padding: 15,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: colors.tertiary.light,
        padding: 15,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: colors.tertiary.dark,
        padding: 15,
    },
    slidercontainer: {
        margin: 10,
        padding: 10,
        backgroundColor: colors.secondary.light,
    },
    textInput: {
        fontSize: 15,
        borderColor: colors.green,
        backgroundColor: colors.white,

    },
    modalcontainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    imageStyles: {
        width: 250,
        height: 100,
        margin: 10,
        borderColor: 'black',
        borderWidth: 3,
    }
});

export default defaultStyles