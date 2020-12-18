import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function CarparkScreen({ navigation }) {
	const [ value, setValue ] = useState([]);
	const CARPARK_CODE = 'DUXM';
	const API_URL = 'https://api.data.gov.sg/v1/transport/carpark-availability';
	// const API_URL = 'https://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2';
	// const API_URL = 'http://datamall2.mytransport.sg/ltaodataservice/ERPRates';
	// const API_URL = 'https://api.data.gov.sg/v1/transport/taxi-availability'
	// const API_URL = 'https://randomuser.me/api/?inc=gender,name,picture,login,email,dob';

	useEffect(() => {
		loadAPI();

		//This is to set interval
		// const interval = setInterval(() => loadAPI(), 5000);
		// return ()=>clearInterval(interval);
	}, []);

	const loadAPI = () => {
		//API Fetch
		fetch(API_URL)
			.then((response) => response.json())
			.then((responseData) => {
				const DATA = responseData.items[0].carpark_data.filter(
					(item) => item.carpark_number == CARPARK_CODE
				)[0];
				// console.log(DATA);
				DATA.carpark_info.map((item) => {
					// alert(item.lots_available + '/' + item.total_lots);

					setValue([
						...value,
						{
							lot_type: item.lot_type,
							lots_available: item.lots_available,
							total_lots: item.total_lots,
							id: '${value.length}'
						}
					]);
					// alert("Done");
				});
			})
			.catch((error) => console.log(error));

		// console.log(value);
	};

	const render = ({ item }) => {
		return (
			<View style={styles.flatlistRender}>
				<Text>{item.lots_available}</Text>
				<Text>{item.total_lots}</Text>
			</View>
		);
	};

	const addCarpark = () => {
		navigation.navigate('Add Carpark');
	};

	const addSubScreen = () => {
		navigation.navigate('2nd Screen');
	};

	return (
		<View style={styles.container}>
			<Text>Hello Carpark Availabilty</Text>
			<Button onPress={addCarpark} title="Add Carpark" />
			<Button onPress={addSubScreen} title="Add Sub Screen" />
			<TouchableOpacity onPress={loadAPI}>
				<Text>Refresh</Text>
			</TouchableOpacity>
			<FlatList style={styles.flatlist} data={value} renderItem={render} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'orange',
		height: '100%',
		justifyContent: 'space-around'
	},
	flatlist: {
		width: 300
	},
	flatlistRender:{
		marginTop:30,
	}
});
