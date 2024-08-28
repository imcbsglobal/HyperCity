import React, { useEffect, useState } from 'react';
import { db, storage } from "./Firebase";
import { ref, onValue, remove } from "firebase/database";
import { ref as storageRef, deleteObject } from "firebase/storage";
import UploadGallery from './UploadGallery';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import notFound from "../assets/not-found.mp4"
import Footer from './Footer';


const Gallery = () => {
  const [gallery, setGallery] = useState([]);
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
    const dbRef = ref(db, 'gallery');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const fetchedGallery = [];
      for (let key in data) {
        if (key !== 'latest') {
          fetchedGallery.push({ key, ...data[key] });
        }
      }
      setGallery(fetchedGallery);
      setImages(fetchedGallery.map(veg => veg.url));
      setLoading(false);
    });
  }, []);

  const handleDelete = async (key, url) => {
    try {
      await remove(ref(db, `gallery/${key}`));
      const galleryRef = storageRef(storage, `gallery/${url.split('/').pop().split('?')[0]}`);
      await deleteObject(galleryRef);
      setGallery(gallery.filter(galleryImage => galleryImage.key !== key));
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleView = (index) => {
    setSelectedImage(images.map(img => img));
    setCurrentIndex(index);
    setShowImageView(true);
  };

  return (
    <div className='pt-36'>
      <section className=' mb-5'>
        <div className=' flex flex-col justify-center items-center  text-center'>
          <div className='titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm md:text-center'>Our Gallery</div>
          <div className='px-6 md:px-10 lg:px-56 mb-5'>Explore our gallery to discover a curated collection of our finest offerings. Each piece showcases the quality and variety we take pride in, reflecting our dedication to excellence. Whether you’re browsing for inspiration or looking to see our products in action, our gallery offers a visual journey through our diverse range, highlighting the craftsmanship and care we put into everything we do.</div>
        </div>
      </section>
      <section className=' mb-10'>
        {user && (
          <div className='h-full w-full rounded-lg grid place-items-center'>
            <UploadGallery storagePath="gallery" dbPath="gallery" />
          </div>
        )}
        <div className='gap-10 grid place-items-center px-6'>
          {gallery.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 llg:grid-cols-3 place-items-center dlg:max-w-[1440px] gap-10 w-full'>
              {gallery.map((galleryItem, index) => (
                <div key={galleryItem.key} className='w-full h-[300px] relative  pb-2 cursor-pointer rounded-3xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                  <div onClick={() => handleView(index)} className='w-full h-[300px] '>
                    <img src={galleryItem.url} className='h-full w-full object-cover rounded-3xl' alt="Image" />
                  </div>
                  {/* <div className="flex flex-col justify-center items-center titleText2">
                    <div className='text-xl text-[#FF6C00] drop-shadow-sm'>{galleryItem.productName || 'Product Name'}</div>
                    <div className='text-sm titleText mt-1'>{galleryItem.productParagraph || 'Product description here'}</div>
                  </div> */}
                  {user && (
                    <div className="flex justify-center items-center absolute bottom-10 left-[50%] translate-x-[-50%]">
                    <button onClick={() => handleDelete(galleryItem.key, galleryItem.url)} className='px-8 py-1 mt-1 rounded-3xl bg-[#ff2020] font-bold text-[#fff] drop-shadow-md'>Delete</button>
                  </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className=" grid place-items-center md:flex md:items-center md:gap-5 justify-center items-center">
              <video src={notFound} autoPlay loop muted playsInline className=" mix-blend-multiply w-[100px] h-[100px]" type="video/mp4"></video>
              <p className=" font-bold text-center">No Image Found</p>
            </div>
          )}
        </div>
      </section>

      <section className='bg-[#FF6C00]'>
        <Footer/>
      </section>
    </div>
  )
}

export default Gallery
