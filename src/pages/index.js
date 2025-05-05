import Image from "next/image";
import "@/app/globals.css";
import Header from "@/components/header";
import background from "@/assets/hero-bg.png";
import hubbleAd from "@/assets/hubble-ad.png";
import lekki from "@/assets/lekki.png";
import message from "@/assets/message.png";
import tel from "@/assets/tel.png";
import logoWhite from "@/assets/logo-white.png";
import maggiAd from "@/assets/maggi-ad.png";
import mapAd from "@/assets/map-ad.png";
import miloAd from "@/assets/milo-ad.png";
import uyo from "@/assets/uyo.png";
import SignalIndicator from "@/components/Indicator";
import RootLayout from "@/app/layout";

export default function LandingPage() {
  return (
    <div style={{ fontFamily: "Darker Grotesque" }} className="bg-black relative">
      {/* Hero Section */}
      <div className="flex z-20 overflow-hidden relative flex-col items-center px-5 sm:px-10 pt-5 sm:pt-10 pb-10 sm:pb-20 w-full font-bold text-white leading-[110%] min-h-[60vh] sm:min-h-[816px]">
        <Image
          alt="background-image"
          loading="lazy"
          src={background}
          className="object-cover absolute inset-0 size-full"
        />
        <Header />

        <div className="relative mt-20 sm:mt-[180px] text-4xl sm:text-5xl md:text-7xl text-center leading-tight sm:leading-[64.8px]">
          Reach Thousands. Every Day. With Hubble{" "}
        </div>
        <div className="relative mt-4 sm:mt-9 text-xl sm:text-2xl md:text-3xl font-thin leading-normal sm:leading-9 text-center w-full max-w-[1024px] px-4">
          Dominate busy city routes and captivate your target audience with
          eye-catching <br className="hidden sm:block" /> rooftop displays.
        </div>
        <div className="relative justify-center font-bold px-8 py-3 sm:px-10 sm:pt-4 sm:pb-5 mt-6 sm:mt-9 mb-10 sm:mb-40 text-xl sm:text-2xl bg-blue-700 rounded-[100px]">
          Advertise with Hubble
        </div>
      </div>

      {/* What's Hubble? Section */}
      <div className="flex align-center justify-center px-4">
        <div className="justify-between self-center px-6 sm:px-10 md:px-20 py-10 sm:py-20 mt-10 sm:mt-20 w-full bg-blue-800 max-w-[1200px] rounded-3xl sm:rounded-[64px]">
          <div className="flex flex-col md:flex-row gap-8 md:gap-5">
            <div className="flex flex-col w-full md:w-6/12">
              <div className="flex flex-col justify-center self-stretch my-auto text-white">
                <div className="text-3xl sm:text-5xl md:text-[64px] font-bold text-left leading-tight md:leading-[57.6px]">
                  What's Hubble?
                </div>
                <div className="mt-4 sm:mt-6 font-normal text-lg sm:text-[20px] leading-7 sm:leading-8">
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
            <div className="flex flex-col w-full md:w-6/12 md:ml-5">
              <div className="flex flex-col grow justify-center w-full bg-neutral-900 rounded-2xl sm:rounded-[40px]">
                <Image
                  alt="hubble Ad"
                  loading="lazy"
                  src={hubbleAd}
                  className="w-full aspect-[1.2]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Hubble? Section */}
      <div className="flex align-center justify-center px-4">
        <div className="flex flex-col justify-center self-center px-6 sm:px-10 md:px-20 pt-10 sm:pt-14 pb-10 sm:pb-16 mt-20 sm:mt-36 w-full bg-[#1B1B1B] max-w-[1200px] rounded-3xl sm:rounded-[64px]">
          <div className="self-center text-4xl sm:text-5xl md:text-[72px] font-bold text-center text-white leading-tight md:leading-[64.8px]">
            Why Choose Hubble?
          </div>
          <div className="mt-10 sm:mt-16">
            <div className="flex flex-col md:flex-row gap-6 md:gap-5">
              <div className="flex flex-col w-full md:w-6/12">
                <div className="flex flex-col grow justify-center px-6 sm:px-10 py-8 sm:py-14 w-full text-white bg-[#161616] rounded-3xl sm:rounded-[48px]">
                  <div className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-9 text-left">
                    Extensive Reach
                  </div>
                  <div className="mt-4 font-light text-lg sm:text-[20px] leading-7 sm:leading-8">
                    Hubble&apos;s expansive network of taxis guarantees maximum
                    visibility across busy city routes, reaching millions of
                    potential customers daily.
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-6/12">
                <div className="flex flex-col grow justify-center px-6 sm:px-10 py-8 sm:py-14 w-full text-white bg-[#161616] rounded-3xl sm:rounded-[48px]">
                  <div className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-9 text-left">
                    Cost-Effective Ads
                  </div>
                  <div className="mt-4 font-light text-lg sm:text-[20px] leading-7 sm:leading-8">
                    Hubble offers some of the best rates per view in the industry.
                    Get exceptional value for your advertising budget and stretch
                    your marketing funds further.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-5">
              <div className="flex flex-col w-full md:w-6/12">
                <div className="flex flex-col grow justify-center px-6 sm:px-10 py-8 sm:py-10 w-full text-white bg-neutral-900 rounded-3xl sm:rounded-[48px]">
                  <div className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-9 text-left">
                    Data-Driven Decisions
                  </div>
                  <div className="mt-4 font-light text-lg sm:text-[20px] leading-7 sm:leading-8">
                    Don&apos;t advertise blindly. Hubble provides valuable insights on
                    estimated commuters and trending events in your target areas.
                    Leverage this data to optimize your campaigns for maximum
                    impact.
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-6/12">
                <div className="flex flex-col grow justify-center px-6 sm:px-10 py-8 sm:py-10 w-full text-white bg-neutral-900 rounded-3xl sm:rounded-[48px]">
                  <div className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-9 text-left">
                    Targeted Visibility
                  </div>
                  <div className="mt-4 font-light text-lg sm:text-[20px] leading-7 sm:leading-8">
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

      {/* Heading */}
      <div className="flex align-center justify-center mt-20 sm:mt-[144px] px-4">
        <div className="self-center text-4xl sm:text-5xl md:text-[72px] mb-16 sm:mb-[112px] font-bold text-center text-white leading-tight md:leading-[65px]">
          Hubble: A better way to place ads that <br className="hidden sm:block" />actually converts
        </div>
      </div>

      {/* Create Engaging Ads */}
      <div className="flex align-center justify-center px-4">
        <div className="flex justify-center items-center w-full max-w-[1120px]">
          <div className="w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-[106px]">
              <div className="flex flex-col w-full md:w-[410px] order-2 md:order-1">
                <div className="flex flex-col justify-center self-stretch text-white">
                  <div className="text-3xl sm:text-4xl font-bold leading-tight md:leading-9 text-center md:text-left">
                    Create Engaging Ads
                  </div>
                  <div className="mt-4 font-light text-lg sm:text-xl leading-7 sm:leading-8 text-center md:text-left">
                    Hubble supports a variety of media formats, including MP4
                    videos, GIFs, and high-resolution image slideshows. <br className="hidden sm:block" />
                    Capture attention with dynamic content that resonates with your
                    audience and leaves a lasting impression.
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-[512px] order-1 md:order-2">
                <Image
                  alt="Maggi Ad"
                  loading="lazy"
                  src={maggiAd}
                  className="w-full aspect-[1.23] max-w-[512px] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reach a Larger Audience */}
      <div className="flex mt-16 sm:mt-[64px] align-center justify-center px-4">
        <div className="w-full max-w-[1120px]">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-[106px]">
            <div className="flex relative flex-col w-full md:w-[512px]">
              <Image
                alt="maps"
                loading="lazy"
                src={mapAd}
                className="w-full aspect-[1.23] max-w-[512px] mx-auto"
              />
              <SignalIndicator angle={true} />
              <SignalIndicator angle={false} />
            </div>
            <div className="flex flex-col w-full md:w-[410px]">
              <div className="flex flex-col justify-center self-stretch text-white">
                <div className="text-3xl sm:text-4xl font-bold leading-tight md:leading-9 text-center md:text-left">
                  Reach a Larger Audience
                </div>
                <div className="mt-4 font-light text-lg sm:text-xl leading-7 sm:leading-8 text-center md:text-left">
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

      {/* Weatherproof Tech */}
      <div className="flex mt-16 sm:mt-[64px] align-center justify-center px-4">
        <div className="w-full max-w-[1120px]">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-[106px]">
            <div className="flex flex-col w-full md:w-[410px] order-2 md:order-1">
              <div className="flex flex-col justify-center self-stretch text-white">
                <div className="text-3xl sm:text-4xl font-bold leading-tight md:leading-9 text-center md:text-left">
                  Weatherproof Tech
                </div>
                <div className="mt-4 font-light text-lg sm:text-xl leading-7 sm:leading-8 text-center md:text-left">
                  With a large (37'' x 12'') fullscreen display, Our rooftop
                  displays are built to withstand even the harshest weather
                  conditions, ensuring your brand&apos;s message is delivered
                  consistently.
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-[512px] order-1 md:order-2">
              <div className="flex flex-col grow justify-center w-full max-w-[500px] mx-auto">
                <Image
                  alt="milo ad"
                  src={miloAd}
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="flex mt-20 sm:mt-[111.1px] align-center justify-center px-4">
        <div className="flex flex-col w-full max-w-[1200px]">
          <div className="text-3xl sm:text-5xl md:text-[72px] font-bold text-center text-white leading-tight md:leading-[64.8px] px-2">
            We're in Lekki & Uyo, coming soon to you
          </div>
          <div className="mt-10 sm:mt-20">
            <div className="flex flex-col md:flex-row gap-6 md:gap-5">
              <div className="flex flex-col w-full md:w-6/12">
                <div className="flex flex-col grow justify-center w-full text-3xl sm:text-5xl font-bold leading-tight text-white bg-neutral-900 rounded-2xl sm:rounded-[40px]">
                  <div className="overflow-hidden bg-black relative flex-col items-start px-6 sm:px-8 pt-32 sm:pt-64 pb-6 w-full min-h-[220px] sm:min-h-[320px]">
                    <Image
                      alt="Lekki"
                      loading="lazy"
                      src={lekki}
                      className="object-cover absolute inset-0 size-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-6/12">
                <div className="flex flex-col grow justify-center w-full text-3xl sm:text-5xl font-bold leading-tight text-white bg-neutral-900 rounded-2xl sm:rounded-[40px]">
                  <div className="overflow-hidden relative flex-col items-start px-6 sm:px-8 pt-32 sm:pt-64 pb-6 w-full min-h-[220px] sm:min-h-[320px]">
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

          {/* Notification Form */}
          <div className="flex flex-col justify-center p-6 sm:p-14 mt-10 sm:mt-20 bg-blue-800 rounded-3xl sm:rounded-[48px]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-5 justify-between w-full">
              <div className="font-bold text-2xl sm:text-4xl leading-tight text-white">
                Notify me when Hubble is in my city
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 text-lg sm:text-xl">
                <input
                  className="items-start px-4 sm:px-8 font-medium py-3 sm:pt-2.5 sm:pb-4 text-black bg-white border border-gray-300 border-solid shadow-sm leading-[120%] rounded-[80px] w-full sm:w-auto"
                  placeholder="Enter email address"
                />
                <div className="justify-center text-center font-bold px-4 sm:px-6 py-3 sm:pt-3 sm:pb-4 text-white bg-blue-700 leading-[110%] rounded-[100px] w-full sm:w-auto">
                  Notify Me
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex align-center justify-center mt-10">
        <div className="flex flex-col justify-between items-center px-6 sm:px-16 pt-10 sm:pt-[72px] pb-10 w-full text-lg sm:text-xl font-medium leading-7 sm:leading-8 text-white bg-transparent">
          <div className="flex flex-col md:flex-row gap-8 md:gap-5 justify-between w-full max-w-[1200px]">
            <div className="flex flex-col items-center md:items-start">
              <Image
                alt="logo"
                loading="lazy"
                src={logoWhite}
                className="max-w-full aspect-[3.45] w-[145px]"
              />
              <div className="font-light">A better way to advertise</div>
            </div>
            <div className="font-light text-center md:text-right md:self-end">
              2024. All Rights Reserved
            </div>
            <div className="flex flex-col justify-center items-center md:items-start md:self-start">
              <div className="flex justify-between gap-3 whitespace-nowrap">
                <Image
                  alt="message"
                  loading="lazy"
                  src={message}
                  className="shrink-0 my-auto w-6 aspect-square"
                />
                <div className="font-light">info@hubblehq.ad</div>
              </div>
              <div className="flex justify-between gap-3 mt-2">
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
    </div>
  );
}