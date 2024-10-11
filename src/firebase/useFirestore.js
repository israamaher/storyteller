import { useState, useEffect } from "react";
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import{db} from './firebase';

export const useFirestore=()=>{
    const [posts, setposts] =useState([]);
    
useEffect(()=>{
    const unsubscribe= onSnapshot(collection(db,'posts'),(snapshot)=>{
        const fetcheddata = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setposts(fetcheddata) 
        console.log(fetcheddata);
    });

    return unsubscribe
},[]);

const addposts = async (post)=>{
    await addDoc(collection(db,'posts'), {
        ...post
    });
}

return { posts, addposts };
};