import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingBag, Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Royal Diamond Necklace",
    price: "$2,899",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
    category: "Jewelry",
    rating: 5,
    isNew: true
  },
  {
    id: 2,
    name: "Luxury Silk Scarf Collection",
    price: "$459",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=500&fit=crop",
    category: "Fashion",
    rating: 5,
    isBestseller: true
  },
  {
    id: 3,
    name: "Crystal Champagne Flutes",
    price: "$329",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    category: "Home & Dining",
    rating: 5,
    isNew: true
  },
  {
    id: 4,
    name: "Premium Leather Handbag",
    price: "$1,299",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
    category: "Accessories",
    rating: 5,
    isBestseller: true
  }
]

export default function FeaturedProducts() {
  return (
    <section id="collections" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-empress-purple font-medium tracking-wide uppercase text-sm mb-4 block">
            Featured Collection
          </span>
          <h2 className="font-empress text-4xl lg:text-5xl font-bold text-empress-black mb-6">
            Curated Luxury
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each piece in our collection is carefully selected for its exceptional quality, 
            craftsmanship, and timeless appeal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 transform-3d hover:scale-105">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-empress-purple text-white px-3 py-1 rounded-full text-xs font-medium">
                        New
                      </span>
                    )}
                    {product.isBestseller && (
                      <span className="bg-empress-gold-dark text-white px-3 py-1 rounded-full text-xs font-medium">
                        Bestseller
                      </span>
                    )}
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                      <ShoppingBag className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-empress-gold-dark text-empress-gold-dark" />
                    ))}
                  </div>
                  
                  <span className="text-sm text-empress-purple font-medium mb-2 block">
                    {product.category}
                  </span>
                  
                  <h3 className="font-empress text-lg font-semibold text-empress-black mb-3 group-hover:text-empress-purple transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-empress-purple">
                      {product.price}
                    </span>
                    <Button className="btn-empress-outline text-sm px-4 py-2">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button className="btn-empress">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  )
}