import styled from "styled-components/native";

export const PiuBlock = styled.View`
    border-radius: 10px;
    background-color: #FFFFFF;
    margin-bottom: 15px;
    padding: 15px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
`
export const PiuContent = styled.View`
    align-items: flex-start;
    flex-direction: row;
`
export const PiuInfo = styled.View`
    padding:0 15px;
    flex:1;
`
export const PiuInteract = styled.View`
    flex-direction: row;
    align-self: flex-end;
    align-items: center;
    margin-right: 20px;
`
export const NumLikes = styled.Text`
    font-size: 10px;
    padding-left: 5px;
`
export const Name = styled.Text`
    font-size: 15px;
    font-family: sans-serif;
    font-weight: 700;
`
export const Piutext = styled.Text`
    margin-top: 5px;
    font-size: 15px;
    width: 100%;
`
export const Avatar= styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 100%;
`