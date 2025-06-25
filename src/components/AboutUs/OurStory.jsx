import OurStoryImage from '../../assets/images/our-story.png'; // Save the image locally and import

export default function OurStory() {
  return (
    <section className="bg-white py-16 pl-6 md:pl-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <div className='pr-6 md:pr-15'>
          <h2 className="text-4xl font-bold text-gold mb-6">Our Story</h2>
          <p className="text-black-700 mb-4">
            While global markets and flashy brands dominate the spotlight, the beauty of local craftsmanship is fading into the background. The people who create with their hands, who weave stories into every thread, stroke, or clay mold... they’re not being heard. And yet, their creations hold culture, tradition, and authenticity that cannot be mass-produced          </p>
          <p className="text-black-700">
            This isn’t just a website.
            It’s a movement of empowerment, creativity, and cultural pride.

            When you support ADWUMA Craft, you’re not just buying a product,
            You’re backing a story. You’re sustaining a craft. You’re uplifting a maker          </p>
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

