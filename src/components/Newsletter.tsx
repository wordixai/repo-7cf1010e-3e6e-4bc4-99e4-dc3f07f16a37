import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Crown, Mail } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="py-20 bg-gradient-empress relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <Crown className="h-12 w-12 text-white mr-4" />
            <div className="text-left">
              <h2 className="font-empress text-3xl lg:text-4xl font-bold text-white mb-2">
                Join the Empress Club
              </h2>
              <span className="text-white/80 text-sm uppercase tracking-wider">
                Exclusive Access & Privileges
              </span>
            </div>
          </div>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be the first to discover new collections, receive exclusive offers, 
            and enjoy VIP access to limited edition luxury items.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Enter your email address"
                className="pl-10 h-12 bg-white/95 border-none text-gray-800 placeholder:text-gray-500"
              />
            </div>
            <Button className="h-12 bg-white text-empress-purple hover:bg-white/90 font-medium px-8 transition-all duration-300 hover:scale-105">
              Subscribe
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center justify-center space-x-8 text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="font-bold text-2xl text-white">50K+</div>
              <div className="text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-white">Exclusive</div>
              <div className="text-sm">Access</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl text-white">VIP</div>
              <div className="text-sm">Benefits</div>
            </div>
          </motion.div>

          <p className="text-white/60 text-sm mt-6">
            * Unsubscribe at any time. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  )
}