'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import {
  Target,
  Heart,
  Users,
  Globe,
  Star,
  Award,
  Leaf,
  Shield,
  Clock,
  Truck
} from 'lucide-react'


import Navbar from '@/components/myComponent/navbar'

export default function AboutUs() {
  const shouldReduceMotion = useReducedMotion()
  
  // Refs for scroll-triggered animations
  const storyRef = useRef(null)
  const craftsmanshipRef = useRef(null)
  const valuesRef = useRef(null)
  const timelineRef = useRef(null)
  const sustainabilityRef = useRef(null)
  const teamRef = useRef(null)
  const testimonialsRef = useRef(null)
  const aimsRef = useRef(null) 
  
  // Check if elements are in view
  const storyInView = useInView(storyRef, { once: true, amount: 0.3 })
  const craftsmanshipInView = useInView(craftsmanshipRef, { once: true, amount: 0.3 })
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 })
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.3 })
  const sustainabilityInView = useInView(sustainabilityRef, { once: true, amount: 0.3 })
  const teamInView = useInView(teamRef, { once: true, amount: 0.3 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  return (
    <main className="min-h-screen">
    
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-slate-50 dark:bg-zinc-900 py-20 md:py-28 lg:py-36 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">
              About Ghanchis
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
              For generations, we've crafted premium shalwar kameez that blends traditional elegance with contemporary style. Each garment tells a story of heritage, craftsmanship, and uncompromising quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story / Heritage Section */}
      <section ref={storyRef} className="bg-white dark:bg-zinc-950 py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">
                Our Story
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                Founded in 1995, Ghanchis began as a small tailoring house in Lahore, Pakistan. Our founder, Abdul Ghanchi, had a vision to preserve the art of traditional shalwar kameez craftsmanship while adapting to modern aesthetics.
              </p>
              <p className="text-zinc-600 dark:text-zinc-300">
                Today, we remain a family-owned business committed to the values that shaped our beginnings: exceptional quality, attention to detail, and garments that honor our cultural heritage while embracing contemporary design.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="bg-zinc-200 dark:bg-zinc-800 h-80 w-full rounded-2xl flex items-center justify-center">
                <span className="text-zinc-500">Heritage Image</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craftsmanship & Quality Section */}
      <section ref={craftsmanshipRef} className="bg-gray-50 dark:bg-zinc-900 py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={craftsmanshipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
              Craftsmanship & Quality
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Every Ghanchis garment is a testament to our dedication to excellence and attention to detail.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={craftsmanshipInView ? "animate" : "initial"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Premium Fabrics",
                description: "We source only the finest cottons, linens, and luxury blends for exceptional comfort and durability.",
                icon: <Shield className="w-12 h-12 text-orange-600" />
              },
              {
                title: "Artisan Techniques",
                description: "Our master tailors employ traditional techniques passed down through generations.",
                icon: <Award className="w-12 h-12 text-orange-600" />
              },
              {
                title: "Attention to Detail",
                description: "From precise stitching to flawless finishing, every element is carefully considered.",
                icon: <Target className="w-12 h-12 text-orange-600" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="bg-slate-100 dark:bg-neutral-900 py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              The principles that guide everything we create at Ghanchis
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={valuesInView ? "animate" : "initial"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Elegance",
                description: "Timeless designs that transcend fleeting trends",
                icon: <Star className="w-8 h-8" />
              },
              {
                title: "Comfort",
                description: "Garments that feel as good as they look",
                icon: <Heart className="w-8 h-8" />
              },
              {
                title: "Durability",
                description: "Crafted to last and maintain its beauty",
                icon: <Shield className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center text-center p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm"
              >
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full mb-4 text-orange-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
<section ref={aimsRef} className="bg-white dark:bg-zinc-950 py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
              Our Aims & Values
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              The guiding principles that define everything we do at Ghanchis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -40 }}
              animate={valuesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-slate-50 dark:bg-zinc-900 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-6 flex items-center">
                <Target className="w-8 h-8 text-orange-600 mr-3" />
                Our Mission
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                To redefine traditional Pakistani menswear for the modern era while preserving the craftsmanship and heritage that make our clothing special.
              </p>
              <p className="text-zinc-600 dark:text-zinc-300">
                We aim to create garments that honor our cultural roots while meeting the needs of contemporary life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
              animate={valuesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-slate-50 dark:bg-zinc-900 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-6 flex items-center">
                <Globe className="w-8 h-8 text-orange-600 mr-3" />
                Our Vision
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                To become the world's most respected purveyor of premium Pakistani menswear, known for exceptional quality, ethical practices, and innovative design.
              </p>
              <p className="text-zinc-600 dark:text-zinc-300">
                We envision a future where traditional attire is celebrated globally for its elegance, comfort, and versatility.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={valuesInView ? "animate" : "initial"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Quality Craftsmanship",
                description: "Every stitch matters. We maintain the highest standards in tailoring and finishing.",
                icon: <Award className="w-10 h-10" />
              },
              {
                title: "Customer Focus",
                description: "Our customers inspire us. Their satisfaction is our ultimate measure of success.",
                icon: <Heart className="w-10 h-10" />
              },
              {
                title: "Heritage Preservation",
                description: "We honor traditional techniques while innovating for modern needs.",
                icon: <Shield className="w-10 h-10" />
              },
              {
                title: "Sustainable Practices",
                description: "We're committed to reducing our environmental impact at every step.",
                icon: <Leaf className="w-10 h-10" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
                className="bg-slate-100 dark:bg-zinc-800 p-6 rounded-2xl text-center group hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors duration-300"
              >
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full inline-block mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50 transition-colors duration-300 text-orange-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="bg-white dark:bg-zinc-950 py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Milestones that have shaped Ghanchis into the brand it is today
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-orange-200 dark:bg-orange-900/40 transform -translate-x-1/2"></div>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={timelineInView ? "animate" : "initial"}
              className="space-y-12"
            >
              {[
                {
                  year: "1995",
                  title: "Foundation",
                  description: "Ghanchis established as a small tailoring house in Lahore"
                },
                {
                  year: "2003",
                  title: "First Boutique",
                  description: "Opened our first dedicated store in Liberty Market"
                },
                {
                  year: "2010",
                  title: "National Recognition",
                  description: "Featured in Pakistan's premier fashion publications"
                },
                {
                  year: "2018",
                  title: "Digital Presence",
                  description: "Launched our online store, reaching customers globally"
                },
                {
                  year: "2023",
                  title: "Sustainability Initiative",
                  description: "Committed to eco-friendly practices and materials"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative pl-16 md:pl-0 flex"
                >
                  <div className="hidden md:flex md:w-1/2 justify-end pr-12">
                    {index % 2 === 0 && (
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600 mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">{item.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-300">{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-1/2 top-1 w-8 h-8 bg-orange-600 rounded-full border-4 border-white dark:border-zinc-950 transform -translate-x-1/2 z-10"></div>

                  <div className="hidden md:flex md:w-1/2 pl-12">
                    {index % 2 !== 0 && (
                      <div>
                        <div className="text-2xl font-bold text-orange-600 mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">{item.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-300">{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile view */}
                  <div className="md:hidden">
                    <div className="text-2xl font-bold text-orange-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">{item.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability & Sourcing Section */}
      <section ref={sustainabilityRef} className="bg-emerald-50 dark:bg-emerald-950/30 py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={sustainabilityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
              Sustainability & Ethical Sourcing
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              We believe in fashion that respects both people and the planet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Ethical Production",
                description: "We ensure fair wages and safe working conditions for all our artisans and tailors.",
                icon: <Users className="w-10 h-10" />
              },
              {
                title: "Sustainable Materials",
                description: "Increasing use of organic cotton and eco-friendly fabrics in our collections.",
                icon: <Leaf className="w-10 h-10" />
              },
              {
                title: "Local Artisans",
                description: "Supporting traditional crafts and preserving cultural heritage techniques.",
                icon: <Heart className="w-10 h-10" />
              },
              {
                title: "Reduced Waste",
                description: "Implementing zero-waste patterns and recycling initiatives in our production.",
                icon: <Leaf className="w-10 h-10" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
                animate={sustainabilityInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-md"
              >
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full inline-block mb-4 text-emerald-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Testimonials Section */}
      <section ref={testimonialsRef} className="bg-white dark:bg-zinc-950 py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
              Praise & Recognition
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              What others are saying about Ghanchis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Ghanchis represents the perfect fusion of traditional craftsmanship and contemporary design.",
                publication: "Pakistani Fashion Review",
                delay: 0
              },
              {
                quote: "The attention to detail in every stitch demonstrates why Ghanchis remains a leader in men's formalwear.",
                publication: "Style Pakistan",
                delay: 0.2
              },
              {
                quote: "When it comes to premium shalwar kameez, Ghanchis sets the standard for quality and elegance.",
                publication: "Lifestyle Today",
                delay: 0.4
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="bg-slate-50 dark:bg-zinc-900 p-8 rounded-2xl"
              >
                <div className="text-orange-600 mb-4">
                  <Star className="w-5 h-5 fill-current inline" />
                  <Star className="w-5 h-5 fill-current inline" />
                  <Star className="w-5 h-5 fill-current inline" />
                  <Star className="w-5 h-5 fill-current inline" />
                  <Star className="w-5 h-5 fill-current inline" />
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 italic mb-6">
                  "{item.quote}"
                </p>
                <p className="text-zinc-800 dark:text-zinc-100 font-medium">
                  {item.publication}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-950 py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">
              Experience Ghanchis
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-10 max-w-2xl mx-auto">
              Discover our collection of premium shalwar kameez and experience the perfect blend of tradition and contemporary style.
            </p>
            <motion.a
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              href="/collection"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
            >
              View Our Collection
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer would be imported here */}
    </main>
  )
}