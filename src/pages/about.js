import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const about = () => {
  return (
    <div>
      <Layout>
        <SEO title="About" />
        <h1>About Me</h1>
        <p>
          My name is Farouk Ben Fraj. I am a a fullstack web developer. I love
          JavaScript and managing to solve complicated algorithmic problems.
        </p>
        <p>
          I started learning to code C and Java in 2013 after I graduated from
          high school. I was a little on-and-off with my learning up until I
          discovered React and NodeJS. From there, I jumped into JavaScript and
          have been falling more and more in love with web development ever
          since. I then decided that it was, indeed, the career I wanted to
          pursue.
        </p>
        <p>
          Other than coding, I also enjoy cinema culture and sports. My favorite
          movies are Joker (2019) and Fight Club (1999). I also practiced Karate
          and currently switching to Krav Maga.
        </p>
        <p>
          One of my favorite things to do is taking my passion for coding and my
          various hobbies to combine them into personnal projects, for example
          my exercice follow-up app. Designing my own tools for everyday's life
          is so satisfying. And then translating that into code and crafting a
          truly memorable app is my passion.
        </p>
        <p>
          Both my parents are Tunisian but I was born and raised in France. That
          way, I've been able to take what's best from both cultures and I think
          combining both perspectives makes me have a better view on the world
          in some way. I currently live in Paris but I am a big fan of Poland
          and its culture (especially their food, Żurek is the best). I went
          there many times and visited multiple cities, Kraków being my
          favorite. I'm very interested in learning and meeting more people from
          that country!
        </p>
        <p>
          Some other hobbies of mine include music and video games. I play
          guitar and love online team games, I think they're great.
        </p>
      </Layout>
    </div>
  )
}

export default about
