"use client"
import Image from "next/image";
import Head from 'next/head';
import Lottie from 'react-lottie-player';
import { useRef, useState } from 'react';
import confettiAnimation from '../public/animations/confetti.json';

export default function Home() {
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
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
        <link rel="icon" href="/ctc.png" type="image/png" />
        <script async src="https://tally.so/widgets/embed.js"></script>
        <style>{`
          body { background-color: #f9f7ee; }
          @media (max-width: 768px) {
            main {
              padding: 5vh 5vw;
            }
            .relative {
              width: 90%;
            }
            .lottie-container {
              width: 100%;
              height: auto;
              top: -10%;
            }
          }
        `}</style>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        {showThankYou && (
          <div className="absolute top-20 bg-white border border-gray-300 shadow-lg p-4 rounded">
            Thank you!
          </div>
        )}
        <section className="text-center mb-12 relative">
          <div className="flex justify-center p-10">
            <Image src="/ctc.png" alt="CTC Image" width={100} height={100} />
          </div>
          <h1 className="text-4xl font-bold text-[#4a5efb] mb-4">
            Private Direct Response Newsletter For Aspiring Brand Owners
          </h1>
          <p className="text-lg p-1" style={{ color: 'black' }}>
            Enter your main email to receive weekly emails on how to collect more cash with the right words.
          </p>
          <div className="relative mb-10 mt-5">
            <button
              className="bg-[#4a5efb] text-white py-4 px-6 rounded shadow-md hover:bg-[#3a4edb] transition duration-300 relative z-10"
              onClick={handleSignUpClick}
            >
              SIGN ME UP!
            </button>
            <Lottie
              ref={lottieRef}
              animationData={confettiAnimation}
              style={{ width: 700, height: 700, position: 'absolute', top: '-150px', left: '50%', transform: 'translateX(-50%)', zIndex: -1 }}
              loop={false}
              onComplete={() => {
                lottieRef.current.stop();
              }}
              className="lottie-container"
            />
          </div>
          <p className="text-lg mb-10" style={{ color: 'black' }}>
            <strong className="font-bold text-[#4a5efb]">*no spam...ever, just game*</strong>
          </p>
        </section>

        <section className="text-center mb-12" ref={formRef}>
          <h2 className="text-3xl font-bold text-[#4a5efb] mb-10">
            Enter your information below to receive a FREE sign up bonus
          </h2>
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

