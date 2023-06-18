import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

export function CustomSwiper() {
  return(
    <div>
      <Swiper
        className="banner"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        >
        <SwiperSlide className='banner_pg'>
            <div class='banner_con'>
            <p style={{marginBottom:'50px'}}><span style={{fontSize:'35px'}}>Patron Members</span><br/>For companies or organizations, legally registered in Korea</p>
            <p>3,000,000 KRW</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='banner_pg'>
            <div class='banner_con'>
            <p style={{marginBottom:'50px'}}><span style={{fontSize:'35px'}}>Corporate Members</span><br/>For companies with more than 10 employees or a turnover above 1 million KRW</p>
            <p>1,500,000 KRW</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='banner_pg'>
            <div class='banner_con'>
            <p style={{marginBottom:'50px'}}><span style={{fontSize:'35px'}}>Entrepreneur Members</span><br/>For companies with less than 10 employees or a turnover below 1 million KRW</p>
            <p>500,000 KRW</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='banner_pg'>
            <div class='banner_con'>
            <p style={{marginBottom:'50px'}}><span style={{fontSize:'35px'}}>Start-Up Members</span><br/>For companies less than 18 months</p>
            <p>200,000 KRW</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='banner_pg'>
            <div class='banner_con'>
            <p style={{marginBottom:'50px'}}><span style={{fontSize:'35px'}}>Individual Members</span><br/></p>
            <p>150,000 KRW</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='banner_pg'>
            <div class='banner_con'>
            <p style={{marginBottom:'50px'}}><span style={{fontSize:'35px'}}>Overseas Members</span><br/>For companies or organizations overseas</p>
            <p>500,000 KRW</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='banner_pg'>
            <div class='banner_con'>
            <p style={{marginBottom:'50px'}}><span style={{fontSize:'35px'}}>Institutional Members</span><br/>For organizations not registered as a company in Korea</p>
            <p>700,000 KRW</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CustomSwiper;