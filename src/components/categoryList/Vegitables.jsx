import React from 'react'

const Vegitables = () => {
  return (
    <div>
      <section className='mt-10'>
        <div className=' flex justify-center items-center gap-10'>
            <div><button className=' px-8 py-2 bg-[#FF6C00] text-white font-bold rounded-lg flex  items-center gap-2'>Select <span><FaFileImage/></span></button>
            
            </div>
            <div><button className='px-8 py-2 bg-[#FF6C00] text-white font-bold rounded-lg flex items-center gap-2'>Upload <span><BiSolidPlusSquare/></span></button>
            </div>
        </div>  
     </section>
    </div>
  )
}

export default Vegitables
