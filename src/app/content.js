
import Image from "next/image";

export default function Content() {
  return (
    <div className="container mx-auto lg:px-20 xl:px-40 py-10">
      {/* Main Section Heading */}
      <section className="body-font mb-10 px-4">
        <div className="container mx-auto flex flex-col items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-left text-green-600 underline mb-4">
            5 Practical Steps to Sustainable Living: Reduce, Reuse, Recycle
          </h1>
          <p className="text-lg text-left leading-relaxed text-gray-700 max-w-2xl">
            Living sustainably doesn’t have to be overwhelming—it’s about making small,
            thoughtful changes that collectively have a big impact. Adopting the principles
            of “Reduce, Reuse, Recycle” can help create an eco-friendlier lifestyle,
            benefiting both the planet and your daily life. Here’s a practical guide to
            get started!
          </p>
        </div>
      </section>

      {/* First Section */}
      <section className="body-font mb-10 px-4">
        <div className="container mx-auto flex flex-col sm:flex-col md:flex-row items-center md:space-x-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              1. Reduce Waste in Daily Life
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Reducing waste starts with simple swaps. Avoid single-use plastics by opting
              for reusable bags, containers, and water bottles. You’ll not only reduce
              landfill waste but also save money over time by investing in long-lasting
              alternatives.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <Image
              src="/first.png"
              alt="Image about reducing waste"
              width={480}
              height={280}
              priority
              className="w-full max-w-md object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="body-font mb-10 px-4">
        <div className="container mx-auto flex flex-col sm:flex-col-reverse md:flex-row items-center md:space-x-6">
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <Image
              src="/second.png"
              alt="Image about food waste"
              width={480}
              height={280}
              priority
              className="w-full max-w-md object-cover rounded"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              2. Be Mindful of Food Waste
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Food waste is a major contributor to global waste. Planning meals, using leftovers creatively, and storing food properly can significantly cut down on what’s tossed out. Not only does this conserve resources, but it also saves you money on groceries.
            </p>
          </div>
          
        </div>
      </section>

      {/* Third Section */}
      <section className="body-font mb-10 px-4">
        <div className="container mx-auto flex flex-col sm:flex-col md:flex-row items-center md:space-x-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              3. Recycle Correctly
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Recycling is an essential part of sustainable living, but it only works if done right. Separate materials like plastics, glass, and paper correctly, and check your local recycling guidelines. Proper recycling helps prevent contamination and ensures materials are reused.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <Image
              src="/third.png"
              alt="Image about recycling correctly"
              width={480}
              height={280}
              priority
              className="w-full max-w-md object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="body-font mb-10 px-4">
        <div className="container mx-auto flex flex-col sm:flex-col-reverse md:flex-row items-center md:space-x-6">
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <Image
              src="/fourth.png"
              alt="Image about giving items a second life"
              width={480}
              height={280}
              priority
              className="w-full max-w-md object-cover rounded"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              4. Give Everyday Items a Second Life
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Before discarding items, think of ways to reuse them. Glass jars make great storage containers, old clothes can become cleaning rags, and even broken items may be repairable. By reusing, you’re cutting down on the demand for new products and reducing waste.
            </p>
          </div>
          
        </div>
      </section>

      {/* Fifth Section */}
      <section className="body-font mb-10 px-4">
        <div className="container mx-auto flex flex-col sm:flex-col md:flex-row items-center md:space-x-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              5. Get Creative with Repurposing
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Repurposing gives items a new purpose, extending their life cycle. Try DIY projects with old furniture or upcycle packaging materials for storage. A little creativity goes a long way in reducing waste and making sustainable living more fun and personal.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <Image
              src="/fifth.png"
              alt="Image about repurposing items"
              width={480}
              height={280}
              priority
              className="w-full max-w-md object-cover rounded"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

