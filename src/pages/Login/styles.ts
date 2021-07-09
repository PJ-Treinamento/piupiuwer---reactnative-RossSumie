import styled from "styled-components/native";
import {RectButton} from 'react-native-gesture-handler'

export const Container = styled.View`
    flex:1;
    padding:0;
`
export const Header = styled.View`
    flex:1;
    z-index: 0;
    overflow: hidden;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
`
export const Inputs = styled.View`
    flex:1;
    padding: 40px;
    z-index: 1;
`
export const Title = styled.Text`
    color: white;
    align-self: auto;
    padding: 40px;
    font-size: 60px;
    font-family: 'Poppins_600SemiBold';
`
export const Buttontext = styled.Text`
    color: black;
    align-self: auto;
    font-size: 20px;
    font-family: 'Poppins_600SemiBold';
`
export const Loginimg = styled.ImageBackground`
    flex:1;
    justify-content:flex-end;
`
export const Textinput = styled.TextInput.attrs({
    placeholderTextColor: '#A1A1A1'
  })`
    background-color: #E1E1E1;
    height: 40px;
    border-radius: 40px;
    padding: 0 20px;
    margin-bottom: 20px;
  `
export const Entrar = styled(RectButton)`
    background-color: orange;
    border: 1px transparent;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 15px;
`
export const SimpleText = styled.Text` 
    font-family: 'Poppins_400Regular';
    font-size: 15px;
    align-self: center;
    margin-top: 32px;
`
export const OrangeButton = styled.TouchableOpacity`
    margin-top: 0px;
`
export const OrangeText = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: 15px;
    align-self: center;
    color: orange;

`