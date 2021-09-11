import React from 'react'
import styles from './styles/AboutPages.module.scss'
import close from '../assets/close.svg'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import PersonalCard from '../components/molecules/PersonalCard/index'

interface Props {
  className?: string;
}

const AboutPage: React.FC<any & RouteComponentProps<any>> = Props => {
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
          escribir palabras a partir de una letray de una serie de categorias definidas
          previamente. En esta oportunidad lo vamos a llevar a lo digital.</p>
          <p>Las tecnologías que utilizamos para desarrollarlo
          fueron <span>React</span> con <span>Typescript</span> y <span>SCSS modules</span> junto
          a <span>Firebase</span> como base de datos en tiempo real.</p>
        </div>
        <div className={styles.team}>
          <PersonalCard
            name={ 'Maria Moreno' }
            job={'Front End Developer'}
            image={'ejemplo'}
            linkedin={'linkedin'}
            hrefLinkedin={'https://www.linkedin.com/in/maria-moreno86/'}
            twitter={'twitter'}
            github={'github'}
            description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'}
          />
          <PersonalCard
            name={ 'Maria Moreno' }
            job={'Front End Developer'}
            image={'ejemplo'}
            linkedin={'linkedin'}
            hrefLinkedin={'https://www.linkedin.com/in/maria-moreno86/'}
            twitter={'twitter'}
            github={'github'}
            description={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'}
          />
        </div>
      </div>
    </div>
  )
}

export default withRouter(AboutPage)
