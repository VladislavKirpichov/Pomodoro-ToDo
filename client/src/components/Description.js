import React from 'react'

import classes from './Description.module.scss'

const sections = [
  {
    id: 1,
    headline: 'What is PomodoroToDo?',
    content: 'Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.'
  },
  {
    id: 2,
    headline: 'What is Pomodoro techique?',
    content: 'The Pomodoro® Technique is a time management method developed by Francesco Cirillo in the late 1980s. It is a structured method made up of processes, tools, principles and values to learn how to deal with time and turn it from a vicious predator to an ally to boost productivity. It is based on a series of principles built on self-observation and awareness. Developing these skills makes it possible to change the relationship with time and reach our goals with less effort and anxiety. For many of us time is an enemy. The anxiety triggered by deadlines leads to ineffective work and procrastination. The Pomodoro® Technique transforms time into a valuable ally. Thanks to this technique we can use time to be more productive.'
  }
]

const Description = () => {
  return (
    <div className={classes.description}>
      {sections.map((section) => (
        <div key={section.id} className={classes.section}>
            <h3>{section.headline}</h3>
            <p>{section.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Description