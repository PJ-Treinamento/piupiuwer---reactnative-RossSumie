import styled from "styled-components/native";
import { TextInput, Animated} from "react-native";

export const Container = styled.View`
    flex:1;
    background-color: #f1f1f1;
`
export const Topbar = styled.View`
    background-color: #FFFFFF ;
    height: 50px;
    padding: 5px 40px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.10);
    flex-direction: row;
    justify-content: space-between;
`
export const Interactions = styled.View`
    flex-direction: row;
    align-items: center;
`
export const AddPiu = styled.TouchableOpacity`
`
export const SearchLogo = styled.TouchableOpacity`
    background-color: #FFAC2F;
    border-radius: 50px;
    padding: 5px 10px;
    position: absolute;
    right: 0;
`
export const SearchItems = styled(Animated.View)`
    width: 150px;
    height: 25px;
    background-color:#E1E1E1;
    margin-left: 15px;
    flex-direction: row;
    border-radius: 50px;
    align-items: center;
`
export const Logo = styled.Image`
    width: 110px;
`
export const Timeline = styled.ScrollView`
    flex: 1;
    padding: 30px;
`
export const SearchBar = styled(TextInput)`
    width: 100%;
    padding: 0 45px 0 10px;
    font-size: 15px;
`
