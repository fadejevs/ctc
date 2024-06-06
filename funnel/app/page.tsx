"use client"
import Image from "next/image";
import Head from 'next/head';
import Lottie from 'react-lottie-player';
import { useRef, useState } from 'react';
import confettiAnimation from '../public/animations/confetti.json';

export default function Home() {
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const lottieRef = useRef<any>(null);  // Temporarily using 'any' to bypass type issues
  const formRef = useRef<HTMLDivElement>(null);  // Specify the HTML element type

  const handleSignUpClick = () => {
    if (!hasPlayedOnce && lottieRef.current) {
      lottieRef.current.play();
      setHasPlayedOnce(true);
    }
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/ctc.png" type="image/png" />
        <script async src="https://tally.so/widgets/embed.js"></script>
        <meta property="og:title" content="Private Direct Response Newsletter For Brand Owners" />
        <meta property="og:description" content="Enter your best email to receive weekly insights on how you can collect more cash with the right words" />
        <meta property="og:image" content="/cover.png" />
        <meta property="og:url" content="https://cashtocollect.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Private Direct Response Newsletter For Brand Owners" />
        <meta name="twitter:description" content="Enter your best email to receive weekly insights on how you can collect more cash with the right words" />
        <meta name="twitter:image" content="/cover.png" />
        <style>{`
          body { background-color: #f9f7ee; }
          main {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            box-sizing: border-box;
          }
          .relative {
            width: 100%;
          }
          .lottie-container {
            width: 100%;
            height: auto;
            top: -10%;
          }
          @media (max-width: 768px) {
            main {
              padding: 5vh 10vw;  // Adjusted padding for tablet and smaller devices
            }
            .relative {
              width: 90%;
            }
            .lottie-container {
              width: 100%;
              height: auto;
              top: -10%;
            }
            .text-center h1, .text-center h4, .text-center p, .text-center div, .text-center button {
              padding: 0 5vw;  // Add padding to the sides for all text elements
            }
            .text-center h1 {
              font-size: 20px !important;  // Smaller font size for h1 below tablet size, forced
            }
            .testimonial-container {
              flex-direction: column;
              align-items: center;
            }
            .testimonial-image {
              transform: none; // Remove rotation on smaller screens
              margin: 10px 0; // Stack images vertically with space between
            }
          }
          .line-through {
            text-decoration: line-through;
          }
          .testimonial-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            position: relative;
            height: auto;
            min-height: 400px; // Ensure container has height to allow overlap
          }
          .testimonial-image {
            width: 200px;
            height: 200px;
            margin: 5px;
            position: absolute;
            transform: translate(-50%, -50%);
            left: ${Math.random() * 80 + 10}%;
            top: ${Math.random() * 60 + 20}%;
          }
        `}</style>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <section className="text-center mb-12 relative">
          <div className="flex justify-center p-10">
            <Image src="/ctc.png" alt="CTC Image" width={100} height={100} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#4a5efb] mb-4 mx-auto md:w-3/5">
            Private Direct Response Newsletter For Brand Owners
          </h1>
          <p className="text-lg p-4 mx-auto md:w-3/5" style={{ color: 'black' }}>
            Enter your best email to receive weekly letters on how you can collect more cash with the right words
          </p>
          <p className="text-lg mb-4 mt-3" style={{ color: 'black' }}>
            <strong className="font-bold text-[#4a5efb]">*no spam...ever, just value*</strong>
          </p>
          <div className="relative mb-10 mt-10">
            <button
              className="bg-[#4a5efb] text-white py-4 px-6 rounded shadow-md hover:bg-[#3a4edb] transition duration-300 relative z-10"
              onClick={handleSignUpClick}
            >
              SIGN ME UP!
            </button>
            <Lottie
              ref={lottieRef}
              animationData={confettiAnimation}
              style={{ width: '100%', height: '700px', position: 'absolute', top: '-150px', left: '50%', transform: 'translateX(-50%)', zIndex: -1 }}
              loop={false}
              onComplete={() => {
                lottieRef.current.stop();
              }}
              className="lottie-container"
            />
          </div>
        </section>
          <div className="testimonial-container mb-20">
            <div className="flex flex-wrap justify-center">
              <Image src="/testimonials/1.jpeg" alt="testimonial" width={300} height={100} className="testimonial-image" style={{ transform: `rotate(${Math.random() * 10 - 5}deg)` }}/>
              <Image src="/testimonials/3.png" alt="testimonial" width={600} height={100} className="testimonial-image" style={{ transform: `rotate(${Math.random() * 10 - 5}deg)` }}/>
            </div>
            <div className="flex flex-wrap justify-center">
              <Image src="/testimonials/4.png" alt="testimonial" width={400} height={200} className="testimonial-image" style={{ transform: `rotate(${Math.random() * 10 - 5}deg)` }}/>
              <Image src="/testimonials/5.png" alt="testimonial" width={500} height={100} className="testimonial-image" style={{ transform: `rotate(${Math.random() * 10 - 5}deg)` }}/>
              <Image src="/testimonials/6.png" alt="testimonial" width={300} height={200} className="testimonial-image" style={{ transform: `rotate(${Math.random() * 10 - 5}deg)` }}/>
            </div>
          </div>

        <section className="text-center mb-12" ref={formRef}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
            <iframe
              src="https://tally.so/embed/w5dREN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              style={{ width: '100%', maxWidth: '500px', height: '500px', border: 'none' }}
              loading="lazy"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Tally Form"
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}


