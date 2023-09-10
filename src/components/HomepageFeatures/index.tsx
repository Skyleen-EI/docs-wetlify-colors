import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Create your palettes and colors',
    Svg: require('@site/static/img/pencil-icon.svg').default,
    description: (
      <>
        Design your color palettes easily with our palette builder tool. Use our
        different tools (color mixer, color picker...) to create your colors.
      </>
    ),
  },
  {
    title: 'Explore thousands of palettes',
    Svg: require('@site/static/img/swatch-icon.svg').default,
    description: (
      <>
        Explore color palettes created by the greatest artists but also the
        color palettes of the biggest brands.
      </>
    ),
  },
  {
    title: 'Save them in projects',
    Svg: require('@site/static/img/cloud-icon.svg').default,
    description: (
      <>
        Save your color palettes and colors in different projects to easily
        categorize and find them.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div
          className="row"
          style={{
            marginTop: '20px',
          }}
        >
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
