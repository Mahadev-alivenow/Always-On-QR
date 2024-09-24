import PriceCard from "./PriceCard";
import  PriceCardSlider  from "./PriceCardSlider";

const SliderComponent = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap">
      <div className="inline-block px-4">
        <PriceCardSlider
          image="/images/Icon01.png"
          plans="Starter"
          usage="5 QR Codes (Lifetime)"
          price="0"
          buttonText="Try Now"
        />
      </div>

      <div className="inline-block px-4">
        {/* <img src="https://via.placeholder.com/150" alt="Slide 2" /> */}
        {/* <PriceCardSlider
          image="/images/Icon01.png"
          plans="Starter"
          usage="5 QR Codes (Lifetime)"
          price="0"
          buttonText="Try Now"
        /> */}
        <PriceCardSlider
          image="/images/Icon01.png"
          plans="Starter"
          usage="5 QR Codes"
          price="0"
          buttonText="Try Now"
        />
      </div>
      <div className="inline-block px-4">
        {/* <img src="https://via.placeholder.com/150" alt="Slide 3" /> */}
        <PriceCardSlider
          image="/images/Icon01.png"
          plans="Starter"
          usage="5 QR Codes"
          price="0"
          buttonText="Try Now"
        />
      </div>
      {/* Add more slides as needed */}
    </div>
  );
};

export default SliderComponent;
