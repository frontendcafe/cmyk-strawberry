import React from 'react'
import styles from './PersonalCard.module.scss'
import Icon from '../../atoms/Icons'
// Team members
import FreudMunera from '../../../assets/about-img/FreudMunera.jpg'
import KevinAu from '../../../assets/about-img/KevinAu.jpg'
import MaxiCris from '../../../assets/about-img/MaxiCris.jpg'
import AgustinVazquez from '../../../assets/about-img/AgustinVazquez.png'
import MaruMoreno from '../../../assets/about-img/MaruMoreno.jpg'
import JoshuaRodriguez from '../../../assets/about-img/JoshuaRodriguez.jpg'
export interface Props {
    name: string;
    job: string;
    description: string;
    image: 'FreudMunera' | 'KevinAu' | 'MaxiCris' | 'AgustinVazquez' | 'MaruMoreno' | 'JoshuaRodriguez'
    hrefLinkedin?: string;
    hrefTwitter?: string;
    hrefDribbble?: string;
    hrefGithub?: string;
    hrefFigma?: string;
    hrefWeb?: string;
    twitter?: string;
    linkedin?: string;
    dribbble?: string;
    github?: string;
    figma?: string;
    web?: string;
}

const PersonalCard = ({ name, job, description, image, hrefLinkedin, hrefTwitter, hrefDribbble, hrefGithub, hrefFigma, hrefWeb, twitter, linkedin, dribbble, github, figma, web }: Props) => {
  const imageCard = { FreudMunera, KevinAu, MaxiCris, AgustinVazquez, MaruMoreno, JoshuaRodriguez }
  return (
    <div className={styles.container}>
      <img src={imageCard[image]} className={styles.imgcard}/>
      <h3>{name}</h3>
      <p className={styles.job}>{job}</p>
      <div className={styles.icon}>
        {
          twitter && (
            <a href={hrefTwitter}>
              <Icon variante='twitter'/>
            </a>
          )
        }
        {
          linkedin && (
            <a href={hrefLinkedin}>
              <Icon variante='linkedin'/>
            </a>
          )
        }
        {
          dribbble && (
            <a href={hrefDribbble}>
              <Icon variante='dribbble'/>
            </a>
          )
        }
        {
          github && (
            <a href={hrefGithub}>
              <Icon variante='github'/>
            </a>
          )
        }
        {
          figma && (
            <a href={hrefFigma}>
              <Icon variante='figma'/>
            </a>
          )
        }
        {
          web && (
            <a href={hrefWeb}>
              <Icon variante='web'/>
            </a>
          )
        }
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
export default PersonalCard
