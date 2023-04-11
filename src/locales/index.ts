import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "About": "About",
          "Work": "Work",
          "frontEndDevelopmentEngineer": "Front End Development Engineer",
          "aboutMe": "About Me",
          "Introduction": "Introduction",
          "name": "Name",
          "email": "Email",
          "phone": "Phone",
          "address": "Address",
          "education": "Education",
          "experience": "Experience",
          "skills": "Skills",
          "projects": "Projects",
          "contact": "Contact",
          "contactMe": "Contact Me",
          "contactMeDescription": "If you have any questions or suggestions, please contact me.",
          "contactMeDescription2": "I will reply to you as soon as possible.",
          "contactMeDescription3": "Thank you for your support.",
          "OVERVIEW": "OVERVIEW",
          "INTRODUCTION": "INTRODUCTION",

          "I’m currently studying software engineering at Chongqing University of Posts and Telecommunications": "I’m currently studying software engineering at Chongqing University of Posts and Telecommunications.",
          "I’m currently learning 🧵 Vue/React,WebRTC, and so on": " I’m currently learning 🧵 Vue/React,WebRTC, and so on.",
          "I’m looking for help with 🥚 React code design": "I’m looking for help with 🥚 React code design.",
          "How to reach me: email": "How to reach me: email:",
          "Fun fact: Like watch anime": "Fun fact: Like watch anime.",

          "Web Developer": "Web Developer",
          "React Developer": "React Developer",
          "Vue Developer": "Vue Developer",
          "Content Creator": "Content Creator",

          "What i have done so far": "What i have done so far",
          "Work Experience": "Work Experience",
          "My Work": "My Work",
          "Projects": "Projects",
          "Projects Dec": "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",

          "Adetech": "Adetech",
        }
      },
      zh: {
        translation: {
          "About": "关于",
          "Work": "工作",
          "frontEndDevelopmentEngineer": "前端开发工程师",
          "aboutMe": "关于我",
          "Introduction": "简介",
          "name": "姓名",
          "email": "邮箱",
          "phone": "电话",
          "address": "地址",
          "education": "教育",
          "experience": "经验",
          "skills": "技能",
          "projects": "项目",
          "Contact": "联系",
          "contactMe": "联系我",
          "contactMeDescription": "如果您有任何问题或建议，请联系我。",
          "contactMeDescription2": "我会尽快回复您。",
          "contactMeDescription3": "感谢您的支持。",
          "OVERVIEW": "概述",
          "INTRODUCTION": "简介",

          "I’m currently studying software engineering at Chongqing University of Posts and Telecommunications": "我目前正在重庆邮电大学软件工程专业学习",
          "I’m currently learning 🧵 Vue/React ,WebRTC, and so on": "我目前正在学习🧵Vue/React,WebRTC等等。",
          "I’m looking for help with 🥚 React code design": "我正在寻求🥚React代码设计的帮助。",
          "How to reach me: email": "如何联系我:电子邮件",
          "Fun fact: reading,potography,fitness": "兴趣:阅读,摄影,健身",

          "Web Developer": "网页开发者",
          "React Developer": "React 开发者",
          "Vue Developer": "Vue 开发者",
          "Content Creator": "内容创作者",

          "What i have done so far": "我做过的事情",
          "Work Experience": "工作经验",
          "My Work": "我的工作",
          "Projects": "项目集",
          "Projects Dec": "以下项目通过我工作的真实示例展示了我的技能和经验。每个项目都通过指向代码存储库和其中的现场演示的链接进行了简要描述。它反映了我解决复杂问题、使用不同技术以及有效管理项目的能力",
          "Adetech": "亚德科技",
          "Chongqing University of Posts and Telecommunications": "重庆邮电大学",
          "Bachelor of Engineering": "工学学士",

          "Developing and maintaining web applications using Nuxt.js and other related technologies.": "使用 Nuxt.js 和其他相关技术开发和维护 Web 应用程序。",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.": "与包括设计师、产品经理和其他开发人员在内的跨职能团队合作，创造高质量的产品。",
          "Nuxt.js builds large server-side rendering projects, as well as SEO optimization work.": "Nuxt.js 构建大型服务器端渲染项目，以及 SEO 优化工作。",
          "Participating in code reviews and providing constructive feedback to other developers.": "参与代码审查并向其他开发人员提供建设性反馈。",
          "Ability to perform project performance optimization and code normalization.": "能够执行项目性能优化和代码规范化。",

          "Bottom-loading, wrapper createGetList higher - order function, infinite list loading.": '触底加载，封装createGetList高阶函数，实现list无限加载',
          "Combined with the stack data structure to encapsulate the Pipeline class to realize the undo and recovery function of the answer module.": '结合栈数据结构封装Pipeline类, 实现答题模块撤销与恢复功能',
          "Encapsulation optimistically updates related utils to optimize the network load.": '封装乐观更新相关utils，优化网络负载',
          "Implement career reports computational generation for three universities.": '实现三个大学的生涯报告计算生成',

          "Responsible for the entire life cycle of the project and its infrastructure.": "负责整个项目的生命周期，及其基础建设",
          "Encapsulate BasetEChart components, build a visualization platform, and dynamically route reactive control charts.": "封装BasetEChart组件，搭建可视化平台，动态路由响应式控制",
          "Fine-grained peer-to-peer control of permissions, unified network request Api specification, and encapsulate hooks based on pinia to realize the basic data flow of the project.": "权限更细粒的点对点控制，统一网络请求Api规范，基于pinia封装hooks，实现项目基础数据流",
          "Able to find issues in open source component libraries during project development and raise issues Pr.": "能在项目开发过程中能发现开源组件库的问题，并提有效issues Pr",
          "Combined with the Vite plugin ecosystem, optimize the performance of the project, build optimization, and development experience optimization.": "结合Vite插件生态，对项目进行性能优化，构建优化，以及开发体验优化",

          "June": "六月",
          "July": "七月",
          "August": "八月",
          "September": "九月",
          "October": "十月",
          "November": "十一月",
          "December": "十二月",
          "January": "一月",
          "February": "二月",
          "March": "三月",
          "April": "四月",
          "May": "五月",

          "June 2022 - September 2022": "2022年6月-2022年9月",
          "September 2022 - March 2023": "2022年9月-2023年3月",
          "March 2022 - November 2022":"2022年5月-2022年10月",

          "Testimonials": "感言",
          "WHAT OTHERS SAY": "他们怎么说",
          "FeiFei": "菲菲",
          "Teacher Cai": "蔡老师",
          "Conteact": "联系方式",
          
          "Hong Classmate": "红同学",
          "I thought it was impossible to make a website as beautiful as our product, but GeorgeH proved me wrong.": "我认为做出像我们产品一样漂亮的网站是不可能的，但是GeorgeH却证明了我错了。",
          "I have worked with GeorgeH on several projects and I can say that he is a very talented developer.": "我与GeorgeH在几个项目上合作过，我可以说他是一个非常有才华的开发人员。",
          "I've never met a front-end developer who truly cares about the customer experience as much as GeorgeH does.": "我从未遇到过像GeorgeH这样真正关心客户体验的前端开发人员。",
          "After GeorgeH optimized our website, our website performance improved by 20 percent!": "在GeorgeH优化我们的网站后，我们的网站性能提高了20% !",

          "GET IN TOUT": "联系我",
          "Your Name": "你的名字",
          "Your Email": "你的邮箱",
          "Your Message": "你的留言",
          "Send": "发送",
          "What's your email ?": "你的邮箱是什么?",
          "What's your name ?": "你的名字是什么?",
          "Please Write Down What You Want To Say !": "请写下你想说的!",

          "This is the react component design and customHooks library.": "这是react组件设计和customHooks库。",
          "The Vite plugin ecosystem is used to realize the dynamic generation of routes and their folder structure.": "使用Vite插件生态实现路由的动态生成以及其文件夹结构。",
          "Implement enterprise-level project management system based on react and typescript.": "基于react和typescript实现企业级项目管理系统。",
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
