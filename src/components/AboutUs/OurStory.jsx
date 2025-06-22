import OurStoryImage from '../../assets/images/our-story.png'; // Save the image locally and import

export default function OurStory() {
  return (
    <section className="bg-white py-16 pl-6 md:pl-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div className='pr-6 md:pr-20'>
          <h2 className="text-4xl font-bold text-gold mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>
          <p className="text-gray-700">
            Exclusive has more than 1 million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-end">
          <img
            src={OurStoryImage}
            alt="Shoppers"
            className="w-full max-w-lg rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

      </div>
    </section>
  );
};

