import React, { useEffect, useState } from 'react';
import { db, storage } from "../Firebase";
import { ref, onValue, remove } from "firebase/database";
import { ref as storageRef, deleteObject } from "firebase/storage";
import UploadFile from "../categoryList/UploadFile";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';
import notFound from "../../assets/not-found.mp4"

const ToysSports = () => {
  const [toysAndSports, setToysAndSports] = useState([]);
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
    const dbRef = ref(db, 'toysSports');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const fetchedToysAndSports = [];
      for (let key in data) {
        if (key !== 'latest') {
          fetchedToysAndSports.push({ key, ...data[key] });
        }
      }
      setToysAndSports(fetchedToysAndSports);
      setImages(fetchedToysAndSports.map(toy => toy.url));
      setLoading(false);
    });
  }, []);

  const handleDelete = async (key, url) => {
    try {
      await remove(ref(db, `toysSports/${key}`));
      const toysAndSportsRef = storageRef(storage, `vegitables/${url.split('/').pop().split('?')[0]}`);
      await deleteObject(toysAndSportsRef);
      setToysAndSports(toysAndSports.filter(toys => toys.key !== key));
    } catch (error) {
      console.error("Error deleting toysAndSports:", error);
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
          <UploadFile storagePath="toysSports" dbPath="toysSports" />
        </div>
        )}
        <div className='gap-10 grid place-items-center'>
          {toysAndSports.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 llg:grid-cols-3 place-items-center dlg:max-w-[1440px] gap-10 w-full'>
              {toysAndSports.map((toys, index) => (
                <div key={toys.key} className='w-full h-[300px] productBox pb-2 cursor-pointer'>
                  <div onClick={() => handleView(index)} className='w-full h-[200px]'>
                    <img src={toys.url} className='h-full w-full object-contain drop-shadow-2xl' alt="ToysAndSports" />
                  </div>
                  <div className="flex flex-col justify-center items-center titleText2">
                    <div className='text-xl text-[#FF6C00] drop-shadow-sm'>{toys.productName || 'Product Name'}</div>
                    <div className='text-sm titleText mt-1'>{toys.productParagraph || 'Product description here'}</div>
                  </div>
                  {user && (
                    <div className="flex justify-center items-center">
                    <button onClick={() => handleDelete(toys.key, toys.url)} className='px-8 py-1 mt-1 rounded-3xl bg-[#ff2020] font-bold text-[#fff] drop-shadow-md'>Delete</button>
                  </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className=" grid place-items-center md:flex md:items-center md:gap-5 justify-center items-center">
              <video src={notFound} autoPlay loop muted playsInline className=" mix-blend-multiply w-[100px] h-[100px]" type="video/mp4"></video>
              <p className=" font-bold text-center">No Toys And Sports Items Found</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ToysSports
