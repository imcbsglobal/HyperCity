import fruit from "../../assets/fruits.jpg"
import vegetbaleItems from "../../assets/vegetableitems.jpg"

const Vegitables = () => {

  const vegetableItems = [
    { name : 'Vegetables', img : vegetbaleItems },
    { name : 'Fruits', img : fruit }
  ]
  
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center lg:w-[900px] mx-auto llg:w-[1000px]'>
                {vegetableItems.map((item, i) => (
                    <div 
                        key={i}
                        className={` ${ 
                            i === 1 || i === 3 ? '' : ''
                        } border-2  rounded-3xl  flex flex-col items-center justify-center w-[300px] h-[300px] relative llg:w-[450px] llg:h-[300px] DarkBox2`}
                    >
                        <div className='h-[300px] llg:h-[300px] w-full absolute mix-blend-multiply'>
                            <img src={item.img} className=' h-full w-full object-cover rounded-3xl' alt="" />
                        </div>
                        <div className=' absolute z-10 font-bold text-xl text-[#ff8f18] text-center drop-shadow-2xl px-8 py-3 bg-[#ffffff] w-full'>{item.name}</div>

                    </div>
                ))}
            </div>
    </div>
  );
}

export default Vegitables;
