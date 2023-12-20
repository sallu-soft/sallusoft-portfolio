const services = [
    {
      title: 'Web Design',
      description: 'Create visually appealing and user-friendly websites.',
      icon: '💻',
    },
    {
      title: 'Web Development',
      description: 'Create visually appealing and user-friendly websites.',
      icon: '💻',
    },
    {
      title: 'Graphic Design',
      description: 'Build cutting-edge mobile applications for iOS and Android.',
      icon: '📱',
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your website\'s search engine ranking and visibility.',
      icon: '🔍',
    },
  ];
  
  const ServicesSection = () => {
    return (
      <section className="bg-gray-100 py-12" id="services">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Our Awesome Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
            //   <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            //     <div className="text-3xl mb-4">{service.icon}</div>
            //     <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            //     <p className="text-gray-600">{service.description}</p>
            //   </div>
            <div key={index} className="shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
            <div className="w-[100px] flex justify-center items-center text-4xl h-[100px] bg-white shadow-lg rounded-full mb-4">{service.icon}</div>
            <h3 className="font-bold text-[#3634a7] text-xl">{service.title}</h3>
            <p className="mt-2 text-gray-500 text-sm">
            {service.description}
            </p>
          </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;