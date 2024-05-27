import React from 'react';

function App() {
  return (
    <div className="bg-white">
      {/* Logo */}
      <div className="bg-white px-16 flex">
        <img src="/logo.png" alt="Bali Good Guide" className="h-16" />
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img src="/background.png" alt="Bali Good Guide" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white bg-black bg-opacity-50 p-16">
        <h1 className="text-8xl font-bold text-shadow">Bali Good Guide</h1>
        <h2 className="text-5xl mt-2 text-shadow">Unveiling Island Secrets</h2>
          <p className="mt-4 max-w-lg">
            Discover the best of Bali with Bali Good Guide, your go-to source for travel tips, cultural insights, and local recommendations on this enchanting island.
          </p>
          <a href="#introduction" className="btn text-white py-2 px-4 rounded mt-4 w-auto">Explore</a>
        </div>
      </div>

      {/* Introduction Section */}
      <div id="introduction" className="flex items-center justify-start p-16">
        <div className="w-full bg-white flex items-center">
          <img src="/introduction.png" alt="Bali Good Guide" className="w-1/4 object-cover " style={{ aspectRatio: '1' }} />
          <div className="flex-1 p-8">
            <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Bali Good Guide</h1>
            <p className="text-lg">
              Your dedicated source for all things Bali! Our passion for travel and exploration has led us to create a platform where we can share our love for this enchanting island and help fellow travelers make the most of their Bali experience.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="p-16 bg-[#f7f5ff] flex items-center justify-start">
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-black">Our Mission</h1>
            <p className="mr-16">
              At Bali Good Guide, we believe that Bali is more than just a destination - it's a realm of wonder waiting to be explored. Our mission is to uncover the hidden gems, remarkable attractions, delectable eateries, and thrilling adventures that Bali has to offer. Through our carefully curated recommendations, we aim to guide you towards unforgettable experiences that capture the heart and soul of this tropical paradise.
            </p>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4 text-black">Meet Our Team of Explorers</h1>
            <p className="mr-16">
              We are a team of avid travelers, adventure seekers, and Bali enthusiasts. With a deep affection for Bali's rich culture, stunning landscapes, and vibrant communities, we've dedicated ourselves to discovering the island's best-kept secrets and sharing them with you. Our diverse backgrounds and experiences ensure a well-rounded perspective, allowing us to bring you a comprehensive guide that caters to every traveler's interests.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src="/yoga.png" alt="Yoga" className="w-32 object-cover " style={{ aspectRatio: '1' }} />
          <img src="/tanahlot.png" alt="Tanah Lot" className="w-32 object-cover " style={{ aspectRatio: '1' }} />
          <img src="/sawah.png" alt="Sawah" className="w-32 object-cover " style={{ aspectRatio: '1' }} />
          <img src="/nusapenida.png" alt="Nusa Penida" className="w-32 object-cover " style={{ aspectRatio: '1' }} />
        </div>
      </div>


      {/* Why Bali Good Guide */}
      <div className="p-16">
        <h1 className="text-3xl font-bold mb-8 text-center text-black">Why Bali Good Guide?</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img src="/authentic.png" alt="Authentic Insight" className="h-80 rounded-[30px] mb-4" />
            <h2 className="text-xl font-bold mb-2 text-black">Authentic Insight</h2>
            <p className="text-center">
              We don’t scratch the surface, we delve deep into Bali’s neighborhoods, culture, and experiences, providing you with authentic insights that go beyond the tourist hotspots.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/curated.png" alt="Curated Recommendations" className="h-80 mb-4" />
            <h2 className="text-xl font-bold mb-2 text-black">Curated Recommendations</h2>
            <p className="text-center">
              Our team scours the island to handpick the finest restaurant, awe-inspiring attractions, and exhilarating activities, ensuring you have access to the crème de la crème of Bali's offerings.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/local.png" alt="Local Expertise" className="h-80 mb-4" />
            <h2 className="text-xl font-bold mb-2 text-black">Local Expertise</h2>
            <p className="text-center">
              Years of exploring Bali have given us an intimate understanding of its nuances. Count on us to steer you towards the most genuine Balinese experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start p-16 flex-col md:flex-row">
        <div className="w-1/3 bg-white flex items-center mx-auto mb-8 md:mb-0 md:order-2">
          <img src="/pantai.png" alt="Pantai" className="w-4/5 object-cover" />
        </div>
        <div className="flex-1 text-center md:text-left md:mr-24">
          <h1 className="text-3xl font-bold mb-4 text-black">Join Us on This Journey</h1>
          <p>
            We invite you to embark on this journey with us - a journey of discovery, adventure, and cultural immersion. Let Bali Good Guide be your compass as you navigate the diverse landscapes and vibrant communities that make Bali a one-of-a-kind destination.
          </p>
          <a href="https://play.google.com/store/apps/details?id=biz.timegap.app">
            <button className="btn text-white mt-4">Join with us</button>
          </a>
        </div>  
      </div>


      {/* Connect With Us Section */}
      <div className="p-16">
        <h1 className="text-3xl font-bold mb-8 text-center text-black">Connect with Us</h1>
        <p className="mb-16 justify-center">
          Have questions, recommendations, or simply want to share your Bali
          stories? We'd love to hear from you. Reach out to us through our
          contact page or connect with us on social media. Let's build a
          community of passionate travelers who are united by their love for
          Bali and the desire to explore its wonders.
        </p>
      </div>


      {/* Social Media Section */}
      <div className="py-4 px-16 flex justify-start space-x-4 bg-[#f7f5ff]">
      <a href="https://www.timegap.biz/en">
        <img src="/web.png" alt="Website" className="h-8" />
      </a>
      <a href="wa.me/6281292723085">
        <img src="/wa.png" alt="Whatsapp" className="h-8" />
      </a>
      <a href="https://www.instagram.com/timegpid?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
        <img src="/ig.png" alt="Instagram" className="h-8" />
      </a>
      </div>
    </div>
  );
}

export default App;
