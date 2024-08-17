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

function MainBanner() {
  const myStyle = [
    {
     style:{ backgroundImage:
        "url('https://images.pexels.com/photos/242829/pexels-photo-242829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
        "url('https://images.pexels.com/photos/12255947/pexels-photo-12255947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
        "url('https://images.pexels.com/photos/1619697/pexels-photo-1619697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      height: "94vh",

      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
      },
      info:{
        name:"Kids' Collection",
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
          }),
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
