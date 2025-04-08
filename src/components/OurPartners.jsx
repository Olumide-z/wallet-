const partners = [
  { name: 'celestia', logo: '/images/celestia.webp' },
  { name: 'akash', logo: '/images/akash.jpg' },
  { name: 'dydx', logo: '/images/dydx.webp' },
  { name: 'injective', logo: '/images/injective.avif' },
  { name: 'stride', logo: '/images/stride.webp' },
  { name: 'secret', logo: '/images/secret.png' },
];

export default function OurPartners() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Our Partners</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-200">
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-cover w-[200px] h-[50px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
