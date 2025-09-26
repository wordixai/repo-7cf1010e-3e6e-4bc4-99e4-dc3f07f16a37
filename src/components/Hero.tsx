import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Suspense, lazy } from 'react'

// Lazy load the 3D scene to prevent initial loading issues
const Scene3D = lazy(() => import('./Scene3D'))

function Scene3DFallback() {
  return (
    <div className="h-96 lg:h-[600px] flex items-center justify-center bg-gradient-to-br from-empress-purple-light/20 to-empress-gold/20 rounded-3xl">
      <div className="text-center">
        <div className="animate-pulse mb-4">
          <div className="w-24 h-24 bg-empress-purple/20 rounded-full mx-auto mb-4"></div>
          <div className="w-32 h-4 bg-empress-purple/20 rounded mx-auto mb-2"></div>
          <div className="w-24 h-4 bg-empress-purple/20 rounded mx-auto"></div>
        </div>
        <div className="text-empress-purple font-empress">Preparing 3D Experience...</div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-empress-cream via-white to-empress-purple-light">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-empress-gold/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-empress-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles className="h-6 w-6 text-empress-gold-dark" />
              <span className="text-empress-purple font-medium tracking-wide uppercase text-sm">
                Luxury Collection 2024
              </span>
            </motion.div>

            <motion.h1
              className="font-empress text-5xl lg:text-7xl font-bold text-empress-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Empress
              <span className="block text-empress-purple">Gifts</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Discover our curated collection of exquisite luxury gifts that embody elegance, sophistication, and timeless beauty.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button className="btn-empress group">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-empress-outline">
                View Catalog
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div>
                <div className="font-empress text-2xl font-bold text-empress-purple">500+</div>
                <div className="text-sm text-gray-600">Luxury Items</div>
              </div>
              <div>
                <div className="font-empress text-2xl font-bold text-empress-purple">50+</div>
                <div className="text-sm text-gray-600">Premium Brands</div>
              </div>
              <div>
                <div className="font-empress text-2xl font-bold text-empress-purple">10k+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            className="h-96 lg:h-[600px] relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-empress-gold/10 to-empress-purple/10 rounded-3xl" />
            <Suspense fallback={<Scene3DFallback />}>
              <Scene3D />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  )
}