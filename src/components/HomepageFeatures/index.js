import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '基础教程',
    Svg: require('@site/static/img/tutorial.svg').default,
    description: (
      <>
        汇聚了 Java 学习过程中的各种保姆级教程，包括 SE  基础、Web、数据库、Spring 系列、各种框架中间件等超多内容，持续更新中……
      </>
    ),
  },
  {
    title: '好物周刊',
    Svg: require('@site/static/img/weekly.svg').default,
    description: (
      <>
        村雨遥的好物周刊，记录每周看到的有价值的信息，主要针对计算机领域，每周五发布。
      </>
    ),
  },
  {
    title: '面试宝典',
    Svg: require('@site/static/img/interview.svg').default,
    description: (
      <>
        找工作必备……
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
