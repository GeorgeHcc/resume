import { useTranslation } from 'react-i18next'
// @ts-ignore
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { services } from '../constants'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const { icon, title } = service
  const { t } = useTranslation()
  return (
    <Tilt options={{ max: 25 }} className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, .75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        {/* @ts-ignore */}
        <div options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 mb-4 object-contain' />
          <h3 className='text-white text-lg font-bold text-center'>{t(title)}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const { t } = useTranslation()
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <div className={styles.sectionSubText}>
          <span className="text-[#9153ff]">{t('INTRODUCTION')}</span>
          <h2 className={styles.sectionHeadText}>
            {t("OVERVIEW")}.
          </h2>
        </div>
      </motion.div>
      <motion.div variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-md mx-w-3xl leading-[30px]"
      >
        <ul>
          <li>🔭 {t('I’m currently studying software engineering at Chongqing University of Posts and Telecommunications')}</li>
          <li>🌱 {t('I’m currently learning 🧵 Vue/React ,WebRTC, and so on')}</li>
          <li>🤔 {t('I’m looking for help with 🥚 React code design')}</li>
          <li>📫 {t('How to reach me: email')} <a className='jump' href="mailto:georgehcc@163.com">georgehcc@163.com</a></li>
          <li>⚡ {t('Fun fact: reading,potography,fitness')}</li>
        </ul>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 items-center justify-center'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} service={{ ...service }} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
