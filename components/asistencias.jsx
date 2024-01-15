import React, { useEffect, useState, } from 'react';
import {
    View, Text, StyleSheet, ScrollView, Modal, Image, TouchableHighlight, Dimensions,
    TouchableOpacity, TextInput
} from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function Asistencias() {
    const [ancho, setAncho] = useState(Dimensions.get('window').width);

    const varDateDesde = () => {
        const date = new Date();
        date.setDate(1);
        return date;
    }

    const [modalVisible, setModalVisible] = useState(false);
    
    const [date_desde, setDateDesde] = useState(varDateDesde());
    const [date_hasta, setDateHasta] = useState(new Date());
    const [datos_tabla, setDatosTabla] = useState([
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
        ['img', 'Juan Perez', 'Tarde', '2021-10-01'],
    ]);

    const navigation = useNavigation();



    const showModeDsde = () => {
        DateTimePickerAndroid.open({
            value: date_desde,
            onChange: (event, selectedDate) => {
                const currentDate = selectedDate;
                setDateDesde(currentDate);
            },
            mode: 'date',
            is24Hour: true,
        });
    };
    const showModeHasta = () => {
        DateTimePickerAndroid.open({
            value: date_hasta,
            onChange: (event, selectedDate) => {
                const currentDate = selectedDate;
                setDateHasta(currentDate);
            },
            mode: 'date',
            is24Hour: true,
        });
    };


    function getDateString(fecha) {

        if (Platform.OS === 'ios')
            return fecha.toLocaleDateString('es-ES', {
                weekday: 'short',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            });
        else {

            var
                monthName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                utc = fecha.getTime() + fecha.getTimezoneOffset() * 60000,
                US_time = utc + (3600000 * -4),
                US_date = new Date(US_time);

            return US_date.getDate() + " de " + (monthName[US_date.getMonth() % 12]).toLowerCase() + " del " + US_date.getFullYear();
        }
    }
    function dateToYMD(date) {
        var d = date.getDate();
        var m = date.getMonth() + 1; //Month from 0 to 11
        var y = date.getFullYear();
        return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    }



    const datos = {
        tableHead: ['FOTO', 'NOMBRE', 'TURNO', 'FECHA'],
        widthArr: [100, 200, 160, 150],

    }

    return (
        <View style={[styles.container, { marginTop: 0 }]}>
            <View style={styles.cabecera}>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Asistencias</Text>
            </View>
            <View style={styles.contenedor}>

                <ScrollView horizontal={true} style={{ width: ancho * 1, }}>
                    <View>
                        <Table borderStyle={{}}>
                            <Row data={datos.tableHead} widthArr={datos.widthArr} style={styles.cabecera_tabla} textStyle={styles.texto_cabecera} />
                        </Table>
                        <ScrollView style={{ height: 400 }}>
                            <Table borderStyle={{}}>
                                {
                                    datos_tabla.map((rowData, index) => (
                                        <Row
                                            key={index}
                                            data={rowData}
                                            widthArr={datos.widthArr}
                                            style={
                                                index % 2 == 0
                                                    ? styles.lista
                                                    : [styles.lista, { backgroundColor: '#3d3b3a' }]
                                            }
                                            textStyle={styles.texto_lista}
                                        />
                                    ))
                                }
                            </Table>
                        </ScrollView>
                    </View>
                </ScrollView>

                <View style={styles.footer}>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10
                    }}
                    >
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Desde: </Text>
                                <TouchableOpacity onPress={showModeDsde} style={{
                                    flexDirection: 'row', alignItems: 'center', backgroundColor: "#3d3b3a",
                                    borderRadius: 5, padding: 5, marginHorizontal: 10, height: 40, justifyContent: 'center'
                                }}>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>{getDateString(date_desde)}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Hasta: </Text>
                                <TouchableOpacity onPress={showModeHasta} style={{
                                    flexDirection: 'row', alignItems: 'center', backgroundColor: "#3d3b3a",
                                    borderRadius: 5, padding: 5, marginHorizontal: 10, height: 40, justifyContent: 'center'
                                }}>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>{getDateString(date_hasta)}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', 
                        justifyContent: 'center', backgroundColor: '#EF772A', padding: 10, 
                        borderRadius: 5, marginLeft: 20, marginRight: 10
                         }}
                         onPress={() => { setModalVisible(true); }}
                         >
                            <FontAwesome name="filter" size={24} color="white" />
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, backgroundColor: '#EF772A', padding: 10, borderRadius: 5, marginBottom: 20 }}
                       
                    >
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Buscar</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <Modal  animationType="slide" transparent={true} visible={modalVisible}     backdropOpacity={0.5}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Filtrar usuario</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginTop: 20 }}>
                            <TextInput style={{ backgroundColor: '#3d3b3a', borderRadius: 5, padding: 5, marginHorizontal: 10, height: 40, width: 200, color: '#fff' }} placeholder="Nombre" placeholderTextColor="#fff" />
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EF772A', padding: 10, borderRadius: 5, marginLeft: 20, marginRight: 10 }}>
                                <FontAwesome name="search" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                                
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#EF772A" }}
                            onPress={() => {
                                setModalVisible(false);
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>


        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#302E34',
        paddingTop: 40,

    },
    lista: {
        height: 40,

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
    cabecera_tabla: {
        height: 50,
        backgroundColor: '#EF772A',

    },
    texto_cabecera: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    texto_lista: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    footer: {
        paddingTop: 10,
        backgroundColor: '#302E34',
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


});

/*
  react-native-table-component isn't being maintained by its original developer. Warnings like this are covered 
  in the repo's issues section, and there are great forks that fix some errors. The link from @P.Brew led me to 
  finding a dirty fix:

    Replace line 29 in rows.js:  
    
    <Cell
    ...

    // textStyle={[cellTextStyle && cellTextStyle(item), textStyle]} // built-in, replace or edit
    textStyle={textStyle} // replace with this

    ...
    />


*/

