import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Switch, Modal } from 'react-native';
import { MaterialIcons, Feather   } from '@expo/vector-icons';


function ListaPersonalDetalle(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [editable, setEditable] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    // componente para ver el detalle de los datos del personal 
    // recibe como parametro el id del personal
    const { id } = props.route.params;
    console.log(typeof id);
    const [personal, setPersonal] = useState({
        id: 0,
        nombre: 'Ingresar nombre',
        puesto: 'Ingresar puesto',
        celular: '999999999',
        correo: 'Ingresar correo',
        direccion: 'Ingresar direccion',
        dni: 'Ingresar DNI',
        ingreso_m: '8:00',
        estado: 'Activo',
    });
    useEffect(() => {
        if(id==0){
            setEditable(true);

        }
        // aqui se debe hacer la peticion al servidor para obtener los datos del personal
        // y se debe guardar en el estado personal
    }, []);
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };
    return (
        <View style={styles.container}>
            <View style={styles.cabecera}>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Detalle del Personal</Text>
            </View>
            <View style={styles.contenedor}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{
                        width: 50,
                        height: 50,
                        borderRadius: 60,
                        backgroundColor: '#EA4D4A',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 3,
                    }}>
                        <MaterialIcons name="person" size={35} color="white" />
                    </View>
                    <View style={{ marginLeft: 20, flexDirection: 'column', justifyContent: 'center', }}>
                        <TextInput style={{ color: '#EA4D4A', fontSize: 20, fontWeight: 'bold',borderWidth: !editable ? 0:1, borderColor: !editable ? '#fff' : 'black', borderRadius: 5, padding: 5 , backgroundColor: !editable ? 'transparent' : '#ccc'}} editable={editable}>{personal.nombre}</TextInput>
                        <TextInput style={{ color:!editable ? '#fff' : 'black', fontSize: 16 , borderWidth: !editable ? 0:1, borderColor: !editable ? '#fff' : 'black', borderRadius: 5, padding: 5 , backgroundColor: !editable ? 'transparent' : '#ccc'}} editable={editable}>{personal.puesto}</TextInput>
                    </View>
                </View>
                <View style={{ flexDirection: 'colum', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Celular: </Text>
                        <TextInput style={{ height: 30, color:!editable ? '#fff' : 'black', fontSize: 16, borderWidth: !editable ? 0:1, borderColor: !editable ? '#fff' : 'black', borderRadius: 5, padding: 5 , backgroundColor: !editable ? 'transparent' : '#ccc'}} editable={editable}>
                            {personal.celular}
                        </TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Correo: </Text>
                        <TextInput style={{ height: 30, color:!editable ? '#fff' : 'black', fontSize: 16, borderWidth: !editable ? 0:1, borderColor: !editable ? '#fff' : 'black', borderRadius: 5, padding: 5 , backgroundColor: !editable ? 'transparent' : '#ccc'}} editable={editable}>
                            {personal.correo}
                        </TextInput>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Direccion: </Text>
                        <TextInput style={{ height: 30, color:!editable ? '#fff' : 'black', fontSize: 16, borderWidth: !editable ? 0:1, borderColor: !editable ? '#fff' : 'black', borderRadius: 5, padding: 5 , backgroundColor: !editable ? 'transparent' : '#ccc'}} editable={editable}>
                            {personal.direccion}
                        </TextInput>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>DNI: </Text>
                        <TextInput style={{ height: 30, color:!editable ? '#fff' : 'black', fontSize: 16, borderWidth: !editable ? 0:1, borderColor: !editable ? '#fff' : 'black', borderRadius: 5, padding: 5 , backgroundColor: !editable ? 'transparent' : '#ccc'}} editable={editable}>
                            {personal.dni}
                        </TextInput>
                    </View>

                  

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 0 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Estado: </Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={personal.estado ? '#f54b4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={personal.estado}
                        />
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20,backgroundColor: '#EA4D4A', padding: 10, borderRadius: 5}}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginRight:10 }}>Horarios</Text>
                        <Feather name="clock" size={24} color="white" />
                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20,backgroundColor: '#EA4D4A', padding: 10, borderRadius: 5}}
                        onPress={() => setEditable(!editable)}>
                        {
                            editable ? 
                            <>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginRight:10 }}>Guardar</Text> 
                            <Feather name="save" size={24} color="white" />
                            </>
                            : 
                            <>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginRight:10 }}>Editar</Text>
                                <Feather name="edit" size={24} color="white" /> 
                            </>
                        }
                    </TouchableOpacity>
                    
                    <Modal  animationType="slide" transparent={true} visible={modalVisible} >
                        <View style={{...styles.centeredView}}>
                            <View style={styles.modalView}>
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Horario laboral</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 20 }}>
                                    <TextInput style={{ backgroundColor: '#3d3b3a', borderRadius: 5, padding: 5, marginHorizontal: 10, height: 40, width: 200, color: '#fff' }} placeholder="Ingreso mañanas" placeholderTextColor="gray" />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                                    <TextInput style={{ backgroundColor: '#3d3b3a', borderRadius: 5, padding: 5, marginHorizontal: 10, height: 40, width: 200, color: '#fff' }} placeholder="Salida mañanas" placeholderTextColor="gray" />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                                    <TextInput style={{ backgroundColor: '#3d3b3a', borderRadius: 5, padding: 5, marginHorizontal: 10, height: 40, width: 200, color: '#fff' }} placeholder="Ingreso tardes" placeholderTextColor="gray" />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                                    <TextInput style={{ backgroundColor: '#3d3b3a', borderRadius: 5, padding: 5, marginHorizontal: 10, height: 40, width: 200, color: '#fff' }} placeholder="Salida tardes" placeholderTextColor="gray" />
                                </View>
                                <View style={styles.sugerenciasContainer}>
                               
                                        
                                <View style={{alignItems: 'center',justifyContent: 'center'}}>
                                    <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#EA4D4A",marginBottom:10 }}>
                                        <Text style={{color:'white'}}>Guardar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#222" }}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Text style={{color:'white'}}>Cerrar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            </View>
                        </View>
                    </Modal>

                </View>
            </View>
        </View>
    );


}

export default ListaPersonalDetalle;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#302E34',
        paddingTop: 40,

    },
    lista: {
        borderBottomWidth: 1,
        borderBottomColor: '#444',

    },
    cabecera: {
        backgroundColor: '#302E34',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    },
    contenedor: {
        backgroundColor: '#302E34',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',

    },
    openButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,

    },
    modalView:{
        margin: 20,
        backgroundColor: '#302E34',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",

    
    },
    sugerenciasContainer:{
        borderRadius: 5,
        padding: 5,
        marginHorizontal: 10,
        width: 200,
        marginTop: 10,
        marginBottom: 20,
      },
      sugerencia:{
        backgroundColor: '#3d3b3a',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        marginHorizontal: 10,
        borderRadius: 5,
        marginBottom: 5,
        padding: 10,

      },
});