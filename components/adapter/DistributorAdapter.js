import React from 'react';
import { Text, View, Alert, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements'

const DistributorAdapter = ({ distributorName, address, distributorCode }) => {
    return (
        <View style={{ marginBottom: 5 }}>
            <Card containerStyle={{ borderRadius: 10, elevation: 4, marginHorizontal: '4%' }}>
                <Text style={{ fontFamily: 'TTNorms-Regular', marginTop: 5 }}>{distributorName}</Text>
                <Text style={{ fontFamily: 'TTNorms-Regular', marginTop: 5 }}>{address}</Text>
                <Text style={{ fontFamily: 'TTNorms-Regular', marginTop: 5 }}>{distributorCode}</Text>
            </Card>
        </View>
    )
}
export default DistributorAdapter;