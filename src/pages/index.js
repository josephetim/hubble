import Image from "next/image";
import "@/app/globals.css";
import Header from "@/components/header";
import background from "@/assets/hero-bg.png";
import hubbleAd from "@/assets/hubble-ad.png";
import lekki from "@/assets/lekki.png";
import message from "@/assets/message.png";
import tel from "@/assets/tel.png"
import logoWhite from "@/assets/logo-white.png";
import maggiAd from "@/assets/maggi-ad.png";
import mapAd from "@/assets/map-ad.png";
import miloAd from "@/assets/milo-ad.png";
import uyo from "@/assets/uyo.png";


export default function LandingPage() {
   return (
    <div className="bg-black relative">
       
    <div className="flex overflow-hidden relative flex-col items-center px-20 pt-12 pb-20 w-full font-bold text-white leading-[110%] min-h-[816px] max-md:px-5 max-md:max-w-full">
   
  <Image
    alt="background-image"
    loading="lazy"
    src={background}
    className="object-cover absolute inset-0 size-full"
  />
 <Header />

  
  
  <div className="relative mt-28 text-7xl text-center leading-[64.8px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
    Reach Thousands. Every Day. With Hubble{" "}
  </div>
  <div className="relative mt-9 text-3xl font-thin leading-9 text-center w-[1024px] max-md:max-w-full">
    Dominate busy city routes and captivate your target audience with
    eye-catching rooftop displays.
  </div>
  <div className="relative justify-center px-8 pt-4 pb-5 mt-9 mb-40 text-2xl bg-blue-700 rounded-[100px] max-md:px-5 max-md:mb-10">
    Advertise with Hubble
  </div>
</div>
<div className="flex align-center justify-center">
<div className="justify-between self-center px-20 py-20 mt-20 w-full bg-blue-800 max-w-[1200px] rounded-[64px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col justify-center self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
        <div className="text-6xl font-bold text-left leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          What’s Hubble?
        </div>
        <div className="mt-6 font-light text-xl  leading-8 max-md:max-w-full">
          Hubble is a revolutionary mobile advertising platform that
          utilizes a network of taxis equipped with high-tech rooftop smart
          screens. These digital displays become vibrant billboards,
          showcasing captivating ads to a massive audience on the move.
          Hubble empowers businesses to reach their target customers with
          laser focus, while taxi companies can generate additional revenue
          through strategic partnerships.
        </div>
      </div>
    </div>
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center w-full bg-neutral-900 rounded-[40px] max-md:mt-10 max-md:max-w-full">
        <Image
          alt="hubble Ad"
          loading="lazy"
          src={hubbleAd}
          className="w-full aspect-[1.2] max-md:max-w-full"
        />
      </div>
    </div>
  </div>
</div>
</div>
<div className="flex align-center justify-center">
<div className="flex flex-col justify-center self-center px-20 pt-14 pb-16 mt-36 w-full bg-zinc-900 max-w-[1200px] rounded-[64px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="self-center text-7xl font-bold text-center text-white leading-[64.8px] max-md:max-w-full max-md:text-4xl">
        Why Choose Hubble?
      </div>
      <div className="mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center px-10 py-14 w-full text-white bg-neutral-900 rounded-[48px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-bold leading-9 text-left">
                Extensive Reach
              </div>
              <div className="mt-2 font-light text-xl leading-8">
                Hubble&apos;s expansive network of taxis guarantees maximum
                visibility across busy city routes, reaching millions of
                potential customers daily.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center px-10 py-14 w-full text-white bg-neutral-900 rounded-[48px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-bold leading-9 text-left">
                Cost-Effective Ads
              </div>
              <div className="mt-2 font-light text-xl  leading-8">
                Hubble offers some of the best rates per view in the industry.
                Get exceptional value for your advertising budget and stretch
                your marketing funds further.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center px-10 py-10 w-full text-white bg-neutral-900 rounded-[48px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-bold leading-9 text-left">
                Data-Driven Decisions
              </div>
              <div className="mt-2 font-light text-xl leading-8">
                Don&apos;t advertise blindly. Hubble provides valuable insights on
                estimated commuters and trending events in your target areas.
                Leverage this data to optimize your campaigns for maximum
                impact.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center px-10 py-10 w-full text-white bg-neutral-900 rounded-[48px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-bold leading-9 text-left">
                Targeted Visibility
              </div>
              <div className="mt-2 font-light text-xl leading-8">
                Go beyond traditional advertising. Hubble allows you to
                hyper-target your campaigns by location and time. Reach your
                ideal customers exactly when and where they are most receptive
                to your message.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
<div className="flex align-center justify-center">
<div className="self-center mt-36 text-7xl font-bold text-center text-white leading-[65px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
      Hubble: A better way to place ads that actually converts
    </div>
    
</div>
<div className="flex py-20 align-center justify-center">
<div className="flex mt-10 justify-center items-center px-16 py-10 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="w-full max-w-[1120px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch my-auto text-white max-md:mt-10">
              <div className="text-4xl font-bold leading-9 text-left">
                Create Engaging Ads
              </div>
              <div className="mt-4 font-light text-xl leading-8">
                Hubble supports a variety of media formats, including MP4
                videos, GIFs, and high-resolution image slideshows. <br />
                Capture attention with dynamic content that resonates with your
                audience and leaves a lasting impression.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
            <Image
              alt="Maggi Ad"
              loading="lazy"
              src={maggiAd}
              className="grow w-full aspect-[1.23] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
</div>
<div className="flex py-20 align-center justify-center">
<div className="w-full mt-10 max-w-[1187px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
          <Image
            alt="maps"
            loading="lazy"
            src={mapAd}
            className="grow w-full aspect-[1.23] max-md:mt-10 max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch my-auto text-white max-md:mt-10">
            <div className="text-4xl font-bold leading-9 text-center">
              Reach a Larger Audience
            </div>
            <div className="mt-4 font-light text-xl leading-8">
              We partner with location intelligence platforms to provide helpful
              insights on population, reach and district information about
              trending events and behavioural insights. Our Hubble routes are
              carefully chosen based on traffic information (population per
              square meter) to ensure your ads are shown to the maximum possible
              number of people.
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
<div className="flex py-20 align-center justify-center">
<div className="w-full mt-10 max-w-[1120px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch my-auto text-white max-md:mt-10">
            <div className="text-4xl font-bold leading-9 text-left">
              Weatherproof Tech
            </div>
            <div className="mt-4 text-xl font-light leading-8">
              With a large (37’’ x 12’’) fullscreen display, Our rooftop
              displays are built to withstand even the harshest weather
              conditions, ensuring your brand&apos;s message is delivered
              consistently.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center w-full bg-neutral-900 rounded-[40px] max-md:mt-10 max-md:max-w-full">
          <Image 
          alt="milo ad"
          src={miloAd}
          loading="lazy"
         />
          </div>
        </div>
      </div>
    </div>
</div>
<div className="flex align-center justify-center">
<div className="flex flex-col w-full max-w-[1200px] max-md:max-w-full">
      <div className="mx-8 text-7xl  text-center text-white leading-[64.8px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
        We’re in Lekki & Uyo, coming soon to you
      </div>
      <div className="justify-between mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center w-full text-5xl font-bold leading-10 text-white bg-neutral-900 rounded-[40px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <div className="overflow-hidden bg-black relative flex-col items-start px-8 pt-64 pb-6 w-full min-h-[320px] max-md:px-5 max-md:pt-10 max-md:max-w-full max-md:text-4xl">
                <Image
                  alt="Lekki"
                  loading="lazy"
                  src={lekki}
                  className="object-cover absolute inset-0 size-full"
                />
               
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center w-full text-5xl font-bold leading-10 text-white bg-neutral-900 rounded-[40px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <div className="overflow-hidden relative flex-col items-start px-8 pt-64 pb-6 w-full min-h-[320px] max-md:px-5 max-md:pt-10 max-md:max-w-full max-md:text-4xl">
                <Image
                  alt="Uyo"
                  loading="lazy"
                  src={uyo}
                  className="object-cover absolute inset-0 size-full"
                />
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center p-14 mt-20 bg-blue-800 rounded-[48px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="my-auto font-normal text-4xl leading-9 text-white max-md:max-w-full">
            Notify me when Hubble is in my city
          </div>
          <div className="flex gap-2 text-xl max-md:flex-wrap max-md:max-w-full">
            <input className="items-start px-8 font-light pt-2.5 pb-4 text-gray-400 bg-white border border-gray-300 border-solid shadow-sm leading-[120%] rounded-[80px] max-md:px-5"
            placeholder="Enter email address"
            />
              
            
            <div className="justify-center font-normal text-center self-start px-6 pt-3 pb-4 text-white bg-blue-700 leading-[110%] rounded-[100px] max-md:px-3">
              Notify Me
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
<div className="flex align-center justify-center">
<div className="flex flex-col justify-between items-center px-16 pt-20 pb-10 w-full text-xl font-medium leading-8 text-white bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col">
          <Image
            alt="logo"
            loading="lazy"
            src={logoWhite}
            className="max-w-full aspect-[3.45] w-[145px]"
          />
          <div className="font-light">A better way to advertise</div>
        </div>
        <div className="font-light self-end mt-11 max-md:mt-10">
          2024. All Rights Reserved
        </div>
        <div className="flex flex-col justify-center self-start mt-1">
          <div className="flex gap-3 whitespace-nowrap">
            <Image
              alt="message"
              loading="lazy"
              src={message}
              className="shrink-0 my-auto w-6 aspect-square"
            />
            <div className="font-light">info@hubblehq.ad</div>
          </div>
          <div className="flex gap-3 mt-2">
            <Image
              alt="phone"
              loading="lazy"
              src={tel}
              className="shrink-0 my-auto w-6 aspect-square"
            />
            <div className="font-light">+234 687 695 5458</div>
          </div>
        </div>
      </div>
    </div>
</div>
<div className="flex align-center justify-center">
    
</div>

</div>
   )
}