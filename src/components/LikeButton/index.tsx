import {FontAwesome} from '@expo/vector-icons'
import api from "../../services/api"
import React, { useState } from "react"
import {TouchableOpacity} from 'react-native';
import { useAuth } from "../../hooks/contexts/auth"


export interface Piu{
    id: string;
    user: User;
    likes:PiuLike[];
    text: string;
    created_at: Date;
    updated_at: Date;
}

interface PiuLike{
    id: string;
    user:User;
    piu:Piu;
}

interface User{
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    about: string;
    photo: string;
    pius: Piu[];
    likes: PiuLike[];
    following: User[];
    followers: User[];
    favorites: Piu[];
}

interface LikeButtonProps{
    id:string,
    likes:PiuLike[],
    numLikes: number,
    setNumLikes:React.Dispatch<React.SetStateAction<number>>
}

const LikeButton: React.FC<LikeButtonProps> = ({id,likes,setNumLikes, numLikes}) =>{
    const {user} = useAuth()
    const [liked, setLiked] = useState<boolean>(likes.some(piuLike => piuLike.user.id === user.id));

    var data={
        'piu_id': id
    }

    const handleLikes = async() => {
        liked ? setLiked(false) : setLiked(true)
        liked ? setNumLikes(numLikes - 1) : setNumLikes(numLikes + 1)
        try{
            const response = await api.post('/pius/like', data)
        }
        catch{
            alert('algum erro aconteceu :(')
        }
    }
 
    return(
        <TouchableOpacity onPress={handleLikes}>
            <FontAwesome name="heart" size={27} color={liked? "#ff0062" : "#d6d6d6"}></FontAwesome>
        </TouchableOpacity>
    )

}
export default LikeButton