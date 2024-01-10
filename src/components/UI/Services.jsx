import React from 'react';
import frontendImg from '../../assets/images/front-end.png';
import backendImg from '../../assets/images/backend.png';
import uiImg from '../../assets/images/design.png';
import appsImg from '../../assets/images/apps.png';

const Services = () => {
  return (
    <section id='services'>
        <div className='container lg:pt-5'>
            <div className='text-center'>
                <h2 className='text-headingColor font-[800] text-[2.4rem]'>Các bước may đo đồng phục</h2>
            <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[700] text-[19px] leading-7'>
               "Vải vóc là tấm gương phản chiếu tâm hồn người mặc."
            </p>
            </div>

            <div className='flex flex-col justify-center sm:py-12'>
                <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                    <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                        {/* middle */}
                        <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2'>

                        </div>

                        {/* left card */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>1. Lựa chọn chất liệu vải</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>Nếu trang phục được sử dụng trong môi trường công sở, cần lựa chọn chất liệu vải cao cấp, bền đẹp, thấm hút mồ hôi tốt. Nếu trang phục được sử dụng trong các dịp đặc biệt, cần lựa chọn chất liệu vải cao cấp, sang trọng.</p>
                                        </div>
                                    </div>
                                </div>


                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={frontendImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* right card */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>2. Lấy số đo</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>Lấy số đo là bước quan trọng nhất trong quá trình may đo. Số đo chính xác sẽ giúp trang phục được may vừa vặn, tôn dáng người mặc.</p>
                                        </div>
                                    </div>
                                </div>


                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={backendImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                                                {/* left card */}
                                                <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>3. Thiết kế mẫu & May thử</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>Sau khi lấy số đo, người thợ may sẽ tiến hành thiết kế mẫu trang phục. Sau khi thiết kế mẫu, trang phục sẽ được may thử trên người để kiểm tra độ vừa vặn, hoàn thiện. Nếu có sai sót, người thợ may sẽ tiến hành chỉnh sửa cho đến khi trang phục vừa vặn, hoàn hảo.</p>
                                        </div>
                                    </div>
                                </div>


                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={uiImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                                                {/* right card */}
                                                <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex items-center flex-col sm:flex-row'>

                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl'>5. May hoàn thiện & Bàn giao</h3>
                                            <p className='text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7'>Sau khi may thử và chỉnh sửa, trang phục sẽ được may hoàn thiện. Sau khi may hoàn thiện, trang phục sẽ được bàn giao cho khách hàng. Người thợ may sẽ hướng dẫn khách hàng cách bảo quản và sử dụng trang phục.</p>
                                        </div>
                                    </div>
                                </div>


                                <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                                    <figure>
                                        <img src={appsImg} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services