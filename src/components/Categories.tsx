import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Crown, Gem, Gift, Heart, Home, Sparkles } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: "Royal Jewelry",
    description: "Exquisite diamonds, pearls, and precious stones",
    icon: Crown,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
    itemCount: 150
  },
  {
    id: 2,
    name: "Luxury Fashion",
    description: "Designer clothing and haute couture pieces",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop",
    itemCount: 200
  },
  {
    id: 3,
    name: "Premium Accessories",
    description: "Handbags, scarves, and luxury accessories",
    icon: Gem,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=400&fit=crop",
    itemCount: 120
  },
  {
    id: 4,
    name: "Gift Collections",
    description: "Curated gift sets for special occasions",
    icon: Gift,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=400&fit=crop",
    itemCount: 80
  },
  {
    id: 5,
    name: "Home & Decor",
    description: "Luxury home accessories and decorative pieces",
    icon: Home,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    itemCount: 90
  },
  {
    id: 6,
    name: "Special Occasions",
    description: "Wedding, anniversary, and celebration gifts",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?w=600&h=400&fit=crop",
    itemCount: 110
  }
]

export default function Categories() {
  return (
    <section id="luxury" className="py-20 bg-gradient-to-br from-empress-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-empress-purple font-medium tracking-wide uppercase text-sm mb-4 block">
            Explore Categories
          </span>
          <h2 className="font-empress text-4xl lg:text-5xl font-bold text-empress-black mb-6">
            Luxury Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our carefully curated categories, each featuring the finest selection 
            of luxury items from renowned brands worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 transform-3d hover:scale-105 cursor-pointer">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4 p-3 bg-white/90 rounded-full backdrop-blur-sm">
                    <category.icon className="h-6 w-6 text-empress-purple" />
                  </div>
                  
                  {/* Item Count */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium">
                      {category.itemCount} items
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-empress text-xl font-bold text-empress-black mb-2 group-hover:text-empress-purple transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-empress-purple font-medium text-sm">
                      Explore Collection
                    </span>
                    <div className="w-8 h-8 bg-empress-purple/10 rounded-full flex items-center justify-center group-hover:bg-empress-purple group-hover:text-white transition-all duration-300">
                      <span className="text-empress-purple group-hover:text-white transition-colors">→</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}