import React, { Component } from 'react';
import { Text, View, StatusBar, ScrollView, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import List from '../../assets/images/list.svg';
import Filter from '../../assets/images/filter.svg';

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

export default class ReceivedOrderScreen extends React.Component {
    constructor(props) {
        super(props);
    }


    _menu = null;

    setMenuRef = (ref) => {
      this._menu = ref;
    };
  
    hideMenu(searchTypeee) {
      this._menu.hide();
      // this.setState({ searchModalVisible: true });
      // console.log(searchTypeee);
      // this.searchType = searchTypeee;
  
      // if (searchTypeee == appConstant.AllStockSearch) {
      //   this.setState({ searchModalVisible: false });
      //   // this.loadMoreData();
      //   console.log('done');
      // } else {
      //   console.log('not done');
      // }
    }
  
    showMenu = () => {
      this._menu.show();
    };

    render() {
        return (
            <View>
                <StatusBar backgroundColor="#045589" />

                {/* SEARCH BAR */}
                <LinearGradient
                    colors={['#025487', '#2165B9']}
                    style={{ width: '100%' }}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}>
                    <View style={{ height: 60, flexDirection: 'row' }}>

                        <TextInput
                            keyboardType="default"
                            returnKeyType="search"
                            placeholder="Search"
                            onSubmitEditing={() => this.searchItem('StockSearchByName')}
                            onChangeText={(SEARCH_ITEM) => this.setState({ SEARCH_ITEM })}
                            style={{
                                fontFamily: 'TTNorms-Regular',
                                marginTop: 5,
                                fontSize: 15,
                                marginVertical: 10,
                                alignSelf: 'center',
                                color: '#fff',
                                width: 50,
                                flex: 1,
                                borderColor: '#095892',
                                borderWidth: 2,
                                borderRadius: 20
                            }}
                        />

                        {/* SORT FILTER */}

                        <Menu
                            ref={this.setMenuRef}
                            button={
                                <Filter
                                    style={{
                                        marginHorizontal: 20,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        alignSelf: 'center',
                                        marginTop: 10
                                    }}
                                    onPress={this.showMenu}
                                />
                            }>
                            <MenuItem
                                onPress={() => this.hideMenu(appConstant.AllStockSearch)}>
                                All Stock
                </MenuItem>
                            <MenuDivider />
                            <MenuItem
                                onPress={() => this.hideMenu(appConstant.StockSearchByName)}>
                                Search By Name
                </MenuItem>
                            <MenuDivider />
                            <MenuItem
                                onPress={() => this.hideMenu(appConstant.StockSearchByGroup)}>
                                Search By Group
                </MenuItem>
                            <MenuDivider />
                            <MenuItem
                                onPress={() =>
                                    this.hideMenu(appConstant.StockSearchByItemCode)
                                }>
                                Search By Item Code
                </MenuItem>
                        </Menu>
                        {/* SORT FILTER */}
                    </View>
                </LinearGradient>
                {/* SEARCH BAR */}

                <ScrollView>

                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Order No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>SOA-000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>


                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Order No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>SOA-000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>


                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Order No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>SOA-000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>


                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Order No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>SOA-000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>


                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Order No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>SOA-000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>


                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Order No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>SOA-000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>


                    <Card
                        containerStyle={{
                            borderRadius: 10,
                            elevation: 4,
                            marginHorizontal: '4%',
                        }}>
                        <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 14, color: '#000', fontWeight: 'bold', marginBottom: 10 }}>Ajay Sharma</Text>



                        <View style={{ flexDirection: 'row', flex: 2 }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Order No: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>SOA-000000017</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Date: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>20-Aug-2020</Text>

                            </View>
                        </View>


                        <View style={{
                            borderBottomColor: '#D8D8D8',
                            borderBottomWidth: 1,
                            marginVertical: 8
                        }} />


                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ flexDirection: 'row', flex: 1 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Amount: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>190</Text>

                            </View>


                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 20 }}>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', fontWeight: 'bold', textAlign: 'center' }}>Total Items: </Text>

                                <Text style={{ fontFamily: 'TTNorms-Regular', fontSize: 11, color: '#000', textAlign: 'center', marginTop: 2 }}>1</Text>

                            </View>
                        </View>



                    </Card>


                </ScrollView>

            </View>

        );
    }
}
