import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { EarthCanvas } from "./canvas"
import { slideIn } from "../utils/motion"
import { useTranslation } from "react-i18next"
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { t } = useTranslation()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    to_name: 'Cherry7',
    to_email: "chenjunguang@163.com",
  })
  const [isSending, setIsSending] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)
    emailjs.send('', 'template_mahoa4g', {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: form.to_name,
      to_email: form.to_email,
    }, 'UbxFgx3zxBim9sn0y')
      .then((result) => {
        console.log(result.text);
        setIsSending(false)
      }, (error) => {
        console.log(error.text);
        setIsSending(false)
      });
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', .2, 1)}
        className='flex-[.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText}`}>{t('GET IN TOUT')}</p>
        <p className={`${styles.sectionHeadText}`}>{t('Conteact')}.</p>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>{t('Your Name')}.</span>
            <input type="text" name='name' value={form.name}
              onChange={handleChange}
              placeholder={`${t("What's your name ?")}`}
              className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary
            text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </label>
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>{t('Your Email')}.</span>
            <input type="email" name='email' value={form.email}
              onChange={handleChange}
              placeholder={`${t("What's your email ?")}`}
              className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary
            text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </label>
          <label className="flex flex-col">
            <span className='text-white font-medium mb-4'>{t('Your Message')}.</span>
            <textarea
              rows={7}
              name='message' value={form.message}
              onChange={handleChange}
              placeholder={`${t("Please Write Down What You Want To Say !")}`}
              className='bg-tertiary py-4 px-6 rounded-lg placeholder:text-secondary
            text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </label>
          <button type='submit' className='bg-tertiary py-4 px-6 rounded-xl w-fit shadow-md
           text-white font-bold shadow-primary outline-none'>
            {isSending ? t('Send') + '...' : t('Send')}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', .2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div >
  )
}

export default SectionWrapper(Contact, 'contact')
