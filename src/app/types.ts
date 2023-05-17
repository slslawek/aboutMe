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
