import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    
    return (
        <View style={{ padding:10 }}>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
            <Text style={styles.text}>Rating : {result.rating}</Text>
            <Text style={styles.text}>Reviews : {result.review_count}</Text>
            <Text style={styles.text}>Address : {result.location.address1}</Text>
            <Text style={styles.text}>Phone No : {result.display_phone}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        margin:5,
        height: 200,
        width: 200,
        marginBottom: 15
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    text: {
        marginLeft: 15,
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 5,
    }
});

export default ResultShowScreen;