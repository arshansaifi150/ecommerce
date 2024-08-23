import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade"

function MainBanner() {
  const myStyle = [
    {
     style:{ backgroundImage:
        "url('https://img.freepik.com/free-photo/style-fashion-clothes-men-s-wear-concept-isolated-view-stylish-young-bearded-male-model-with-wavy-hair-posing-wearing-trendy-plaid-shirt-looking-away-buttoning-up-cuff_343059-1871.jpg?t=st=1724159394~exp=1724162994~hmac=a3ce94a86a1974b3f0abeca5996e895becc801853e62d7bfa993ffb271f6e49f&w=1060')",
      height: "94vh",

      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
      },
      info:{
        name:"Men's Collection",
        description:"Discover the latest men's fashion trends",
        button:(
          <Button className="">
            Shop Now
          </Button>
          )
      }
    },
    {
     style:{ backgroundImage:
        "url('https://img.freepik.com/free-photo/elegant-woman-looking-watch_23-2147762392.jpg?t=st=1724159586~exp=1724163186~hmac=e3b9d7282e86113e3bfe768e8b6fdb1d57b91378da548a3c1880111138817e2d&w=1060')",
      height: "94vh",

      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
      },
      info:{
        name:"Women's Collection",
        description:"Discover the latest women's fashion trends",
        button:(
          <Button className="">
            Shop Now
          </Button>
        )
      }
    },

    {
      style:{ backgroundImage:
        "url('https://img.freepik.com/free-photo/girl-posing-with-shopping-bags_23-2147825037.jpg?t=st=1724159646~exp=1724163246~hmac=8112fcc3de5300d7c06450cfcd04b76159002c2da20cea296a004b9f5f04f6df&w=1380')",
      height: "94vh",

      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
      },
      info:{
        name:"Kid's Collection",
        description:"Discover the latest kids' fashion trends",
        button:(
          <Button className="">
            Shop Now
          </Button>
        )
      }
    },
  ];

  return (
    <div className="w-full -mt-[15vh]">
      <Carousel
        opts={{
          dots: true,
          infinite: true,
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            disableOnInteraction: false,
            stopOnMouseEnter:false
          }),
          Fade({
            crossFade: true,
            duration:7000,
            
          })
          

        ]}
      >
        <CarouselContent>
          {myStyle?.map((banner,index)=>(

          <CarouselItem key={index}>
            <div style={banner.style} className=" flex justify-start items-center">
              <div className=" h-[50%] w-[40%] flex flex-col items-center justify-center gap-5">
                <div>
                  <h1 className="text-5xl font-bold text-slate-100  ">{banner.info.name}</h1>
                </div>
                <div>
                  <p className="text-xl text-white">{banner.info.description}</p>
                </div>
                <div>
                  {banner.info.button}
                </div>
              </div>
            </div>
          </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default MainBanner;
