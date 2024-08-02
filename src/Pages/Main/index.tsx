import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator, ScrollView, ImageBackground } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const MainPage = () => {
    const [loading, setLoading] = useState(true);
    const gyms = [
        {
            "id": 1,
            "title": "Gym Rebel",
            "rating": 5.5,
            "price": 250,
            "favorite": false,
            "date": "02 Aug - 25 Aug, 2020",
            "popular_clasess": [
                {
                    "title": "Fitness Class",
                    "price": 350,
                    "favorite": false,
                    "location": "London, Spring st. 8",
                    "time": "1h 25min"
                }, {
                    "title": "Fitness with some friends",
                    "price": 250,
                    "favorite": false,
                    "location": "London, Spring st. 8",
                    "time": "45min"
                }, {
                    "title": "Yoga Class",
                    "price": 150,
                    "favorite": false,
                    "location": "London, Wellness st. 23",
                    "time": "25min"
                }, {
                    "title": "Crossfit Class",
                    "price": 200,
                    "favorite": false,
                    "location": "London,Villers st. 1",
                    "time": "1h 30min"
                }
            ]
        }, {
            "id": 2,
            "title": "Gym NonStop",
            "rating": 3.5,
            "price": 500,
            "favorite": false,
            "date": "01 Aug - 30 Aug, 2020",
            "popular_clasess": [
                {
                    "title": "Fitness Class",
                    "price": 350,
                    "favorite": false,
                    "location": "London, Spring st. 8",
                    "time": "1h 25min"
                }, {
                    "title": "Fitness with some friends",
                    "price": 250,
                    "favorite": false,
                    "location": "London, Spring st. 8",
                    "time": "45min"
                }, {
                    "title": "Yoga Class",
                    "price": 150,
                    "favorite": false,
                    "location": "London, Wellness st. 23",
                    "time": "25min"
                }
            ]
        }, {
            "id": 3,
            "title": "Gym Gym",
            "rating": 1.5,
            "price": 150,
            "favorite": false,
            "date": "05 Aug - 16 Aug, 2020",
            "popular_clasess": []
        }
    ]
    return (
        <ScrollView style={styles.container} >
                <Text style={styles.heading}>Recommended Gyms</Text>
               
                <FlatList
                    data={gyms}
                    keyExtractor={(index) => index.toString()}
                    horizontal
                    renderItem={({ item }: any) => {
                        return (
                            <ImageBackground source={require('../../assets/images/map.png')} resizeMode="cover" style={styles.backgroundImageView}>
                                <Image source={require('../../assets/images/gym_non_stop.png')} resizeMode="contain"/>
                                <View style={{ backgroundColor: '#FFFFFF', flex: 0.6, padding: 10 }}>
                                    <View style={styles.rowSpace}>
                                        <Text style={styles.titleText}>{item?.title}</Text>
                                        <Text style={styles.description}>${item?.price}/day</Text>
                                    </View>
                                    <View style={styles.rowSpace}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                                            <AntDesign name={'star'} color={'orange'} size={20} />
                                            <Text style={{ fontSize: 16, marginLeft: 3,color:'#000000' }}>{item?.rating}</Text>
                                        </View>
                                        <Text >{item?.date}</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        )
                    }}
                />
 <Text style={styles.heading}>Popular Classes</Text>
               
                    <FlatList
                        data={gyms}
                        keyExtractor={(index) => index.toString()}
                        contentContainerStyle={{paddingBottom:100}}
                        renderItem={({ item }: any) => {
                            return (
                                <FlatList
                                 data={item?.popular_clasess}
                                 renderItem={({item})=>{
                                    return(
                                        <TouchableOpacity style={styles.cardContainer}>
                                        <Image
                                            source={require('../../assets/images/crossfit_class.png')}
                                            resizeMode="contain"
                                            style={styles.image}
                                        />
                                        <View style={styles.view}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={styles.titleText}>{item?.title}</Text>
                                                <Text style={styles.description}>${item?.price}/day</Text>
                                            </View>
                                            <View style={{ justifyContent: 'space-evenly', flex: 1 }}>
                                                <Text style={{ fontSize: 18, color: '#333333' }}>{`Gym 'Seven'`}</Text>
                                                <View style={styles.align}>
                                                    <Ionicons name='location-sharp' size={20} color={'#3399FF'} />
                                                    <Text style={styles.text1}>{item?.location}</Text>
                                                </View>
                                                <View style={styles.align}>
                                                    <AntDesign name='clockcircle' size={20} color={'#3399FF'} />
                                                    <Text style={styles.text1}>{item?.time}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    )
                                 }}
                                
                                />
                               
                            )
                        }}
                    />
                    

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 10
    },
    cardContainer: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        flexDirection: 'row',
        height: 150,
    },
    image: {
        height: 'auto',
        width: '40%',
        borderRadius: 10,
    },
    view: {
        flex: 1,
        padding: 10
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        flex:1
    },
    description: {
        fontSize: 16,
        color: '#888',
    },
    backgroundImageView: {
        height: '40%',
        width: 'auto',
        justifyContent: 'flex-end',
        backgroundColor: '#d6d6d6',
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        borderRadius: 9,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
        color:'#000000'
      },
      align:{
        alignItems:'center',
        flexDirection:'row'
      },
      text1:{
        fontSize: 18, color: '#333333', marginLeft: 5 
      },
      rowSpace:{
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
      }
});
export default MainPage;