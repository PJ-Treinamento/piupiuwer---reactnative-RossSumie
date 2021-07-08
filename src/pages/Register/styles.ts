import styled from "styled-components/native";
import {RectButton} from 'react-native-gesture-handler'

export const RegisterImg = styled.ImageBackground`
    height:250px;
`

export const RegisterField = styled.View`
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    background-color: #f1f1f1;
    flex:1;
`
export const Title = styled.Text`
    color:#ffffff;
    align-self: auto;
    padding: 25px 40px 20px 40px;
    font-size: 60px;
    font-family: 'Poppins_600SemiBold';
`

export const Inputs = styled.ScrollView`
    background-color: #f1f1f1;
    padding: 0 40px;
`
export const TextInputTitle = styled.Text`
    color: gray;
    margin-bottom: 4px;
    margin-left: 8px;
    font-size: 15px;
    font-family: 'Poppins_400Regular';
`
export const TextInputField = styled.TextInput`
    flex:1;
    background-color: #E1E1E1;
    border-radius: 50px;
    font-size: 15px;
    padding: 10px 20px;
    margin-bottom: 10px;

`
export const Cadastrar = styled(RectButton)`
    margin-top: 32px;
    background-color: orange;
    border: 1px transparent;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 15px;
`
export const Buttontext = styled.Text`
    color: black;
    align-self: auto;
    font-size: 20px;
    font-family: 'Poppins_600SemiBold';
`

export const Back= styled.TouchableOpacity`
padding: 20px;

`