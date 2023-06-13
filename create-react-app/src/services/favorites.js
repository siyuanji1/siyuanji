import { initializeApp } from "firebase/app";
import {getDatabase, onValue, ref, set, remove} from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAelIHjXsi-QqjPgv8-M0-s1XUZTACmz7s",
  authDomain: "react-fureverhome-info340.firebaseapp.com",
  databaseURL: "https://react-fureverhome-info340-default-rtdb.firebaseio.com",
  projectId: "react-fureverhome-info340",
  storageBucket: "react-fureverhome-info340.appspot.com",
  messagingSenderId: "747369077805",
  appId: "1:747369077805:web:86b27c348df7ec02bcaca4"
};

const app = initializeApp(firebaseConfig);

export const fetchIsLiked = async (email, id) => {
  return new Promise((resolve, reject) => {
    const db = getDatabase(app);
    const likesRef = ref(db, 'likes');
    onValue(likesRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        return resolve(null);
      }
      const likesData = Object.keys(data).map(key => {
        return {
          id: key,
          value: {
            ...data[key]
          }
        }
      });
      let liked = likesData.find(item => item.value.id === id && item.value.email === email);
      resolve(liked);
    })
  });
}

export const fetchLike = async (email, id) => {
  const db = getDatabase(app);
  const uid = String(Date.now()) + Math.ceil(Math.random() * 10000);
  return set(
    ref(db, 'likes/' + uid),
    {
      email,
      id
    }
  )
}

export const fetchCancelLike = async (likeId) => {
  const db = getDatabase(app);
  const likesRef = ref(db, 'likes/' + likeId);
  return remove(likesRef);
}


export const fetchLikesOfUser = async (email) => {
  const res = await fetch('database-arr.json');
  const petsData = await res.json();
  console.log(petsData, 'data')
  return new Promise((resolve, reject) => {
    const db = getDatabase(app);
    const likesRef = ref(db, 'likes');
    onValue(likesRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        return resolve([]);
      }
      console.log(data)
      const likesData = Object.keys(data).map(key => {
        return {
          id: key,
          value: {
            ...data[key]
          }
        }
      });
      let likesIds = [];
      likesData.forEach(item => {
        if (item.value.email === email) {
          likesIds.push(item.value.id);
        }
      });
      likesIds = [...new Set(likesIds)];
      const pets = [];
      for (let id of likesIds) {
        const pet = petsData.find(pet => pet.id === id);
        if (pet) {
          pets.push(pet);
        }
      }

      resolve(pets);

    })
  });
}