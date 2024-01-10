import React from 'react'

const Contact = () => {
  return (
   <section id='contact' className='pb-16'>
        <div className='container'>
            <h2 className='text-headingColor font-[900] text-[1.8rem] mb-8'>Địa Chỉ - Liên Hệ</h2>
            <div className='md:flex justify-between items-center'>
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
                <iframe title='google maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.10906307387!2d106.64342237355228!3d10.802958258706783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294f58146985%3A0xa82ff70b6cc91a39!2zMTYgxJAuIEMxLCBQaMaw4budbmcgMTMsIFTDom4gQsOsbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1704897650679!5m2!1svi!2s" className='border-0 w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                <form className='w-full'>
                    <div className='mb-5'>
                        <input type="text" placeholder='Nhập tên của bạn' className='w-full p-3 focus:outline-none rounded-[5px]'/>
                    </div>
                    <div className='mb-5'>
                        <input type="email" placeholder='Nhập email của bạn' className='w-full p-3 focus:outline-none rounded-[5px]'/>
                    </div>
                    <div className='mb-5'>
                        <input type="text" placeholder='Nhập tiêu đề của bạn' className='w-full p-3 focus:outline-none rounded-[5px]'/>
                    </div>
                    <div className='mb-5'>
                        <textarea type="text" rows={3} placeholder='Nhập nội dung của bạn' className='w-full p-3 focus:outline-none rounded-[5px]'/>
                    </div>
                    <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150'>Gửi Thư</button>
                </form>
            </div>

            </div>    
        </div>
   </section>
  )
}

export default Contact