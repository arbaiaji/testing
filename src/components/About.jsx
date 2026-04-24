const imgRectangle9 = 'https://www.figma.com/api/mcp/asset/c97d255d-7adc-4b52-bc7b-12ede8cdb8fa'
const imgRectangle8 = 'https://www.figma.com/api/mcp/asset/45314bd3-cd27-47af-adef-d64239ea6c85'
const imgRectangle10 = 'https://www.figma.com/api/mcp/asset/bceaef3f-3246-42dd-b756-f5da9ea225ef'
const imgDottedShape = 'https://www.figma.com/api/mcp/asset/94d7c6c2-7154-4245-8849-f8a9ac2d7a24'

export default function About() {
  return (
    <section className="bg-white w-full py-16 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-[60px] xl:gap-[100px] items-center justify-center">

        {/* Image Collage */}
        <div className="relative w-full max-w-[600px] h-[670px] shrink-0">
          {/* Top-left image */}
          <div className="absolute left-0 top-0 w-[270px] h-[320px] rounded-[15px] overflow-hidden">
            <img
              src={imgRectangle8}
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-left image */}
          <div className="absolute left-0 top-[350px] w-[270px] h-[320px] rounded-[15px] overflow-hidden">
            <img
              src={imgRectangle10}
              alt="Person working"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right image (offset) */}
          <div className="absolute left-[300px] top-[121px] w-[270px] h-[400px] rounded-[15px] overflow-hidden">
            <img
              src={imgRectangle9}
              alt="Professional mentor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dotted shape decoration */}
          <div
            className="absolute flex items-center justify-center"
            style={{ left: '465px', top: '444px', width: '133.667px', height: '105.667px' }}
          >
            <div style={{ transform: 'rotate(-90deg)' }}>
              <img
                src={imgDottedShape}
                alt=""
                style={{ width: '105.667px', height: '133.667px' }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[30px] items-start max-w-[500px]">
          {/* Text block */}
          <div className="flex flex-col gap-[15px]">
            {/* Label */}
            <p
              className="font-semibold text-[18px] leading-[26px]"
              style={{ color: '#3758F9' }}
            >
              Why Choose Us
            </p>

            <div className="flex flex-col gap-[18px]">
              {/* Heading */}
              <h2
                className="font-bold text-[40px] leading-[48px] max-w-[469px]"
                style={{ color: '#111928' }}
              >
                Make your customers happy by giving services.
              </h2>

              {/* Body text */}
              <div className="flex flex-col gap-[20px]">
                <p
                  className="text-[16px] leading-[24px] font-normal max-w-[470px]"
                  style={{ color: '#637381' }}
                >
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p
                  className="text-[16px] leading-[24px] font-normal max-w-[389px]"
                  style={{ color: '#637381' }}
                >
                  A domain name is one of the first steps to establishing your brand. Secure a consistent brand image with a domain name that matches your business.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="px-[28px] py-[13px] rounded-[6px] text-white text-[16px] font-medium leading-[24px] cursor-pointer transition-opacity hover:opacity-90 active:opacity-75"
            style={{ backgroundColor: '#3758F9' }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
