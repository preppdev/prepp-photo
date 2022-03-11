import FreeTrialCTA from '@/components/FreeTrialCTA'
import About from '@/components/About'
import FAQ from '@/components/FAQ'

const index = () => {
  return (
    <div>
      <FreeTrialCTA />
      <About />
      <FAQ href="/#FAQ" />
    </div>
  )
}

export default index
