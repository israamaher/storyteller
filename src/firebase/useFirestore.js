import { useState, useEffect } from "react";
import { collection, onSnapshot, addDoc,getDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import{db , storage} from './firebase';

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

const deletePost = async (postId) => {
  const postRef = doc(db, 'posts', postId);
  try {
    await deleteDoc(postRef);
    console.log(`Document with ID ${postId} has been deleted`);
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};

const updatePost = async (postId, updatedData) => {
  const postRef = doc(db, 'posts', postId);
  try {
    await updateDoc(postRef, updatedData); // update only the fields that are passed
    console.log(`Document with ID ${postId} has been updated`);
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

const uploadImage = async (file, postData) => {
    if (!file) return;
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe the upload progress
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => {
        // Handle upload errors
        console.error("Upload failed:", error);
      }, 
      async () => {
        // Handle successful upload
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
  
        // Save post data along with the image URL in Firestore
        await addDoc(collection(db, 'posts'), {
          ...postData,
          imageUrl: downloadURL,
        });
        console.log('Image uploaded successfully, URL:', downloadURL);
      }
    );
  };

  const getPost = async (postId) => {
    const docRef = doc(db, "posts", postId); // replace "posts" with your collection name
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error("No such document!");
    }}


return { posts, addposts, uploadImage ,getPost, deletePost,updatePost };
};