"use client"
import Image from "next/image";
import Head from 'next/head';
import Lottie from 'react-lottie-player';
import { useRef, useState } from 'react';
import confettiAnimation from '../public/animations/confetti.json';

export default function Home() {
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false); // State to control the visibility of the thank you message
  const lottieRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    isServiceProvider: false,
    isBrandOwner: false,
  });

  const handleSignUpClick = () => {
    if (!hasPlayedOnce) {
      lottieRef.current.play();
      setHasPlayedOnce(true);
    }
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxO2p1yyLkySSW5gq7U6kL_orYFIlOpO6IEu9_FoCLQxk6BrsqpjEIZYNm2Uc3l6gvy/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Server response:', result);
      setShowThankYou(true); // Show thank you message on success
    } catch (error) {
      console.error('Failed to submit form:', error);
      // Optionally handle error (e.g., show error message)
    }
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/ctc.png" type="image/png" />
        <style>{`
          body { background-color: #f9f7ee; }
          @media (max-width: 768px) {
            main {
              padding: 5vh 5vw; /* Adjust padding for smaller screens */
            }
            .relative {
              width: 90%; /* Adjust width for smaller screens */
            }
            .lottie-container {
              width: 100%; /* Full width on small screens */
              height: auto; /* Maintain aspect ratio */
              top: -10%; /* Adjust position */
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
            Enter your main email to receive weekly emails on how to turn words into cash
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
              style={{ width: 700, height: 700, position: 'absolute', top: '-150px', left: '50%', transform: 'translateX(-50%)', zIndex: 0 }}
              loop={false}
              autoplay={false}
              onComplete={() => {
                lottieRef.current.stop();
              }}
              className="lottie-container"
            />
          </div>
          <p className="text-lg mb-10" style={{ color: 'black' }}>
            <strong className="font-bold text-[#4a5efb]">*no spam...just game*</strong>
          </p>
        </section>

        <section className="text-center mb-12" ref={formRef}>
          <h2 className="text-3xl font-bold text-[#4a5efb] mb-10">
            Enter your information below to receive a FREE sign up bonus
          </h2>
          <form onSubmit={handleSubmit} className="bg-[#e0e7ff] p-8 rounded-lg shadow-md w-full max-w-md mx-auto relative z-20">
            <div className="mb-4">
              <label className="block text-left text-lg font-bold mb-2" htmlFor="fullName">
                Full Name*
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-lg font-bold mb-2" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-lg font-bold mb-2">
                What service do you offer?*
              </label>
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="isServiceProvider"
                  name="isServiceProvider"
                  checked={formData.isServiceProvider}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="isServiceProvider" className="text-left">
                  I have an info-product /eCom owner
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isBrandOwner"
                  name="isBrandOwner"
                  checked={formData.isBrandOwner}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="isBrandOwner" className="text-left">
                  I am a copywriter/content creator/agency
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#4a5efb] text-white py-4 px-6 rounded shadow-md hover:bg-[#3a4edb] transition duration-300"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

