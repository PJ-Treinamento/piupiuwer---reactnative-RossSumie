import React from "react";
import api from "../../services/api"
import { Piu } from "../Piu"
import {TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'
import { useAuth } from "../../hooks/contexts/auth";

interface DeleteProps{
    pius?: Piu[],
    setPius?: React.Dispatch<React.SetStateAction<Piu[]>>,
    id:string
}

const DeleteButton: React.FC<DeleteProps>=({id}) =>{
    const{user} = useAuth();
    const deletePiu = async() =>{
        await api.delete('/pius', { 
            data:{piu_id:id}
        }) 
        window.location.reload()
    }
    return(
        <>
            <TouchableOpacity onPress={deletePiu}>
                <FontAwesome name="minus-circle" size={20} color={"#d6d6d6"}></FontAwesome>
            </TouchableOpacity>
        </>
    )

}
export default DeleteButton;



/*return(
    <>
    {pius?.map((piu) => {
        if( piu.user.username === user.username){
            console.log(piu.user.username)
            console.log
        return(
        <TouchableOpacity onPress={deletePiu}>
            <FontAwesome name="minus-circle" size={20} color={"#d6d6d6"}></FontAwesome>
        </TouchableOpacity>
        )}
    })}
    </>
)*/