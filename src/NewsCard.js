import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
// {
//     id: 0,
//     author: 'Omkar Godbole',
//     title: 'Bulls Exit BitMEX Bitcoin Futures Market',
//     description:
//       'Since the announcement from U.S. regulators, BitMEX has witnessed an outflow of more than 40,000 bitcoins, currently worth more than $422 million.',
//     imageUrl:
//       'https://static.coindesk.com/wp-content/uploads/2020/10/BitMEX-1180x628.png',
//   }

const NewsCard = ({news}) => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri:news.imageURL}}
                style={styles.image}
            />

            <Text style={styles.title} >{news.title}</Text>
            <Text style={styles.description} >{news.description}</Text>
            <Text style={styles.author} >{news.author}</Text>
        </View>
    )
}
export {NewsCard};

const styles = StyleSheet.create ({
    title: {
        fontWeight: 'bold',
        padding: 5,
        margin: 5

    },

    description: {
        padding: 5,
        margin:5

    },

    author: {
        textAlign: 'right',
        paddingRight: 15
    },
    container: {
        width: Dimensions.get('window').width*0.95,
        borderWidth: 1,
        borderColor: '#eceff1',
        padding: 5,
        margin: 5,
        borderRadius: 5
    },
    image: {
        height: Dimensions.get('window').height * 0.25,
        borderRadius: 5
    }

})