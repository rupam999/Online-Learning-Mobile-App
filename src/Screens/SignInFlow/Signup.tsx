import React, { useState, useContext } from 'react';
import { 
    View, Text, StyleSheet, Dimensions, Alert, SafeAreaView, KeyboardAvoidingView
} from 'react-native';
import {Button} from 'react-native-paper';
import {Formik} from 'formik';
import TextField from '../../components/TextInput';
// import {Store} from '../../contexts/Store';
import {capitalize} from '../../utils/Utilities';
// import {handleLogin} from '../../api/handleLogin';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const Signup = ({navigation}: any) => {
    const [showLoading, setShowLoading] = useState(false);
    // const {setUser} = useContext(Store);

    return (
      <KeyboardAvoidingView style={ styles.FullBody }>
        <SafeAreaView>
          <View style={ styles.MainContainer }>
            <Text style={ styles.MainHeading }>Crack<Text style={ styles.ColorHeading }>IT</Text></Text>
            <Text></Text>
            <View style={ styles.FormArea }>
              <>
                {/* FORM BODY */}
                <Formik
                initialValues={{
                    fullname: '',
                    email: '',
                    password: '',
                    zipcode: '',
                    contact: '',
                    type: 'Student',
                }}
                onSubmit={async (values) => {
                    navigation.navigate('TeacherBottomTab')
                    // const res = await handleSignup(values);
                    // if (res.data) {
                    //   values.uid = res.data.id;
                    //   values.credits = 1000;
                    //   setUser({...values, token: res.data.token});
                    //   storeData('user', {...values, token: res.data.token});
                    //   navigation.navigate(capitalize(values.type));
                    // }
                }}>
                {({handleChange, handleSubmit, setFieldValue, values}) => (
                    <View>
                        <View>
                            <TextField
                                label="Full Name"
                                handleChange={handleChange('fullname')}
                                value={values.fullname}
                            />
                            <TextField
                                label="Mobile No."
                                handleChange={handleChange('contact')}
                                value={values.contact}
                            />
                            <TextField
                                label="Zipcode"
                                handleChange={handleChange('zipcode')}
                                value={values.zipcode}
                            />

                            <TextField
                                label="Email Id"
                                handleChange={handleChange('email')}
                                value={values.email}
                            />
                            <TextField
                                label="Enter Password"
                                secure={true}
                                handleChange={handleChange('password')}
                                value={values.password}
                            />
                        </View>
                        <View>
                            <Button
                                mode="contained"
                                onPress={handleSubmit}
                                style={styles.btn}>
                                <Text style={styles.btnText}>Sign Up</Text>
                            </Button>
                        </View>
                    </View>
                )}
                </Formik>
                
                <Text style={ styles.accountText }>Already have an Account ? <Text style={ styles.LoginText } onPress={ () => { navigation.navigate('Login') } }> Sign In Now</Text></Text>
              </>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  FullBody: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: '#fff',
    paddingLeft: '5%',
    paddingRight: '5.5%',
  },
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
  },
  MainHeading: {
    color: '#000',
    fontSize: 44,
    letterSpacing: 2.5,
  },
  ColorHeading: {
    fontSize: 44,
    color: '#28AAD8'
  },
  accountText: {
    textAlign: 'center',
    marginTop: '5%',
    fontSize: 16,
  },
  LoginText: {
    color: '#28AAD8',
    fontSize: 16,
  },
  submitBody: {},
  btn: { 
    backgroundColor: '#28AAD8', 
    width: width*.92, 
    borderRadius: 10,
    height: 45,
    marginTop: '10%',
    shadowColor: "#28AAD8",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  btnText: {
    color: '#fff',
    fontSize: 17,
    textTransform: 'uppercase',
    paddingLeft: '42.5%',
  },
  FormArea: {
    width: width,
    paddingLeft: '5%',
    paddingRight: '5.5%',
  },
  FormContent: {
    marginBottom: '1.5%',
  },
});