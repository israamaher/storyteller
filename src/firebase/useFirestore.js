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

const addposts = async (post) => {
  if (!post.userId) {
    console.error("userId is required to add a post");
    return;
  }

  try {
    await addDoc(collection(db, 'posts'), post);
    console.log("Post successfully added:", post);
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

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

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    },
    (error) => {
      console.error("Upload failed:", error);
    },
    async () => {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      const postWithImage = { ...postData, imageUrl: downloadURL };

      // Save post data with image URL in Firestore
      try {
        await addposts(postWithImage);
        console.log("Image uploaded successfully, URL:", downloadURL);
      } catch (error) {
        console.error("Error adding post with image:", error);
      }
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