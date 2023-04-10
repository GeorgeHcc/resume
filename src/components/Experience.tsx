import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { useTranslation } from 'react-i18next'
import { textVariant } from '../utils/motion'
import "./styles/index.css"
const ExperienceCard = ({ experience }: { experience: typeof experiences[0] }) => {
  const { t } = useTranslation()

  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={t(experience.date) as string}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex items-center justify-center h-full enlarge'>
          <img src={experience.icon} alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          ></img>
        </div>
      }
    >
      <div>
        <h3 className='text-white font-bold'>{t(experience.company_name)}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{t(experience.company_name)} </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          experience.points.map((desc, index) => (
            <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
              {t(desc)}
            </li>
          ))
        }
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  const { t } = useTranslation()
  return (
    <>
      <motion.div variants={textVariant('')}>
        <div className={styles.sectionSubText}>
          <span className="text-[#9153ff]">{t('What i have done so far')}</span>
          <h2 className={styles.sectionHeadText}>
            {t("Work Experience")}.
          </h2>
        </div>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {
            experiences.map((experience, index) => (<ExperienceCard key={index} experience={experience} />))
          }
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
