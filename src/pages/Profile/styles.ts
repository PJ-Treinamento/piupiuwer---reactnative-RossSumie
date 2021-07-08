import styled from "styled-components/native";

export const Container = styled.View`

`
export const Topbar = styled.View`
    background-color: #FFFFFF ;
    height: 50px;
    padding: 5px 40px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.10);
    flex-direction: row;
    justify-content: space-between;
`
export const Config = styled.TouchableOpacity`
    align-self: center;
`
export const Header = styled.View`
    height: 250px;
    background-color: #FFFFFF;
    z-index: 0;
`
export const BodyTitle = styled.View`
    z-index: 1;
    padding: 30px;
    background-color: #FFFFFF;

`
export const Logo = styled.Image`
    width: 110px;
`
export const Loginimg = styled.Image`
    flex:1;
    border-bottom-right-radius: 150px;
    overflow: hidden;
`
export const AvatarImg = styled.Image`
    height: 110px;
    width: 110px;
    border-radius: 60px;
    z-index: 2;
    position: absolute;
    right: 0;
    bottom:0;
    border:solid 10px #ffffff;
    margin-right: 30px;
`
export const Name = styled.Text`
    font-family: 'Poppins_600SemiBold';
    font-size: 25px;
`
export const Usrname = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: 15px;
    color: #FFAC2F;
`
export const Follow = styled.View`
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

`
export const MyPius = styled.ScrollView`
    padding: 30px;
    flex:1;
`
export const Subtitle = styled.Text`
    margin-bottom: 10px;
    font-family: 'Poppins_600SemiBold';
    font-size: 20px;
`