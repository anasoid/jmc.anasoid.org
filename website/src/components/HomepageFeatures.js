import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        JMC was designed from the ground up to easily generate JMX and execute script.
        There no limitation in JMC, all what can Jmeter do JMC can do it.
         first releases are more focuses on HTTP, but others protocols will be added soon.     </>
    ),
  },
  {
    title: 'Focus on reusability',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Jmeter as GUI is powerfull to work on new and small project,
        but when you need to work on big one GUI become more complexe
        and don't give enouph flexibility to reuse old project.
      </>
    ),
  },
  {
    title: 'Work as a team',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Managing JMX file as a code give the flexibility to work with team as the
         JMX is generated by many Java class and you can see and inderstund change in Java File,
        Extend or customize your website layout by reusing React. Docusaurus can
        
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
