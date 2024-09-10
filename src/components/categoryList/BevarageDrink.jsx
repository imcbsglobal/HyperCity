import React, { useEffect, useState } from 'react';
import { db, storage } from "../Firebase";
import { ref, onValue, remove } from "firebase/database";
import { ref as storageRef, deleteObject } from "firebase/storage";
import UploadFile from "../categoryList/UploadFile";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';
import notFound from "../../assets/not-found.mp4"

const BevarageDrink = () => {
  const [beverageDrinks, setBeverageDrinks] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  const [showImageView, setShowImageView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const dbRef = ref(db, 'beverageDrinks');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const fetchedBeverageDrinks = [];
      for (let key in data) {
        if (key !== 'latest') {
          fetchedBeverageDrinks.push({ key, ...data[key] });
        }
      }
      setBeverageDrinks(fetchedBeverageDrinks);
      setImages(fetchedBeverageDrinks.map(bev => bev.url));
      setLoading(false);
    });
  }, []);

  const handleDelete = async (key, url) => {
    try {
      await remove(ref(db, `beverageDrinks/${key}`));
      const beverageDrinkRef = storageRef(storage, `beverageDrinks/${url.split('/').pop().split('?')[0]}`);
      await deleteObject(beverageDrinkRef);
      setBeverageDrinks(beverageDrinks.filter(beverage => beverage.key !== key));
    } catch (error) {
      console.error("Error deleting drink:", error);
    }
  };

  const handleView = (index) => {
    setSelectedImage(images.map(img => img));
    setCurrentIndex(index);
    setShowImageView(true);
  };

  return (
    <div>
      <section>
        {user && (
          <div className='h-full w-full rounded-lg grid place-items-center'>
          <UploadFile storagePath="beverageDrinks" dbPath="beverageDrinks" />
        </div>
        )}
        <div className='gap-10 grid place-items-center'>
          {beverageDrinks.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 llg:grid-cols-3 place-items-center dlg:max-w-[1440px] gap-10 w-full'>
              {beverageDrinks.map((beverage, index) => (
                <div key={beverage.key} className='w-full h-[300px] productBox pb-2 cursor-pointer'>
                  <div onClick={() => handleView(index)} className='w-full h-[200px]'>
                    <img src={beverage.url} className='h-full w-full object-contain drop-shadow-2xl' alt="Drink" />
                  </div>
                  <div className="flex flex-col justify-center items-center titleText2">
                    <div className='text-xl text-[#FF6C00] drop-shadow-sm'>{beverage.productName || 'Product Name'}</div>
                    <div className='text-sm titleText mt-1'>{beverage.productParagraph || 'Product description here'}</div>
                  </div>
                  {user && (
                    <div className="flex justify-center items-center">
                    <button onClick={() => handleDelete(beverage.key, beverage.url)} className='px-8 py-1 mt-1 rounded-3xl bg-[#ff2020] font-bold text-[#fff] drop-shadow-md'>Delete</button>
                  </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className=" grid place-items-center md:flex md:items-center md:gap-5 justify-center items-center">
              <video src={notFound} autoPlay loop muted playsInline className=" mix-blend-multiply w-[100px] h-[100px]" type="video/mp4"></video>
              <p className=" font-bold text-center">No Drinks Found</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default BevarageDrink
