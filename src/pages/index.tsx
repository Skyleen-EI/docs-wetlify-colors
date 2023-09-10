import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BrowserOnly from '@docusaurus/BrowserOnly';

import styles from './index.module.css';
import { siteURL } from '@site/constants';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const [isDarkMode, setIsDarkMode] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark',
  );

  useEffect(() => {
    const handleThemeChange = (mutationsList) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-theme'
        ) {
          setIsDarkMode(mutation.target.getAttribute('data-theme') === 'dark');
        }
      }
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={clsx('hero', styles.heroBanner)}
      style={{
        backgroundColor: isDarkMode ? '#303846' : '#f9fafb',
      }}
    >
      <div className="container">
        <h1
          className="hero__title"
          style={{
            color: isDarkMode ? 'white' : 'black',
          }}
        >
          {siteConfig.title}
        </h1>
        <p
          className="hero__subtitle"
          style={{
            color: isDarkMode ? '#cbd5e0' : '#666',
          }}
        >
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <a
            className="button button--primary button--lg"
            style={{
              color: 'white',
            }}
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
      <BrowserOnly>{() => <HomepageHeader />}</BrowserOnly>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
