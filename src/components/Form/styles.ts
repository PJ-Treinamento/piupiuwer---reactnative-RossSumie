import styled from "styled-components/native";
import {RectButton} from 'react-native-gesture-handler'


export const FormPiu = styled.View`
    flex:1;
`
export const PiuContent = styled.TextInput`
    flex:1;
    padding: 40px;
    font-size: 20px;
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

export const FormView = styled.View`

`
export const CounterView = styled.View`
    flex:1;
    margin-right: 15px;
`
export const Counter = styled.Text`
    font-size: 20px;
    position: absolute;
    right: 0;
`