const PublishingPage = () => {
    return (
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-20">
          <div className="absolute inset-0 opacity-30 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Publishing</h1>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-10"></div>
            </div>
          </div>
        </section>
  
        {/* Main Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Author Image */}
                <div className="md:w-1/3 mb-8 md:mb-0">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    {/* <img
                      src="/placeholder.svg?height=400&width=300"
                      alt="Author"
                      className="w-full h-auto"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = "/placeholder.svg?height=400&width=300"
                      }}
                    /> */}
                  </div>
                </div>
  
                {/* Author Introduction */}
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold mb-6 relative inline-block">
                    Hi!
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
                  </h2>
  
                  <div className="prose prose-lg max-w-none">
                    <p className="mb-4">
                      I'm Malini White, an indie author who has written extensively for my readers in the Western world,
                      particularly, US, Canada and Europe. Even though I have written some short stories for my Indian
                      readers, here's my chance to connect with the Indian readers in a more engaging manner.
                    </p>
  
                    <p className="mb-4">
                      As an author, I celebrate womanhood in all its manifestations– beauty & grace, love & romance,
                      patience & forbearance, kindness & sacrifice. Don't mistake me for a feminist, but I believe that
                      women are the finest creations of God as they happen to be the epitome of all that is good within
                      the universe.
                    </p>
  
                    <p className="mb-4">
                      Nourishing beauty & grace in body, mind & soul has always been a mission for me. It's my passion for
                      healthy living & nurturing a vibrant personality that I believe, I should be sharing with the rest
                      of the world. No wonder, in most of my writings, you would find my passion flowing through the pages
                      while simultaneously trying to enrich you with knowledge & information. I believe in approaching
                      life in a holistic manner and I do hope that it is getting reflected in my work and that everyone
                      finds something of relevance to them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Philosophy Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold inline-block relative">
                  My Philosophy
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
                </h2>
              </div>
  
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg leading-relaxed mb-6">
                  When I'm not writing about leading healthy life styles and building vibrant personalities, you would
                  find me taking you to a complex world of human beliefs & prejudices, passions and emotions. A natural
                  story-teller, I enjoy connecting with my readers through my stories and characters. I believe in the
                  heights of human imagination and the depths of human emotions.
                </p>
  
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-xl">1</span>
                    </div>
                    <h3 className="font-bold mb-2">Beauty & Grace</h3>
                    <p className="text-gray-600">Celebrating the beauty and grace inherent in womanhood</p>
                  </div>
  
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-xl">2</span>
                    </div>
                    <h3 className="font-bold mb-2">Holistic Living</h3>
                    <p className="text-gray-600">Approaching life with balance of mind, body, and soul</p>
                  </div>
  
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-xl">3</span>
                    </div>
                    <h3 className="font-bold mb-2">Human Emotions</h3>
                    <p className="text-gray-600">Exploring the depths of human emotions through storytelling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Quote Section */}
        <section className="py-16 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl italic font-light">
                "Nourishing beauty & grace in body, mind & soul has always been a mission for me. It's my passion for
                healthy living & nurturing a vibrant personality."
              </blockquote>
              <div className="w-16 h-1 bg-yellow-500 mx-auto my-8"></div>
              <p className="text-xl">Malini White</p>
            </div>
          </div>
        </section>
  
        {/* Writing Focus */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold inline-block relative">
                  My Writing Focus
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
                </h2>
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-yellow-600">Healthy Living</h3>
                  <p className="text-gray-700">
                    My passion for healthy living and nurturing vibrant personalities flows through my writing. I share
                    practical knowledge and information to help readers approach life in a holistic manner.
                  </p>
                </div>
  
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-yellow-600">Human Emotions</h3>
                  <p className="text-gray-700">
                    I explore complex worlds of human beliefs, prejudices, passions, and emotions through storytelling. I
                    connect with readers through compelling characters and narratives.
                  </p>
                </div>
  
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-yellow-600">Womanhood</h3>
                  <p className="text-gray-700">
                    I celebrate womanhood in all its manifestations – beauty & grace, love & romance, patience &
                    forbearance, kindness & sacrifice.
                  </p>
                </div>
  
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-yellow-600">Cultural Connections</h3>
                  <p className="text-gray-700">
                    Having written for Western audiences and Indian readers, I bridge cultural gaps through universal
                    themes and relatable characters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Connect Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
              <p className="text-lg mb-8">
                I'd love to hear from my readers and connect with you on this journey of storytelling and exploration.
              </p>
              <a
                href="#contact"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default PublishingPage
  
  