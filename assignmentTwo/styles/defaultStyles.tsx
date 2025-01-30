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
    },
    slidercontainer: {
        margin: 10,
        padding: 10,
        backgroundColor: colors.secondary.light,
    },
});

export default defaultStyles