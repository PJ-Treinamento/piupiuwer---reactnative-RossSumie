import styled from "styled-components/native";
import {RectButton} from 'react-native-gesture-handler'

export const Topbar = styled.View`
    height: 50px;
    padding: 10px 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #FFF;
`
export const Piar = styled(RectButton)`
    background-color: orange;
    border: 1px transparent;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 80px;
    border-radius: 15px;
`
export const PiarText = styled.Text`
    color: black;
    align-self: auto;
    font-size: 20px;
    font-family: 'Poppins_600SemiBold';
`
export const Cancel = styled.TouchableOpacity`

`