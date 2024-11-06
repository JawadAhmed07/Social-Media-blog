import Image from "next/image";


export default function Content() {
    return (
        <div className="container lg:px-24">
            {/*  section */}
            <section className="body-font">
                <div className="container mx-auto flex flex-col px-5 py-10">
                    <h1 className="text-3xl font-bold text-left px-5 mb-6 text-green-600 underline">
                        5 Practical Steps to Sustainable Living: Reduce, Reuse, Recycle
                    </h1>
                    <p className="text-lg leading-relaxed text-gray-700 px-5">
                        Living sustainably doesn’t have to be overwhelming—it’s about making small, thoughtful changes that collectively have a big impact. Adopting the principles of “Reduce, Reuse, Recycle” can help create an eco-friendlier lifestyle, benefiting both the planet and your daily life. Here’s a practical guide to get started!
                    </p>
                </div>
            </section>


            {/* first section */}
            <section className="body-font">
                <div className="container mx-auto flex flex-col px-5 py-10">
                    <h1 className="text-xl font-bold text-left px-5 mb-6">
                        1. Reduce Waste in Daily Life
                    </h1>
                    <div className="flex justify-center">
                        <Image
                            src="/first.png"
                            alt="Image about reducing waste"
                            width={580}
                            height={380}
                            priority
                            className="w-full max-w-md object-cover rounded"
                        />
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 px-5 mt-6">
                        Reducing waste starts with simple swaps. Avoid single-use plastics by opting
                        for reusable bags, containers, and water bottles. You’ll not only reduce
                        landfill waste but also save money over time by investing in long-lasting
                        alternatives.
                    </p>
                </div>
            </section>
            {/* second section */}
            <section className="body-font">
                <div className="container mx-auto flex flex-col px-5 py-10">
                    <h1 className="text-xl font-bold text-left px-5 mb-6">
                    2. Be Mindful of Food Waste                    </h1>
                    <div className="flex justify-center">
                        <Image
                            src="/second.png"
                            alt="Image about reducing waste"
                            width={680}
                            height={380}
                            priority
                            className="w-full max-w-2xl rounded"
                        />
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 px-5 mt-6">
                    Recycling is an essential part of sustainable living, but it only works if done right. Separate materials like plastics, glass, and paper correctly, and check your local recycling guidelines. Proper recycling helps prevent contamination and ensures materials are reused.
                    </p>
                </div>
            </section>
            {/* third section */}
            <section className="body-font">
                <div className="container mx-auto flex flex-col px-5 py-10">
                    <h1 className="text-xl font-bold text-left px-5 mb-6">
                    3. Recycle Correctly
                    </h1>
                    <div className="flex justify-center">
                        <Image
                            src="/third.png"
                            alt="Image about reducing waste"
                            width={580}
                            height={380}
                            priority
                            className="w-full max-w-2xl object-cover rounded"
                        />
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 px-5 mt-6">
                    Recycling is an essential part of sustainable living, but it only works if done right. Separate materials like plastics, glass, and paper correctly, and check your local recycling guidelines. Proper recycling helps prevent contamination and ensures materials are reused.
                    </p>
                </div>
            </section>
            {/* fourth section */}
            <section className="body-font">
                <div className="container mx-auto flex flex-col px-5 py-10">
                    <h1 className="text-xl font-bold text-left px-5 mb-6">
                    4. Give Everyday Items a Second Life
                    </h1>
                    <div className="flex justify-center">
                        <Image
                            src="/fourth.png"
                            alt="Image about reducing waste"
                            width={580}
                            height={380}
                            priority
                            className="w-full max-w-2xl object-cover rounded"
                        />
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 px-5 mt-6">
                    Before discarding items, think of ways to reuse them. Glass jars make great storage containers, old clothes can become cleaning rags, and even broken items may be repairable. By reusing, you’re cutting down on the demand for new products and reducing waste.
                    </p>
                </div>
            </section>
            {/* fifth section */}
            <section className="body-font">
                <div className="container mx-auto flex flex-col px-5 py-10">
                    <h1 className="text-xl font-bold text-left px-5 mb-6">
                    5. Get Creative with Repurposing
                    </h1>
                    <div className="flex justify-center">
                        <Image
                            src="/fifth.png"
                            alt="Image about reducing waste"
                            width={580}
                            height={380}
                            priority
                            className="w-full max-w-md object-cover rounded"
                        />
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700 px-5 mt-6">
                    Repurposing gives items a new purpose, extending their life cycle. Try DIY projects with old furniture or upcycle packaging materials for storage. A little creativity goes a long way in reducing waste and making sustainable living more fun and personal.
                    </p>
                </div>
            </section>

        </div>
    )
}