import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='bg-[#12141e] pt-12'>
      {/* footer top */}
      <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[16px] leading-10 text-white font-[500] mb-5 md:text-[2rem]'>
              Hotline: 0907404677
            </h2>
            <a href="#contact">
              <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                <i class='ri-mail-line'></i> Liên hệ nhanh với chúng tôi
              </button>
            </a>



          </div>
          <div className='w-full sm:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>Địa chỉ: 16 C1, phường 13, quận Tân Bình, Tp.HCM</p>
            <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-10'>
              <span className='text-gray-300 font-[600] text-[15px]'>Đăng ký :</span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'><a className='text-gray-300 font-[500] text-[18px]' href="#"><i class="ri-facebook-circle-fill"></i></a></span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'><a className='text-gray-300 font-[500] text-[18px]' href="#"><i class="ri-messenger-fill"></i></a></span>
              <span className='w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center'><a className='text-gray-300 font-[500] text-[18px]' href="#"><i class="ri-youtube-fill"></i></a></span>

            </div>
          </div>
        </div>
        <div>
                    <ul className='flex items-center justify-center gap-10 mt-10'>
                        <li><a className='text-gray-400 font-[600]' href="#about">Giới Thiệu</a></li>
                        <li><a className='text-gray-400 font-[600]' href="#services">May Đồng Phục</a></li>
                        <li><a className='text-gray-400 font-[600]' href="#portfolio">Sản Phẩm</a></li>
                        <li><a className='text-gray-400 font-[600]' href="#contact">Liên Hệ</a></li>
                    </ul>
                </div>

      </div>
      {/* footer top end */}
      {/* footer bottom */}
      <div className='bg-[#1b1e29] py-5 mt-14'>
        <div className='container'>
          <div className='flex items-center justify-center sm:justify-between'>
            <div className='hidden sm:block'>
              <div className='flex items-center gap-[10px]'>
                <span className='w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center'>V</span>
                <div className='leading-[20px]'>
                  <h2 className='text-gray-200 font-[500] text-[18px]'>Vi An</h2>
                  <p className='text-gray-400 text-[14px] font-[500]'>Uniform</p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-gray-400 text-[14px] font-[500]'>Bản quyền thuộc về nhà may Vi An Uniform {year}</p>
            </div>
          </div>
        </div>
      </div>
        {/* footer bottom end */}
    </footer>
  )
}

export default Footer