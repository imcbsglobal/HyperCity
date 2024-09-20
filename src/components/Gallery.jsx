import React, { useEffect, useState } from 'react';
import { db, storage } from "./Firebase";
import { ref, onValue, remove } from "firebase/database";
import { ref as storageRef, deleteObject } from "firebase/storage";
import UploadGallery from './UploadGallery';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import notFound from "../assets/not-found.mp4"
import Footer from './Footer';
import whatsapp from "../assets/whatsapp.png"
import messageBox from "../assets/message-box.png"
import chatBg from "../assets/chatting-bg.png"
import logo from "../assets/single-logo.png"
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";


const Gallery = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])


  const [gallery, setGallery] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState([]);
  const [showImageView, setShowImageView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openChat, setOPenChat] = useState(false)

  const handleOpenChatc = () => {
    setOPenChat(!openChat)
  }

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
      {/* Whatsapp */}
      <div className='fixed z-[100] bottom-5 right-2'>
                <img src={whatsapp} onClick={handleOpenChatc} className='w-auto h-[70px] object-contain  drop-shadow-2xl cursor-pointer' alt="" />
      </div>
      
      {openChat && (
          <div className=' overflow-hidden'>
          <div className='fixed w-[300px] h-[300px] bg-[#fff] z-[100] rounded-3xl right-2 bottom-28 overflow-hidden chatBox'>
              <div className=' flex justify-center items-center gap-10 px-2 py-2 bg-[#095E54] rounded-t-3xl'>
                  <div>
                      <img src={logo} alt="" className='w-auto h-[50px] object-contain drop-shadow-2xl bg-white rounded-full p-1 WhatsappDp' />
                  </div>
                  <div>
                      <div className='text-xl titleText2 text-[#fff]'>
                          Hyper City
                      </div>
                      <div className=' text-[10px] text-[#aa9c9c]'>Typically replies within an hour</div>
                  </div>
                  <div>
                      <IoClose onClick={() => setOPenChat(!openChat)} className=' text-[#aa9c9c] cursor-pointer'/>
                  </div>
              </div>

          <div className='relative'>
              <img src={chatBg} alt="" />
              <div className=' absolute top-0 drop-shadow-md left-0 h-[190px] w-[68%]'>
                  <img src={messageBox} className='w-full h-full object-contain' alt="" />
                  <div className=' absolute top-12 font-bold titleText text-[#999393] pl-10 drop-shadow-sm'>
                      <div className=' text-[13px]'>Hyper city</div>
                      <div className=' flex items-center gap-3 text-[#554f4f]'>Hi there <span><MdWavingHand className='text-[#ffb909] drop-shadow-md'/></span></div>
                      <div className=' text-[#554f4f] text-[15px] leading-tight mt-2'>How can I help you?</div>
                  </div>
              </div>
          </div>

          <div className=' absolute bottom-0 w-full h-[60px] bg-[#fff]'>
              <div className=' flex justify-center mt-3'>
                  
              <a href="https://wa.me/qr/RONTMIZCOXJRI1">
                <button className='bg-[#01af10] px-8 py-1 text-[#fff] font-bold titleText2 rounded-3xl shadow-md flex justify-center items-center gap-2'><span className='text-xl'><FaWhatsapp/></span>Start Now</button>
              </a>
              </div>
          </div>

          </div>
      </div>
      )}
      <section className=' mb-5'>
        <div className=' flex flex-col justify-center items-center  text-center'>
          <div className='titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm md:text-center'>Our Gallery</div>
          <div className='px-6 md:px-10 lg:px-56 mb-5 llg:w-[800px] mx-auto llg:px-0'>This is our gallery page, where you can see the images of this hypermarket. Each piece showcases the quality and variety we are dedicated to, reflecting our commitment to excellence.</div>
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
