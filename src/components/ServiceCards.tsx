import { motion } from 'framer-motion'

const services = [
  {
    title: "Web Development",
    description: "Full-stack development with modern technologies",
    price: "$999",
    features: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment",
    price: "$1499",
    features: ["AWS", "Azure", "DevOps"]
  },
  {
    title: "AI Integration",
    description: "Smart solutions powered by artificial intelligence",
    price: "$2999",
    features: ["Machine Learning", "Neural Networks", "Data Analysis"]
  }
]

export default function ServiceCards() {
  return (
    <div className=" mx-auto -mt-44 max-w-7xl z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 ">
        {services.map((service) => (
          <div
            key={service.title}
            className="w-full p-6 rounded-2xl bg-gradient-to-br from-yellow-300/10 to-yellow-500/10 backdrop-blur-md border border-yellow-500/20 transform hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-yellow-500">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
              <div className="text-2xl font-bold text-yellow-400">{service.price}</div>
              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm text-gray-300">
                    <span className="mr-2 text-yellow-500">•</span>
                    {feature}
                  </div>
                ))}
              </div>
              <button className="w-full py-2 px-4 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-500 rounded-lg transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 