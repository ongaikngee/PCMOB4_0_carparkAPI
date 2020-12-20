import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function CarparkScreen({ navigation }) {
	const [ value, setValue ] = useState([]);
	const [ timestamp, setTimestamp ] = useState('');
	const CARPARK_CODE = 'DUXM';
	// const CARPARK_CODE = "C3ML";
	const API_URL = 'https://api.data.gov.sg/v1/transport/carpark-availability';
	// const API_URL = 'https://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2';
	// const API_URL = 'http://datamall2.mytransport.sg/ltaodataservice/ERPRates';
	// const API_URL = 'https://api.data.gov.sg/v1/transport/taxi-availability'
	// const API_URL = 'https://randomuser.me/api/?inc=gender,name,picture,login,email,dob';

	useEffect(() => {
		const interval = setInterval(loadAPI, 60000);
		return () => clearInterval(interval);
	}, []);

	const loadAPI = () => {
		// alert("hi");
		const carparkArray = [];
		fetch(API_URL)
			.then((response) => response.json())
			.then((responseData) => {
				//Getting updated timestamp and formatted it
				const TIMESTAMP = new Date (responseData.items[0].timestamp);
				setTimestamp(TIMESTAMP.toLocaleString());

				//Return only carpark that matched. 
				const DATA = responseData.items[0].carpark_data.filter(
					(item) => item.carpark_number == CARPARK_CODE
				)[0];

				//Return the types of carpark in CARPARK_CODE
				DATA.carpark_info.map((item) => {
					carparkArray.push({
						carpark_code: CARPARK_CODE,
						lot_type: item.lot_type,
						lots_available: item.lots_available,
						total_lots: item.total_lots,
						id: `${carparkArray.length}`,
					});
					// alert(carparkArray);
					setValue(carparkArray);
				});
			})
			.catch((error) => console.log(error));
	};

	const render = ({ item }) => {
		return (
			<View style={styles.renderContainer}>
				{/* <View>
				</View> */}
				<View style={styles.flatlistRender}>
					<View>
					<Text style={styles.renderCarparkCode}>{item.carpark_code}</Text>
						<Text>Type: {item.lot_type}</Text>
						<Text>Total Lots: {item.total_lots}</Text>
					</View>
					<View>
						<Text>Lots Available</Text>
						<Text style={styles.renderLotsAvailText}>{item.lots_available}</Text>
					</View>
				</View>
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
			{/* <Button onPress={addCarpark} title="Add Carpark" />
			<Button onPress={addSubScreen} title="Add Sub Screen" /> */}
			<FlatList style={styles.flatlist} data={value} renderItem={render} />
			<TouchableOpacity onPress={loadAPI} style={styles.refresh}>
				<Text style={styles.refreshText}>Refresh</Text>
			</TouchableOpacity>
			<Text style={styles.timestampText}>Updated : {timestamp}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#D5CAD6',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	flatlist: {
		width: '90%',
		alignSelf: 'center'
	},
	renderContainer: {
		backgroundColor: '#EAFFFD',
		borderWidth: 2,
		borderColor: '#6B5E62',
		borderRadius: 25,
		padding:50,
		paddingBottom:20,
		paddingTop:20,
		margin:10,
	},
	renderCarparkCode: {
		fontSize: 24,
		color: '#6B5E62',
		// alignSelf: 'center'
	},
	flatlistRender: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	renderLotsAvailText: {
		fontSize: 36,
		color: '#6B5E62',
		alignSelf: 'center'
	},
	refresh: {
		backgroundColor: '#C9F0FF',
		padding: 15,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10
	},
	refreshText: {
		color: '#6B5E62',
		fontSize: 24
	},
	timestampText: {
		color: '#6B5E62',
		marginBottom: 50
	}
});
