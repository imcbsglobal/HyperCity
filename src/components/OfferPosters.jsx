import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from 'react';
import { db, storage } from "./Firebase";
import { ref, onValue, remove } from "firebase/database";
import { ref as storageRef, deleteObject } from "firebase/storage";
import UploadFile from "./categoryList/UploadFile";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import notFound from "../assets/not-found.mp4"
import UploadGallery from "./UploadGallery";




const OfferPosters = () => {
  const [posters, setPosters] = useState([]);
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
    const dbRef = ref(db, 'posters');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const fetchedPosters = [];
      for (let key in data) {
        if (key !== 'latest') {
          fetchedPosters.push({ key, ...data[key] });
        }
      }
      setPosters(fetchedPosters);
      setImages(fetchedPosters.map(veg => veg.url));
      setLoading(false);
    });
  }, []);

  const handleDelete = async (key, url) => {
    try {
      await remove(ref(db, `posters/${key}`));
      const postersRef = storageRef(storage, `posters/${url.split('/').pop().split('?')[0]}`);
      await deleteObject(postersRef);
      setPosters(posters.filter(poster => poster.key !== key));
    } catch (error) {
      console.error("Error deleting Poster:", error);
    }
  };

  const handleView = (index) => {
    setSelectedImage(images.map(img => img));
    setCurrentIndex(index);
    setShowImageView(true);
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
    <section>
      {user && (
        <div className='h-full w-full rounded-lg grid place-items-center'>
          <UploadGallery storagePath="posters" dbPath="posters"/>
        </div>
      )}
      <Slider {...settings} className='mx-auto'>
          {posters.length > 0 ? (
            posters.map((poster, index) => (
              <div key={index} className='w-full relative h-[300px] rounded-3xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:h-[400px] dlg:h-[550px]'>
                <img
                  src={poster.url}
                  className='w-full h-full rounded-3xl object-cover'
                  alt={`offer-poster-${index + 1}`}
                  onClick={() => handleView(index)}
                />
                {user && (
                  <div className="flex justify-center items-center absolute bottom-10 left-[50%] translate-x-[-50%]">
                  <button onClick={() => handleDelete(poster.key, poster.url)} className='px-8 py-1 mt-1 rounded-3xl bg-[#ff2020] font-bold text-[#fff] drop-shadow-md'>Delete</button>
                </div>
                )}
              </div>
            ))
          ) : (
            <div className="grid place-items-center">
              <video src={notFound} autoPlay loop muted playsInline className="mix-blend-multiply w-[100px] h-[100px]" type="video/mp4"></video>
              <p className="font-bold text-center">No Image Found</p>
            </div>
          )}
        </Slider>
      
    </section>
  </div>
);
}


export default OfferPosters;
