import React from 'react';
import heroImg from '../../assets/images/hinhsomi001.png'
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <section className='pt-0' id='about'>
            <div className='container pt-14'>
                <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/* hero left content */}
                    <div className='w-full md:basis-1/2'>
                        <h5 className='text-headingColor font-[600] text-[18px]'>
                            Chào mừng quý khách đến với
                        </h5>
                        <h1 className='text-headingColor font-[800] text-[1.8rem] sm:text-[36px] leading-[35px] sm:leading-[46px] mt-5'>Đồng phục Vi An</h1>

                        <div className='flex items-center gap-6 mt-7'>
                            <a href="#contact">
                                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                <i class="ri-map-pin-user-fill"></i> Địa chỉ
                                </button>
                            </a>
                            <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>Xem đồng phục</a>

                        </div>
                        <p className='flex gap-2 text-headingColor font-[700] text-[16px] leading-7 sm:pl-14 sm:pr-10 mt-6'><span><i class="ri-apps-line"></i></span> Sự lựa chọn hoàn hảo cho doanh nghiệp.</p>
                        <p className='flex gap-2 text-headingColor font-[700] text-[16px] leading-7 sm:pl-14 sm:pr-10'><span><i class="ri-apps-line"></i></span> Thể hiện đẳng cấp và cá tính</p>
                        <p className='flex gap-2 text-headingColor font-[700] text-[16px] leading-7 sm:pl-14 sm:pr-10'><span><i class="ri-apps-line"></i></span> Tôn lên phong cách chuyên nghiệp với đồng phục quần tây, áo sơ mi, veston</p>

                        <div className='flex items-center gap-9 mt-14'>
                            <span className='text-smallTextColor text-[15px] font-[600]'>Đăng ký fanpage:</span>
                            <span><a href="#youtube" className='text-smallTextColor text-[18px] font-[600]'><i class='ri-youtube-line'></i></a></span>
                            <span><a href="#youtube" className='text-smallTextColor text-[18px] font-[600]'><i class='ri-facebook-line'></i></a></span>
                            <span><a href="#youtube" className='text-smallTextColor text-[18px] font-[600]'><i class="ri-messenger-line"></i></a></span>

                        </div>
                    </div>
                    {/* hero left content end */}
                    {/* hero img */}
                    <div className='basis-1/3 mt-10 sm:mt-0'>
                        <figure className='flex items-center justify-center'>
                            <img className='nicky' src={heroImg} alt="" />
                        </figure>
                    </div>
                     {/* hero img end */}
                     {/* hero contact right*/}
                        <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                            <div className='mb-10'>
                                <h2 className='text-headingColor font-[700] text-[32px]'>
                                    <CountUp start={0} end={32} duration={2} suffix='+'/>
                                </h2>
                                <h4 className='text-headingColor font-[600] text-[18px]'>Năm Kinh Nghiệm</h4>
                            </div>
                            <div className='mb-10'>
                                <h2 className='text-headingColor font-[700] text-[32px]'>
                                    <CountUp start={0} end={379} duration={2} suffix='+'/>
                                </h2>
                                <h4 className='text-headingColor font-[600] text-[18px]'>Khách Hàng</h4>
                            </div>
                            <div className='mb-10'>
                                <h2 className='text-headingColor font-[700] text-[32px]'>
                                    <CountUp start={0} end={9048} duration={2} suffix='+'/>
                                </h2>
                                <h4 className='text-headingColor font-[600] text-[18px]'>Sản Phẩm</h4>
                            </div>
                        </div>
                     {/* hero contact right end */}
                </div>
            </div>
        </section>
    )
}

export default Hero