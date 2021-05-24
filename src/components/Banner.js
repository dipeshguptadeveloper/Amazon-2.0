import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB668432235_.jpg"
            alt=""
          />
        </div>
        {/* <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div> */}
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/March-21/Network_Hero_banners/HeroPC_1500x600_5._CB657961025_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Grocery_1500x600._CB669573043_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/May21/Pantry_GW_PC_1500x600._CB668560205_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/1500X600._CB668498028_.png"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_1500x600._CB668022827_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Household_1500x600_V2._CB670004437_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
