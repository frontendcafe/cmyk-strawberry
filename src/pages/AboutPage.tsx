import React from 'react'
import styles from './styles/aboutPages.module.scss'
import close from '../assets/close.svg'
import { Link, withRouter } from 'react-router-dom'
import PersonalCard from '../components/molecules/PersonalCard/index'

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to='/'>
          <img src={close} alt='close'/>
        </Link>
        <h3 className={styles.title}>Sobre Nosotros</h3>
      </header>
      <div className={styles.info}>
        <div className={styles.project}>
          <h4>Contexto del proyecto</h4>
          <p>Frutti <span>¡Stop!</span> es un juego de lápiz y papel que consiste en
            escribir palabras a partir de una letra y de una serie de categorias definidas
            previamente. En esta oportunidad lo vamos a llevar a lo digital.</p>
          <p>Las tecnologías que utilizamos para desarrollarlo
            fueron <span>React</span> con <span>Typescript</span> y <span>SCSS modules</span> junto
            a <span>Firebase</span> como base de datos en tiempo real.</p>
        </div>
        <div className={styles.team}>
          <PersonalCard
            name={'Kevin Au'}
            job={'Web Developer in the making'}
            image={'KevinAu'}
            linkedin={'linkedin'}
            hrefLinkedin={' https://www.linkedin.com/in/kevin-au-87866967/'}
            twitter={'twitter'}
            hrefTwitter={'https://twitter.com/atKevin71'}
            github={'github'}
            hrefGithub={'https://github.com/kevin-dev71'}
            description={'Aprendiendo todos los dias sobre tecnologia, trabajo en equipo y algun dia alcanzar el dream job (viajar y libertad financiera).'}
          />
          <PersonalCard
            name={'Freud Munera'}
            job={'Front End Developer'}
            image={'FreudMunera'}
            linkedin={'linkedin'}
            hrefLinkedin={'https://www.linkedin.com/in/freud-alexandro/'}
            twitter={'twitter'}
            hrefTwitter={'https://twitter.com/AlexandroMunera'}
            github={'github'}
            hrefGithub={'https://github.com/AlexandroMunera'}
            description={'Desarrollador de software con experiencia en los entornos web y móvil. Me gusta resolver problemas y conocer nuevas personas, tengo pensamiento critico y disfruto mucho aprender nuevas cosas.'}
          />
          <PersonalCard
            name={'Maxi Cris'}
            job={'UX Designer'}
            image={'MaxiCris'}
            linkedin={'linkedin'}
            hrefLinkedin={'https://linkedin.com/in/maxicris'}
            twitter={'twitter'}
            hrefTwitter={'https://twitter.com/_maxicris'}
            figma={'figma'}
            hrefFigma={'https://figma.com/@maxicris'}
            description={'Diseñador UX orientado en Visual Design e Interaction Design. Mi objetivo es crear soluciones a problemas reales, colocando a los usuarios en el centro del proceso.'}
          />
          <PersonalCard
            name={'Agustin Vazquez'}
            job={'Frontend Developer'}
            image={'AgustinVazquez'}
            linkedin={'linkedin'}
            hrefLinkedin={'https://www.linkedin.com/in/maria-moreno86/'}
            github={'github'}
            hrefGithub={'https://github.com/maru8605'}
            twitter={'twitter'}
            hrefTwitter={'https://twitter.com/maru_1101'}
            web={'web'}
            hrefWeb={' https://9gustin.com/'}
            description={'Entre al mundo del desarrollo Front end por curiosidad y me quede por la diversión. Aprendiendo constantementa. Disfruto del trabajo en equipo'}
          />
          <PersonalCard
            name={'Maru Moreno'}
            job={'UX Designer'}
            image={'MaruMoreno'}
            linkedin={'linkedin'}
            hrefLinkedin={'https://www.linkedin.com/in/maria-moreno86/'}
            github={'github'}
            hrefGithub={'https://github.com/maru8605'}
            twitter={'twitter'}
            hrefTwitter={'https://twitter.com/maru_1101'}
            description={'Entre al mundo del desarrollo Front end por curiosidad y me quede por la diversión. Aprendiendo constantementa. Disfruto del trabajo en equipo'}
          />
          <PersonalCard
            name={'Joshua Rodriguez'}
            job={'Fullstack developer'}
            image={'JoshuaRodriguez'}
            linkedin={'linkedin'}
            hrefLinkedin={'https://www.linkedin.com/in/joshua-rodriguez-60943b214/'}
            github={'github'}
            hrefGithub={'https://github.com/joshuaabel1'}
          />
        </div>
      </div>
    </div>
  )
}

export default withRouter(AboutPage)
