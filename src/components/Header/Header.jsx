import React, {useRef, useEffect} from 'react';

const Header = () => {

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header')
            }else{
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunc()
        return window.removeEventListener('scroll', stickyHeaderFunc)
    }, [])

    const handleClick = e => {
        e.preventDefault();
        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            top: location - 80,
            left: 0
        })
    }

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                {/* logo */}
                <div className='flex items-center gap-[10px]'>
                    <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>V</span>
                    <div className='leading-[20px]'>
                        <h2 className='text-xl text-smallTextColor font-[700]'>Vi An</h2>
                        <p className='text-smallTextColor text-[16px] font-[500]'>Uniform</p>
                    </div>
                </div>
                {/* logo end */}
                {/* menu start */}
                <div className='menu' ref={menuRef} onClick={toggleMenu}>
                    <ul className='flex items-center gap-10'>
                        <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#about">Giới Thiệu</a></li>
                        <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#services">May Đồng Phục</a></li>
                        <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#portfolio">Sản Phẩm</a></li>
                        <li><a onClick={handleClick} className='text-smallTextColor font-[600]' href="#contact">Liên Hệ</a></li>
                    </ul>
                </div>
                {/* menu end */}
                {/* menu right */}
                <div className='flex items-center gap-4'>
                    <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300'><i class="ri-customer-service-fill"></i>0907404677</button>
                    <span onClick={toggleMenu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'><i class='ri-menu-line'></i></span>
                </div>
                {/* menu right end*/}
            </div>
        </div>
    </header>
  )
}

export default Header