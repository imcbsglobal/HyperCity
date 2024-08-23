import product5 from "../../assets/product5.png"
import { BiSolidPlusSquare } from "react-icons/bi";
import { FaFileImage } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { db, storage } from "../Firebase";
import { ref, onValue, remove } from "firebase/database";
import { ref as storageRef, deleteObject } from "firebase/storage";
// import ImageView from './ImageView';
import UploadFile from "../categoryList/UploadFile";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase';
import Loader from "../Loader";
import notFound from "../../assets/not-found.mp4"

const Vegitables = () => {
  const [vegitables, setVegitables] = useState([]);
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
    const dbRef = ref(db, 'vegitables');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const fetchedVegitables = [];
      for (let key in data) {
        if (key !== 'latest') {
          fetchedVegitables.push({ key, url: data[key].url });
        }
      }
      setVegitables(fetchedVegitables);
      setImages(fetchedVegitables);
      setLoading(false); 
    });
  }, []);

  const handleDelete = async (key, url) => {
    try {
      await remove(ref(db, `vegitables/${key}`));
      const vegitableRef = storageRef(storage, `vegitables/${url.split('/').pop().split('?')[0]}`);
      await deleteObject(vegitableRef);
      setVegitables(vegitables.filter(vegitables => vegitables.key !== key));
    } catch (error) {
      console.error("Error deleting vegitable:", error);
    }
  };

  const handleView = (index) => {
    setSelectedImage(images.map(img => img.url));
    setCurrentIndex(index);
    setShowImageView(true);
  };

  return (
    <div>
      {/* <section className='mt-10 mb-10'>
        <div className=' flex justify-center items-center gap-10'>
            <div><button className=' px-8 py-2 bg-[#FF6C00] text-white font-bold rounded-lg flex  items-center gap-2'>Select <span><FaFileImage/></span></button>
            
            </div>
            <div><button className='px-8 py-2 bg-[#FF6C00] text-white font-bold rounded-lg flex items-center gap-2'>Upload <span><BiSolidPlusSquare/></span></button>
            </div>
        </div>  
     </section> */}

     {/* <section>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 llg:grid-cols-4 place-items-center dlg:max-w-[1440px]'>
        <div className=' w-full h-[300px] productBox pb-2'>
          <div className='w-auto h-[200px]'>
              <img src={product5} className='h-full w-full object-contain drop-shadow-2xl' alt="" />
          </div>
          <div className=' flex flex-col justify-center items-center titleText2'>
            <div className='text-xl text-[#FF6C00] drop-shadow-sm'>Masala Lays Chips</div>
            <div className='text-sm titleText mt-1'>Lorem ipsum dolor sit amet.</div>
            </div>
            <div className='flex justify-center items-center '>
              <button className='px-8 py-1 mt-1 rounded-3xl bg-[#ff2020] font-bold text-[#fff] drop-shadow-md'>Delete</button>
            </div>
          </div>
      </div>
     </section> */}

     <section>
      
     </section>

     <section>
     
        {/* <div className='h-full w-full flex items-center justify-center'><Loader /></div> */}
      
        <>
          <div className='h-full w-full  rounded-lg grid place-items-center'>
            <UploadFile storagePath="vegitables" dbPath="vegitables" />
          </div>

          <div className='gap-10 grid place-items-center'>
            {vegitables.length > 0 ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 llg:grid-cols-3 place-items-center dlg:max-w-[1440px] gap-10 w-full'>
                {vegitables.map((vegitable, index) => (
                  <div key={vegitable.key} className='w-full h-[300px] productBox pb-2 cursor-pointer'>
                    <div onClick={() => handleView(index)} className='w-full h-[200px]'>
                      <img src={vegitable.url} className='h-full w-full object-contain drop-shadow-2xl' alt="Vegitable" />
                    </div>

                    <div className="flex flex-col justify-center items-center titleText2">
                      <div className='text-xl text-[#FF6C00] drop-shadow-sm'>Masala Lays Chips</div>
                      <div className='text-sm titleText mt-1'>Lorem ipsum dolor sit amet.</div>
                    </div>

                      <div className="flex justify-center items-center">
                        <button onClick={() => handleDelete(vegitable.key, vegitable.url)} className='px-8 py-1 mt-1 rounded-3xl bg-[#ff2020] font-bold text-[#fff] drop-shadow-md'>Delete</button>
                      </div>
                  
                  </div>
                ))}
              </div>
            ) : <div className=" grid place-items-center md:flex md:items-center md:gap-5 justify-center items-center">
                  <video src={notFound} autoPlay loop muted playsInline className=" mix-blend-multiply w-[100px] h-[100px]" type="video/mp4"></video>
                  <p className=" font-bold text-center">No Vegitable Found</p>
              </div>}
          </div>
          {/* {showImageView && <ImageView images={selectedImage} currentIndex={currentIndex} setShowImageView={setShowImageView} />} */}
        </>
      
     </section>
    </div>
  )
}

export default Vegitables
