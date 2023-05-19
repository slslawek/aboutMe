export type Menu = {
  text: string,
  path: string,
  active: boolean
};

export type Header = {
  name:string,
  address:string,
  phone:string,
  email:string,
  photo:string
}

export type About = {
title?:string,
content?:string
}

export type Experience = {
  title?:string,
  content?:ExperienceContent[]
}

export type ExperienceContent = {
  business?:string,
  start?:number,
  stop?:number|null,
  description?:any
}

export type Skills = {
  title?:string,
  content?:SkillsContent[]
}

export type SkillsContent = {
  item?:string,
  level?:number
}

export type Hobby = {
  title?: string,
  content?:string[]
}

export type Portfolio = {
  title?: string,
  apps?: Apps[],
  web?: Web[]
}

export type Apps = {
  title?: string,
  images?: { file?: string }[],
  tech?: string
}

export type Web = {
  title?: string,
  images?: { file?: string }[],
  tech?: string,
  url?: string
}
