import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Switch, Modal } from 'react-native';
import Popup from './popup.jsx'
import { MaterialIcons, Feather } from '@expo/vector-icons';
import axios from 'axios';

function ListaPersonalDetalle(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const [editable, setEditable] = useState(false);
    const [actualizarHorario, setActualizarHorario] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupData, setPopupData] = useState({
        titulo: '',
        mensaje: '',
    });
    const [backHome, setBackHome] = useState(false);
    const [horario, setHorario] = useState({
        entrada_manana: '',
        salida_manana: '',
        entrada_tarde: '',
        salida_tarde: '',
    });

    useEffect(() => {
        if (backHome) {
            props.navigation.navigate('Personal');
        }
    }, [backHome]);

    // componente para ver el detalle de los datos del personal 
    // recibe como parametro el id del personal
    const { id } = props.route.params;
    const [personal, setPersonal] = useState({
        id: 0,
        nombre: "Ingrese nombre",
        cargo: "Ingrese cargo",
        celular: 99999999,
        correo: "ingrese correo",
        direccion: "ingrese direccion",
        dni: 999999,
    });
    useEffect(() => {
        if (id == 0) {
            setEditable(true);
        }else{
            axios.get(`http://192.168.1.18:3000/usuarios/${id}`)
            .then(function (response) {
                setPersonal(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

            
        }
        
    }, []);
    useEffect(() => {
        if (id == 0) {
            setEditable(true);
        }else{
            console.log(`http://192.168.1.18:3000/horariosLaborales/${id}`)
            axios.get(`http://192.168.1.18:3000/horariosLaborales/${id}`)
            .then(function (response) {
                console.log(response.data);
                setHorario(response.data);
                setActualizarHorario(true);
            })
            .catch(function (error) {
                console.log(`error al traer horarios de usuario ${error}`);
            });

            
        }
        
    }, []);
    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
    };

    const sendDatos = async () => {
       if(editable==true){
             try {
                const usuario = {
                    nombre: personal.nombre,
                    cargo: personal.cargo,
                    celular: Number(personal.celular),
                    correo: personal.correo,
                    direccion: personal.direccion,
                    dni: Number(personal.dni)
                }
            console.log(usuario);
            const res = await axios.post('http://192.168.1.18:3000/usuarios', usuario);
            console.log(res.data);
            setBackHome(true);
        } catch (error) {
            console.log(error); 
            console.log(error.response.data);
            setEditable(true);
            setPopupData({
                titulo: 'Error',
                mensaje: error.response.data.message,
            });
            setPopupVisible(true);

        }
       }else{
              try {
                const res = await axios.put(`http://192.168.1.18:3000/usuarios`, {
                    id: personal.id,
                    nombre: personal.nombre,
                    cargo: personal.cargo,
                    celular: Number(personal.celular),
                    correo: personal.correo,
                    direccion: personal.direccion,
                    dni: Number(personal.dni)
                });
                console.log(res.data);
                setBackHome(true);
            } catch (error) {
                console.log(error.response.data);
                setEditable(true);
                setPopupData({
                    titulo: 'Error',
                    mensaje: error.response.data.message,
                });
                setPopupVisible(true);

            }
       }
    }

    const sendHorarios = async () => {
        const formatoHoraRegex = /^([0-1]?[0-9]|2[0-3]):([0-5]\d)$/;
        try {
            for (const key in horario) {
                console.log(horario[key]);
                if (!formatoHoraRegex.test(horario[key])) {
                    
                    setPopupData({
                        titulo: 'Error',
                        mensaje: 'El formato de hora es incorrecto',
                    });
                    setPopupVisible(true);
                    return;
                }
            }
         res = await axios.post('http://192.168.1.18:3000/horariosLaborales', {
                usuario_id: personal.id,
                entrada_manana: horario.entrada_manana,
                salida_manana: horario.salida_manana,
                entrada_tarde: horario.entrada_tarde,
                salida_tarde: horario.salida_tarde,
            });
            console.log(res.data);
            setModalVisible(false);
            setPopupData({
                titulo: 'Exito',
                mensaje: "Guardado con exito",
            });
            setPopupVisible(true);

            

            
            
        } catch (error) {
            console.log(error.response.data.message);
            if(error.response.status == 400){
                setActualizarHorario(true);
                setPopupData({
                    titulo: 'Error',
                    mensaje: error.response.data.message,
                });
                setPopupVisible(true);
                setModalVisible(false);

            }
        }
    }

    const sendActualizarHorarios = async () => {
        console.log("actualizar horarios"); 
        const formatoHoraRegex2 = /^([0-1]?[0-9]|2[0-3]):([0-5]\d)$/;
        const horario_data = {
            entrada_manana: horario.entrada_manana,
            salida_manana: horario.salida_manana,
            entrada_tarde: horario.entrada_tarde,
            salida_tarde: horario.salida_tarde,
        }; 
        try {
            for (const key in horario_data) {
                
                if (!formatoHoraRegex2.test(horario[key])) {
                    setPopupData({
                        titulo: 'Error',
                        mensaje: 'El formato de hora al actualizar es incorrecto',
                    });
                    setPopupVisible(true);
                    return;
                }
            }
            
            const res = await axios.put(`http://192.168.1.18:3000/horariosLaborales/${horario.id}`, {
                usuario_id: personal.id,
                entrada_manana: horario.entrada_manana,
                salida_manana: horario.salida_manana,
                entrada_tarde: horario.entrada_tarde,
                salida_tarde: horario.salida_tarde,
                id: horario.id,
            
            });
            console.log(res.data);
           
            setModalVisible(false);
            setPopupData({
                titulo: 'Exito',
                mensaje: "Actualizado con exito",
            });
            setPopupVisible(true);
         

        } catch (error) {
            console.log(error.response.data.message);
            setPopupData({
                titulo: 'Error',
                mensaje: error.response.data.message,
            });
            setPopupVisible(true);
            setModalVisible(false);

           
        }
    }

    const renderPopup = () => {
        return <Popup
            visible={popupVisible}
            title= {popupData.titulo}
            message= {popupData.mensaje}
            closeModal={() => setPopupVisible(false)}
        />
    }

    return (
        <View style={styles.container}>
            <View style={styles.cabecera}>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Detalle del Personal</Text>

            </View>
            <View style={styles.contenedor}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '60%'}}>
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
                        <TextInput style={{ color: '#EA4D4A', fontSize: 20, fontWeight: 'bold', borderWidth: !editable ? 0 : 1, borderColor: !editable ? '#fff' : 'black', borderRadius: 5, padding: 5, backgroundColor: !editable ? 'transparent' : '#ccc' }} editable={editable}
                            multiline
                            onChangeText={(text) => setPersonal({ ...personal, nombre: text })}
                        >{personal.nombre}</TextInput>
                        <TextInput style={{ color: !editable ? '#fff' : 'black', fontSize: 16, borderWidth: !editable ? 0 : 1, borderColor: !editable ? '#fff' : 'black', borderRadius: 5, padding: 5, backgroundColor: !editable ? 'transparent' : '#ccc' }} editable={editable}
                            onChangeText={(text) => setPersonal({ ...personal, cargo: text })}
                        >{(personal.cargo).toUpperCase()}</TextInput>
                    </View>
                </View>
                <View style={{ flexDirection: 'colum', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Celular: </Text>
                        <TextInput style={{ height: 30, color: !editable ? '#fff' : 'black', fontSize: 16, borderWidth: !editable ? 0 : 1, borderColor: !editable ? '#fff' : 'black', borderRadius: 5, padding: 5, backgroundColor: !editable ? 'transparent' : '#ccc' }} editable={editable}
                            keyboardType="numeric"
                            onChangeText={(text) => setPersonal({ ...personal, celular: Number(text) })}
                        >
                            {personal.celular}
                        </TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Correo: </Text>
                        <TextInput style={{ height: 30, color: !editable ? '#fff' : 'black', fontSize: 16, borderWidth: !editable ? 0 : 1, borderColor: !editable ? '#fff' : 'black', borderRadius: 5, padding: 5, backgroundColor: !editable ? 'transparent' : '#ccc' }} editable={editable}
                            onChangeText={(text) => setPersonal({ ...personal, correo: text })}
                        >
                            {personal.correo}
                        </TextInput>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Direccion: </Text>
                        <TextInput style={{ height: 30, color: !editable ? '#fff' : 'black', fontSize: 16, borderWidth: !editable ? 0 : 1, borderColor: !editable ? '#fff' : 'black', borderRadius: 5, padding: 5, backgroundColor: !editable ? 'transparent' : '#ccc' }} editable={editable}
                            onChangeText={(text) => setPersonal({ ...personal, direccion: text })}
                        >
                            {personal.direccion}
                        </TextInput>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>DNI: </Text>
                        <TextInput style={{ height: 30, color: !editable ? '#fff' : 'black', fontSize: 16, borderWidth: !editable ? 0 : 1, borderColor: !editable ? '#fff' : 'black', borderRadius: 5, padding: 5, backgroundColor: !editable ? 'transparent' : '#ccc' }} editable={editable}
                            keyboardType="numeric"
                            onChangeText={(text) => setPersonal({ ...personal, dni: Number(text) })}
                        >
                            {personal.dni}
                        </TextInput>
                    </View>

                    {
                        !actualizarHorario ?
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, backgroundColor:  personal.id ? '#EA4D4A' : "#aaa" , padding: 10, borderRadius: 5 }}
                            onPress={() => 
                                {if(personal.id){
                                        setModalVisible(true)
                                    }else{
                                        setPopupData({
                                            titulo: 'Error',
                                            mensaje: 'Debe guardar los datos del personal primero',
                                        });
                                        setPopupVisible(true);
                                    
                                    }
                                }
                            }
                        >
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginRight: 10 }}>Horarios</Text>
                            <Feather name="clock" size={24} color="white" />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, backgroundColor: '#EA4D4A', padding: 10, borderRadius: 5 }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginRight: 10 }}>Actualizar</Text>
                            <Feather name="clock" size={24} color="white" />
                        </TouchableOpacity>
                        
                    }

                   


                    {editable ?
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, backgroundColor: '#EA4D4A', padding: 10, borderRadius: 5 }}
                            onPress={() => {
                                sendDatos();
                                setEditable(false);
                            }
                            }>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginRight: 10 }}>Guardar</Text>
                            <Feather name="save" size={24} color="white" />
                        </TouchableOpacity>
                        :
                       <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, backgroundColor: '#EA4D4A', padding: 10, borderRadius: 5 }}
                            onPress={() => {
                                setEditable(true);
                                }}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginRight: 10 }}>Editar</Text>
                            <Feather name="edit" size={24} color="white" />
                        </TouchableOpacity>
                        

                    }

                    <Modal animationType="slide" transparent={true} visible={modalVisible} >
                        <View style={{ ...styles.centeredView }}>
                            <View style={styles.modalView}>
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Horario laboral</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 20 }}>
                                    <TextInput style={{ backgroundColor: '#3d3b3a', borderRadius: 5, padding: 5, marginHorizontal: 10, height: 40, width: 200, color: '#fff' }} placeholder="Ingreso mañanas" placeholderTextColor="gray" 
                                     value={horario.entrada_manana}
                                    onChangeText={(text) => setHorario({ ...horario, entrada_manana: text })}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                                    <TextInput style={{ backgroundColor: '#3d3b3a', borderRadius: 5, padding: 5, marginHorizontal: 10, height: 40, width: 200, color: '#fff' }} placeholder="Salida mañanas" placeholderTextColor="gray" 
                                      value={horario.salida_manana}
                                    onChangeText={(text) => setHorario({ ...horario, salida_manana: text })}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                                    <TextInput style={{ backgroundColor: '#3d3b3a', borderRadius: 5, padding: 5, marginHorizontal: 10, height: 40, width: 200, color: '#fff' }} placeholder="Ingreso tardes" placeholderTextColor="gray"
                                        value={horario.entrada_tarde}
                                    onChangeText={(text) => setHorario({ ...horario, entrada_tarde: text })}
                                     />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                                    <TextInput style={{ backgroundColor: '#3d3b3a', borderRadius: 5, padding: 5, marginHorizontal: 10, height: 40, width: 200, color: '#fff' }} placeholder="Salida tardes" placeholderTextColor="gray" 
                                        value={horario.salida_tarde}
                                    onChangeText={(text) => setHorario({ ...horario, salida_tarde: text })}
                                    />
                                </View>
                                <View style={styles.sugerenciasContainer}>
                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#EA4D4A", marginBottom: 10 }}
                                            onPress={() => {
                                                actualizarHorario ? sendActualizarHorarios() : sendHorarios();
                                            }}
                                        >
                                            <Text style={{ color: 'white' }}>Guardar</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ ...styles.openButton, backgroundColor: "#222" }}
                                            onPress={() => {
                                                setModalVisible(!modalVisible);
                                            }}
                                        >
                                            <Text style={{ color: 'white' }}>Cerrar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    {
                        popupVisible ? 
                        renderPopup()
                         : null
                    }

                  
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
    modalView: {
        margin: 20,
        backgroundColor: '#302E34',
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",


    },
    sugerenciasContainer: {
        borderRadius: 5,
        padding: 5,
        marginHorizontal: 10,
        width: 200,
        marginTop: 10,
        marginBottom: 20,
    },
    sugerencia: {
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