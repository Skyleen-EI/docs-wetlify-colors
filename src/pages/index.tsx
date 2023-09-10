import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import { siteURL } from '@site/constants';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1
          className="hero__title"
          style={{
            color: 'black',
          }}
        >
          {siteConfig.title}
        </h1>
        <p
          className="hero__subtitle"
          style={{
            color: '#666',
          }}
        >
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <a
            className="button button--primary button--lg"
            href={siteURL}
            target="_blank"
          >
            Go to the site
          </a>
          <Link
            className="button button--secondary button--lg"
            to={`/docs/intro`}
          >
            Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
