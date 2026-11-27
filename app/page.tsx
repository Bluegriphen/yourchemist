
import Navbar from '@/components/layout/Navbar'
import BlogSection from '@/components/section/BlogSection'
import FAQsSection from '@/components/section/FAQsSection'
import HeroSection from '@/components/section/HeroSection'
import ServicesSection from '@/components/section/ServicesSection'
import StatsSection from '@/components/section/StatsSection'
import TreatmentsSection from '@/components/section/TreatmentsSection'


const page = () => {
  return (
    <div>

      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <TreatmentsSection/>
      <StatsSection/>
      <FAQsSection/>
      <BlogSection/>
      
      
    </div>
  )
}

export default page