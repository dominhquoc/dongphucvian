import React, { useState, useEffect } from 'react';
import data from '../../assets/data/portfolioData';
import Modal from './Modal';

const Porfolio = () => {

    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    const showModalHandler = id => {
        setShowModal(true)
        setActiveID(id)
    }

    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3)
    }
    
    useEffect(() => {
        if(selectTab === 'all'){
            setPortfolios(data)
        }

        if(selectTab === 'Web'){
            const filteredData = data.filter(item => item.category === 'Web')
            setPortfolios(filteredData)
        }

        if(selectTab === 'Ux'){
            const filteredData = data.filter(item => item.category === 'Ux')
            setPortfolios(filteredData)
        }
    }, [selectTab])


    return (
        <section id='portfolio'>
            <div className='container'>
                <div className='flex items-center justify-between flex-wrap'>
                    <div className='mb-7 sm:mb-0'>
                        <h3 className='text-headingColor text-[2rem] font-[700]'>
                            My
                        </h3>
                    </div>

                    <div className='flex gap-3'>
                        <button onClick={() => setSelectTab('all')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>Tất Cả</button>
                        <button onClick={() => setSelectTab('Web')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>Sơ Mi</button>
                        <button onClick={() => setSelectTab('Ux')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>Vestib</button>
                    </div>
                </div>

                <div className='flex items-center gap-4 flex-wrap mt-12'>
                    {
                        portfolios?.slice(0, nextItems)?.map((porfolio, index) => (
                            <div key={index} data-aos='fade-zoom-in' data-aos-delay='50' data-aos-duration='1000' className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                                <figure >
                                    <img className='rounded-[8px]' src={porfolio.imgUrl} alt="" />
                                </figure>

                                <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                                    <div className='w-full h-full flex items-center justify-center'>
                                        <button onClick={() => showModalHandler(porfolio.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>Xem chi tiết</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='text-center mt-6'>
                    {
                        nextItems < portfolios.length && data.length > 6 && (<button onClick={loadMoreHandler} className='text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>Xem Thêm</button>
                        )
                    }
                </div>
            </div>

            {
                showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
            }

        </section>
    )
}

export default Porfolio