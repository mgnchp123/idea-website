'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight, Fan, Droplet, Zap, Sun, ChevronDown, Menu, Mail, Phone, Building, BookOpen, Briefcase, HeartPulse, Home, Landmark, Cross, HardHat, Wind, Check, Clock, MapPin, ArrowUpRight } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
export function Home() {
  
  const solutions = [
    {
      title: 'Mechanical Engineering',
      icon: Fan,
      description: 'Innovative HVAC systems and energy-efficient solutions for modern buildings.',
      services: [
        'Direct Expansion Package Units',
        'Chilled/Hot Water Hydronic 4-Pipe System',
        'Air Distribution Systems',
        'Central Plant Design and Energy Reconfiguration'
      ]
    },
    {
      title: 'Electrical Lighting & Power',
      icon: Zap,
      description: 'Comprehensive electrical engineering services for optimal performance and safety.',
      services: [
        'Utility Power Distribution Design',
        'Interior and Exterior Lighting System Design',
        'Electrical Power Distribution Design',
        'Security System Infrastructure Design'
      ]
    },
    {
      title: 'Plumbing Engineering',
      icon: Droplet,
      description: 'Efficient and sustainable plumbing solutions for all types of facilities.',
      services: [
        'Domestic Cold/Hot Water Distribution',
        'Waste and Vent Systems Design',
        'Medical Gas Systems Design',
        'Water Conservation and Auditing'
      ]
    },
    {
      title: 'Renewable Energy',
      icon: Sun,
      description: 'Cutting-edge renewable energy solutions for a sustainable future.',
      services: [
        'Solar Thermal Design in HVAC/Plumbing Systems',
        'Solar Photovoltaic (PV) Design in Electrical Systems',
        'Wind Energy Design',
        'Geothermal (Ground Source Heat Pump) Design'
      ]
    }
  ]
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]
  
  const projectTypes = [
    { value: 'educational', label: 'Educational', icon: BookOpen, description: 'Designing innovative learning environments for students of all ages.' },
    { value: 'commercial', label: 'Commercial', icon: Briefcase, description: 'Creating efficient and sustainable spaces for businesses to thrive.' },
    { value: 'healthcare', label: 'Healthcare', icon: HeartPulse, description: 'Engineering cutting-edge facilities for optimal patient care and medical research.' },
    { value: 'residential', label: 'Residential', icon: Home, description: 'Developing comfortable and energy-efficient living spaces for communities.' },
    { value: 'government', label: 'Government', icon: Landmark, description: 'Building robust infrastructure to support public services and administration.' },
    { value: 'industrial', label: 'Industrial', icon: HardHat, description: 'Designing high-performance facilities for manufacturing and production.' },
    { value: 'transportation', label: 'Transportation', icon: Wind, description: 'Engineering sustainable solutions for modern transportation needs.' },
    { value: 'religious', label: 'Religious', icon: Cross, description: 'Creating inspiring spaces for worship and community gatherings.' },
  ]
  
  const featuredProjects = [
    {
      title: "Indianapolis Public Schools",
      type: "Educational",
      description: "State-of-the-art educational facility with advanced HVAC and electrical systems for optimal learning environments.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PN1BsJ6VFPPDEYJ7tVAtRu9MuYY0lm.png"
    },
    {
      title: "Medical Center",
      type: "Healthcare",
      description: "Cutting-edge medical facility with advanced systems for patient care and medical research.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6hcwodXa25k6tSdQPrVizsvsHpgwRW.png"
    },
    {
      title: "Government Services",
      type: "Government",
      description: "Efficient and sustainable government building designed to serve the public effectively.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Rk94k3ddrjYw27vibSmF058XClHJhr.png"
    }
  ]
  
  export default function Component() {
    const targetRef = useRef(null)
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
  
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }
      checkMobile()
      window.addEventListener('resize', checkMobile)
  
      const handleScroll = () => {
        const sections = ['home', 'solutions', 'projects', 'leadership', 'about', 'contact']
        const current = sections.find(section => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 100 && rect.bottom >= 100
          }
          return false
        })
        if (current) {
          setActiveSection(current)
        }
      }
  
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('resize', checkMobile)
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
  
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"]
    })
  
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
    const yText = useTransform(scrollYProgress, [0, 0.5], [0, -50])
  
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsMenuOpen(false)
    }
  
    return (
      <div className="overflow-hidden">
        <nav className="bg-[#002B49] shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="#home" className="flex items-center" onClick={() => scrollToSection('home')}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XvInsTXPX0alCkk72jsB10ZmwdLrJb.png"
                  alt="IDA Engineering Logo"
                  width={100}
                  height={40}
                  className="mr-2 transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <div className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                  <button 
                    key={item.name} 
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className={`text-white hover:text-[#00A3E0] transition-colors duration-300 ${
                      activeSection === item.href.slice(1) ? 'border-b-2 border-[#00A3E0]' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <button 
                className="md:hidden focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6 text-white transition-transform duration-300 hover:scale-110" />
              </button>
            </div>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-[#002B49] py-2"
              >
                {navItems.map((item) => (
                  <button 
                    key={item.name} 
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-[#003B69] transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
  
        <section id="home" ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <motion.div 
            style={{ opacity, scale }}
            className="absolute inset-0"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/engineering-pictures-upbco4jbz7ndjny6-Lr1nkZwtHYXUOZz7x7WIbQM0axZSB8.jpg"
              alt="Futuristic engineering concept with digital overlay on a person wearing a hard hat"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          </motion.div>
          <motion.div 
            className="relative z-10 text-left px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
            style={{ y: yText }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl/none font-bold mb-4 leading-tight text-white drop-shadow-lg"
            >
              Engineering the Future<br className="hidden sm:inline" /> with Innovative Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl text-white drop-shadow-md"
            >
              Transforming ideas into reality through cutting-edge engineering since 1985
            </motion.p>
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.4}}
              className="flex flex-col sm:flex-row justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button 
                onClick={() => scrollToSection('solutions')}
                className="bg-[#00A3E0] hover:bg-[#0077B5] text-white font-bold py-3 px-6 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#00A3E0] font-bold py-3 px-6 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                Contact Us
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          {!isMobile && (
            <motion.div 
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8 text-white drop-shadow-md" />
            </motion.div>
          )}
        </section>
  
        <section id="solutions" className="py-20 bg-gradient-to-b from-[#E6F3FF] to-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#002B49] mb-4">Our Engineering Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive and innovative engineering services tailored to your needs</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1,
  
   y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-white overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#00A3E0] p-2 rounded-full mr-3 group-hover:bg-[#0077B5] transition-colors duration-300">
                          <solution.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#002B49] group-hover:text-[#00A3E0] transition-colors duration-300">{solution.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{solution.description}</p>
                      <ul className="text-sm space-y-2">
                        {solution.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-start">
                            <Check className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-[#00A3E0]" />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3eObUiSUWIJHJHHkewec0OYoFbkyw6.png')] opacity-5 bg-cover bg-center"></div>
        </section>
  
        <section id="projects" className="py-20 bg-[#002B49] text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Project Expertise</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Delivering excellence across a diverse range of sectors</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {projectTypes.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white text-[#002B49] hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#00A3E0] p-2 rounded-full mr-3 group-hover:bg-[#0077B5] transition-colors duration-300">
                          <category.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold group-hover:text-[#00A3E0] transition-colors duration-300">{category.label}</h3>
                      </div>
                      <p className="text-gray-600">{category.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Featured Projects</h3>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white text-[#002B49] hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-2 group-hover:text-[#00A3E0] transition-colors duration-300">{project.title}</h4>
                      <p className="text-sm text-[#00A3E0] mb-2">{project.type}</p>
                      <p className="text-gray-600">{project.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yW2Y0ORjm5yy3Zqq2MzLxOiwKAp6XX.png')] opacity-10 bg-cover bg-center"></div>
        </section>
  
        <section id="leadership" className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#002B49] mb-4">Our Leadership</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Meet the visionary behind IDA Engineering</p>
            </motion.div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:w-1/3"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UjTIGQHDzcVAkVkYw54jso0A2jKDUJ.png"
                  alt="Jeff Jafazade"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg mx-auto md:mx-0 transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="md:w-2/3"
              >
                <h3 className="text-2xl font-bold text-[#002B49] mb-2">Jeff Jafazade, P.E., MBA</h3>
                <p className="text-lg text-gray-600 mb-4">President & Mechanical and Electrical Design</p>
                <p className="text-gray-700 mb-4">
                  As the founding principal of IDA Engineering, Inc., Mr. Jafazade offers over thirty-nine (39) years of mechanical and electrical professional engineering experience. He has managed and engineered over one thousand five hundred (1,500) engineering projects, ranging from small to very large multi-million dollar facilities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-[#002B49] mb-2">Contact</h4>
                    <p className="flex items-center mb-1 hover:text-[#00A3E0] transition-colors duration-300">
                      <Phone className="w-4 h-4 mr-2" /> 
                      <a href="tel:972-991-1927">972-991-1927</a>
                    </p>
                    <p className="flex items-center hover:text-[#00A3E0] transition-colors duration-300">
                      <Mail className="w-4 h-4 mr-2" /> 
                      <a href="mailto:jeffj@idaeng.com">jeffj@idaeng.com</a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#002B49] mb-2">Credentials</h4>
                    <p>Registered Professional Engineer, Texas</p>
                    <p>#57384 - Year 1985</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-[#002B49] mb-2">Awards</h4>
                  <p>&quot;Energy of the Year 2008&quot; by the North Texas Association of Energy Engineers</p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3eObUiSUWIJHJHHkewec0OYoFbkyw6.png')] opacity-5 bg-cover bg-center"></div>
        </section>
  
        <section id="about" className="py-20 bg-[#E6F3FF] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              <div className="lg:w-1/2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3eObUiSUWIJHJHHkewec0OYoFbkyw6.png"
                  alt="IDA Engineering Office"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002B49]">About IDA Engineering</h2>
                <p className="text-lg mb-6 text-gray-700">
                  Since 1985, IDA Engineering has been at the forefront of innovative engineering solutions. Our multi-disciplinary approach allows us to tackle complex projects with creativity and precision, serving clients across Dallas, Texas and beyond.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  We specialize in mechanical, electrical, plumbing, and renewable energy engineering, delivering state-of-the-art solutions for educational facilities, healthcare centers, and various other sectors.
                </p>
                <p className="text-lg text-gray-700">
                  At IDA Engineering, we&apos;re committed to pushing the boundaries of what&apos;s possible, creating sustainable, efficient,and innovative designs that stand the test of time.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <Check className="w-6 h-6 text-[#00A3E0] mr-2" />
                    <span className="text-lg text-gray-700">Over 35 years of industry experience</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-6 h-6 text-[#00A3E0] mr-2" />
                    <span className="text-lg text-gray-700">Comprehensive engineering services under one roof</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-6 h-6 text-[#00A3E0] mr-2" />
                    <span className="text-lg text-gray-700">Commitment to sustainability and energy efficiency</span>
                  </div>
                </div>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-[#00A3E0] hover:bg-[#0077B5] text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Learn More About Us
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yW2Y0ORjm5yy3Zqq2MzLxOiwKAp6XX.png')] opacity-5 bg-cover bg-center"></div>
        </section>
  
        <section id="contact" className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
              className="text-center max-w-3xl mx-auto"
            >
              <Zap className="w-16 h-16 mx-auto mb-6 text-[#00A3E0]" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002B49]">Ready to Transform Your Ideas into Reality?</h2>
              <p className="text-xl mb-8 text-gray-600">Let&apos;s collaborate to create innovative engineering solutions that make a difference. Our team is ready to bring your vision to life.</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="bg-[#00A3E0] hover:bg-[#0077B5] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg"
                  >
                    Contact Us
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-[#002B49]">Contact Information</DialogTitle>
                    <DialogDescription className="text-gray-600">
                      Get in touch with our expert team
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="flex items-center space-x-4">
                      <Clock className="h-6 w-6 text-[#00A3E0]" />
                      <div>
                        <h4 className="font-semibold text-[#002B49]">Business Hours</h4>
                        <p className="text-sm text-gray-600">Monday - Friday, 8:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="h-6 w-6 text-[#00A3E0]" />
                      <div>
                        <h4 className="font-semibold text-[#002B49]">Phone</h4>
                        <a href="tel:972-991-1927" className="text-sm text-[#00A3E0] hover:underline">972-991-1927</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-[#00A3E0]" />
                      <div>
                        <h4 className="font-semibold text-[#002B49]">Email</h4>
                        <a href="mailto:jeffj@idaeng.com" className="text-sm text-[#00A3E0] hover:underline">jeffj@idaeng.com</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-6 w-6 text-[#00A3E0]" />
                      <div>
                        <h4 className="font-semibold text-[#002B49]">Address</h4>
                        <p className="text-sm text-gray-600">16990 N Dallas Pkwy, Suite 106, Dallas, TX 75248</p>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3eObUiSUWIJHJHHkewec0OYoFbkyw6.png')] opacity-5 bg-cover bg-center"></div>
        </section>
  
        <footer className="bg-[#002B49] text-white py-12 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XvInsTXPX0alCkk72jsB10ZmwdLrJb.png"
                  alt="IDA Engineering Logo"
                  width={150}
                  height={60}
                  className="mb-4 transition-transform duration-300 hover:scale-105"
                />
                <p className="text-sm">Transforming ideas into reality through cutting-edge engineering solutions since 1985</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <button 
                        onClick={() => scrollToSection(item.href.slice(1))}
                        className="text-sm hover:text-[#00A3E0] transition-colors duration-300 flex items-center"
                      >
                        <ArrowRight className="h-4 w-4 mr-2" />
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Our Solutions</h4>
                <ul className="space-y-2">
                  {solutions.map((solution) => (
                    <li key={solution.title}>
                      <button 
                        onClick={() => scrollToSection('solutions')}
                        className="text-sm hover:text-[#00A3E0] transition-colors duration-300 flex items-center"
                      >
                        <ArrowRight className="h-4 w-4 mr-2" />
                        {solution.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                <p className="text-sm mb-2 flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  16990 N Dallas Pkwy, Suite 106
                </p>
                <p className="text-sm mb-2 flex items-center">
                  <Building className="h-4 w-4 mr-2" />
                  Dallas, TX 75248
                </p>
                <p className="text-sm mb-2 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  972-991-1927 Office
                </p>
                <p className="text-sm mb-2 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  972-991-0444 Fax
                </p>
                <p className="text-sm flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:jeffj@idaeng.com" className="hover:text-[#00A3E0] transition-colors">jeffj@idaeng.com</a>
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-sm">&copy; {new Date().getFullYear()} IDA Engineering, Inc. All rights reserved.</p>
              <div className="mt-4 flex items-center justify-center">
                <p className="text-sm mr-2">Developed by</p>
                <Link href="https://www.codally.app" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/typo%20blanc-ckJWp6eECzdAMPwMU6bwFlnodhLPiH.png"
                    alt="Codally Logo"
                    width={80}
                    height={30}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </Link>
              </div>
              <p className="text-sm mt-2">
                <a href="https://www.codally.app" target="_blank" rel="noopener noreferrer" className="text-[#00A3E0] hover:underline">
                  www.codally.app
                </a>
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yW2Y0ORjm5yy3Zqq2MzLxOiwKAp6XX.png')] opacity-5 bg-cover bg-center"></div>
        </footer>
      </div>
    )
  }
}
