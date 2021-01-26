import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView, Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CommonHeader from '../../components/StudentCommonHeader';
import SecondHeader from '../../components/SecondHeader';
import Colors from '../../utils/Color';
const {width, height} = Dimensions.get('screen');

export const AdminHome = ({navigation}: any) => {
    return (
        <>
            <StatusBar backgroundColor={Colors.headerBlue()} barStyle='light-content' />
            <SafeAreaView style={styles.container}>
                <CommonHeader
                    backgroundColor={Colors.headerBlue()}
                    title="Admin Dashboard"
                    fontColor={Colors.headerFontColor()}
                    navigation={navigation}
                    bookmark={true}
                    notification={true}
                />
                <SecondHeader
                    blank={true}
                />
                <View style={styles.mainBody}>
                    <View style={{marginTop: 20}}></View>
                    <View style={styles.mainRow}> 
                        <View style={styles.categoryViewStyle}>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('AdminAddNewUser')}>
                                <Text style={styles.subjectName}>Add New User</Text>
                                {/* <Text style={styles.teacherName}>{subjectInformation.teacher_name}</Text> */}
                                <Text></Text>
                                <View style={styles.iconView}>
                                    <Text style={styles.icon}>
                                        {/* <MaterialIcon name='laptop' size={40} color={Colors.darkColor()} /> */}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={styles.categoryViewStyle}>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate(null)}>
                                <Text style={styles.subjectName}>Add New Subject</Text>
                                {/* <Text style={styles.teacherName}>{subjectInformation.teacher_name}</Text> */}
                                <Text></Text>
                                <View style={styles.iconView}>
                                    <Text style={styles.icon}>
                                        {/* <MaterialIcon name='laptop' size={40} color={Colors.darkColor()} /> */}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    IntroductionMsg: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15,
    },
    mainBody: {
        width,
        minHeight: height * .85, 
        backgroundColor: Colors.F9Background(), 
        borderTopRightRadius: 30, 
        position: 'relative', 
        top: -30,
        paddingLeft: 15,
        paddingRight: 15
    },
    mainRow: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    subjectName: {
        fontSize: 16, 
        color: Colors.black(), 
        fontWeight: '700'
    },
    teacherName: {
        fontSize: 12, 
        paddingTop: 4
    },
    iconView: {
        width: '100%', 
        height: 70,
        alignItems: 'center'
    },
    icon: {
        textAlign: 'left', 
        marginLeft: 5,
    },
    categoryViewStyle: {
        backgroundColor: '#F2F2FA',
        width: Dimensions.get('screen').width/2.25,
        height: 160,
        borderRadius: 10,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: Colors.blueShadow(),
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginRight: 15,
    },
});
