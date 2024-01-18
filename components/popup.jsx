import React, { useEffect, useState, } from 'react';
import {
    View, Text, StyleSheet, ScrollView, Modal, Image, TouchableHighlight, Dimensions,
    TouchableOpacity, TextInput, FlatList
} from 'react-native';

export default function Popup(props) {
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        if (props.visible) {
            setVisible(true);
            setMessage(props.message);
            setTitle(props.title);
        }
    }, [props.visible]);

    const closeModal = () => {
        setVisible(false);
        props.closeModal();
    }
        


    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                closeModal();
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.bodyText}>{message}</Text>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={styles.footerButton}
                            onPress={() => {
                                closeModal();
                            }}
                        >
                            <Text style={styles.footerButtonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: '#302E34',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#EA4D4A',
    },
    body: {
        paddingVertical: 10,
    },
    bodyText: {
        fontSize: 16,
        color: '#fff',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 10,
    },
    footerButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#EA4D4A',
    },
    footerButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});