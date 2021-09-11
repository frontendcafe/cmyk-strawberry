import React from 'react'
import styles from './PersonalCard.module.scss'
import photo from '../../../assets/photo.png'
import ejemplo from '../../../assets/ejemploo.jpg'
import Icon from '../../atoms/Icons'

export interface Props {
    name: string;
    job: string;
    description: string;
    hrefLinkedin: string;
    hrefTwitter: string;
    hrefDribbble: string;
    hreftGithub: string;
    image: 'photo' | 'ejemplo'
    twitter: string;
    linkedin: string;
    dribbble: string;
    github: string;
}

const PersonalCard = ({ name, job, description, image, hrefLinkedin, hrefTwitter, hrefDribbble, hreftGithub, twitter, linkedin, dribbble, github }: Props) => {
  const imageCard = { photo, ejemplo }
  return (
    <div className={styles.container}>
      <img src={imageCard[image]} className={styles.imgcard}/>
      <h3>{name}</h3>
      <p>{job}</p>
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
            <a href={hreftGithub}>
              <Icon variante='github'/>
            </a>
          )
        }
      </div>
      <p>{description}</p>
    </div>
  )
}
export default PersonalCard
