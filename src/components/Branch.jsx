import React from 'react'

const Branch = () => {
  return (
    <div>
      <section>
        <div className=''>
          <div className=' lg:max-w-[1200px] lg:mx-auto mb-10 px-6 pt-5'>
            <div className='text-center titleText2 font-bold text-[44px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm'>Our Branches</div>
            <div className='text-center mb-10 paraText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, qui aperiam voluptas veniam aspernatur ea deleniti repudiandae, enim deserunt, aliquam nihil quasi sunt eveniet? Id nam soluta dolore iste quibusdam.
            </div>
            {/* Branches */}
            <div className='grid grid-cols-1 place-items-center mb-10'>
              {/* Box */}
              <div className=' w-full h-[300px] productBox mb-10'>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
              {/* Content */}
              <div>
                <div>
                  <div className='titleText2 font-bold text-[32px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm text-center'>Brach Name1</div>
                  <div className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet quia dolorum facilis odit nostrum suscipit obcaecati consequatur eum nesciunt earum laudantium deserunt molestiae, ullam, nam sit iste fugiat. Eaque.</div>
                </div>
              </div>

            </div>

            <div className='grid grid-cols-1 place-items-center'>
              {/* Box */}
              <div className=' w-full h-[300px] productBox mb-10'>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
              {/* Content */}
              <div>
                <div>
                  <div className='titleText2 font-bold text-[32px] mb-5 leading-tight text-[#0cd50f] drop-shadow-sm text-center'>Brach Name2</div>
                  <div className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet quia dolorum facilis odit nostrum suscipit obcaecati consequatur eum nesciunt earum laudantium deserunt molestiae, ullam, nam sit iste fugiat. Eaque.</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Branch
