import { motion } from 'framer-motion'
import { Crown, Gift, Sparkles } from 'lucide-react'

export default function Scene3D() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-empress-purple/5 via-transparent to-empress-gold/10 rounded-3xl" />
      
      {/* 3D CSS Scene */}
      <div className="relative transform-3d" style={{ perspective: '1000px' }}>
        {/* Main Crown - Center */}
        <motion.div
          className="relative z-20"
          initial={{ opacity: 0, rotateY: -180, scale: 0.5 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.div
            animate={{ 
              rotateY: [0, 360],
              y: [-10, 10, -10]
            }}
            transition={{ 
              rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-empress-gold to-empress-gold-dark rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
              <Crown className="w-16 h-16 text-white drop-shadow-lg" />
            </div>
            
            {/* Crown gems */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 rounded-full animate-pulse" />
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </motion.div>

        {/* Floating Gift Boxes */}
        {[
          { x: -120, y: -40, delay: 0.5, rotation: 15 },
          { x: 120, y: -40, delay: 0.7, rotation: -15 },
          { x: -80, y: 80, delay: 0.9, rotation: 25 },
          { x: 80, y: 80, delay: 1.1, rotation: -25 }
        ].map((gift, index) => (
          <motion.div
            key={index}
            className="absolute z-10"
            style={{ 
              left: '50%', 
              top: '50%',
              transform: `translate(${gift.x}px, ${gift.y}px)`
            }}
            initial={{ opacity: 0, scale: 0, rotateZ: gift.rotation + 180 }}
            animate={{ opacity: 1, scale: 1, rotateZ: gift.rotation }}
            transition={{ delay: gift.delay, duration: 1, ease: "easeOut" }}
          >
            <motion.div
              animate={{ 
                y: [-5, 5, -5],
                rotateZ: [gift.rotation - 5, gift.rotation + 5, gift.rotation - 5]
              }}
              transition={{ 
                duration: 2 + index * 0.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: index * 0.3
              }}
              className="relative"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-empress-purple to-empress-purple/80 rounded-lg shadow-xl border-2 border-white/20 flex items-center justify-center">
                <Gift className="w-8 h-8 text-white" />
              </div>
              
              {/* Gift ribbon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-18 h-1 bg-empress-gold rounded-full" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-18 bg-empress-gold rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Sparkling Effects */}
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute z-30"
            style={{
              left: `${20 + (index % 4) * 20}%`,
              top: `${15 + Math.floor(index / 4) * 25}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-4 h-4 text-empress-gold-dark" />
          </motion.div>
        ))}

        {/* Brand Text */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="font-empress text-3xl font-bold text-empress-purple text-center tracking-wider">
            EMPRESS
          </div>
          <div className="w-20 h-1 bg-gradient-empress mx-auto mt-2 rounded-full" />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-2 h-2 bg-empress-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  )
}