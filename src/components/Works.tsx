// @ts-ignore
import Tilt from "react-tilt";
import { motion } from 'framer-motion'
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";


interface ProjectCardProps {
  project: typeof projects[0]
  index: number
  key: string
}
const ProjectCard = (props: ProjectCardProps) => {
  const { index, project } = props
  const { t } = useTranslation()
  return (
    <motion.div variants={fadeIn('in', 'spring', index * .5, .75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img src={project.image} alt={project.name} className='w-full h-full object-cover rounded-2xl' />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(project.source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        {/* description */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-xl">{project.name}</h3>
          <p className="mt-2 text-secondary text-sm">
            {t(project.description)}
          </p>
        </div>
        {/* tag */}
        <div className="mt-5 flex flex-wrap gap-2">
          {
            project.tags.map(tag => {
              return <p key={tag.name} className={`text-sm ${tag.color}`}>
                #{tag.name}
              </p>
            })
          }
        </div>
      </Tilt>
    </motion.div>
  )

}

const Works = () => {
  const { t } = useTranslation()
  return (
    <>
      <motion.div variants={textVariant('')}>
        <div className={styles.sectionSubText}>
          <span className="text-[#9153ff]">{t('My Work')}</span>
          <h2 className={styles.sectionHeadText}>
            {t("Projects")}.
          </h2>
        </div>
      </motion.div>

      <div className="w-full flex flex-col">
        <motion.p variants={fadeIn('', '', .1, 1)}
          className="mt-3 text-secondary text-md max-w-3xl leading-[30px]"
        >
          {t('Projects Dec')}
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-8 justify-center">
          {
            projects.map((project, index) => {
              return <ProjectCard
                key={`project-${index}`}
                index={index}
                project={project}
              />
            })
          }
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
