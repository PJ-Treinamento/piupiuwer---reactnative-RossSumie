import React, {useState} from "react";
import LikeButton from "../LikeButton";
import { Avatar, Name, NumLikes, PiuBlock, PiuContent, PiuInfo, PiuInteract, Piutext} from "./styles";

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

interface PiuProps{
    id: string;
    likes: PiuLike[];
    text:string;
    username?:string;
}

const PiuComp: React.FC<Piu> = ({id, likes, text, user}) =>{
    const [numLikes, setNumLikes] = useState<number>(likes.length);
    return(
        <PiuBlock>
            <PiuContent>
                <Avatar source={{uri: user.photo}}/>
                <PiuInfo>
                    <Name>
                        {user.username}
                    </Name>
                    <Piutext>
                        {text}
                    </Piutext>
                </PiuInfo>
            </PiuContent>
            <PiuInteract>
                    <LikeButton likes={likes} id={id} setNumLikes={setNumLikes} numLikes={numLikes}/>
                    <NumLikes>{numLikes}</NumLikes>
            </PiuInteract>
        </PiuBlock>
    )

}
export default PiuComp;