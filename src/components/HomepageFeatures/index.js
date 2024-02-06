import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Efficient School Meal Management',
    Svg: require('@site/static/img/home/undraw_breakfast_psiw.svg').default,
    description: (
      <>
        CadMerenda streamlines school meal management, ensuring efficient processes for nutritious and cost-effective meals.
      </>
    ),
  },
  {
    title: 'Innovative Bidding Processes',
    Svg: require('@site/static/img/home/undraw_user_flow.svg').default,
    description: (
      <>
        The platform introduces innovative bidding processes, empowering suppliers for fair competition and affordable quality products.
      </>
    ),
  },
  {
    title: 'Streamlined Procurement',
    Svg: require('@site/static/img/home/undraw_online_transactions.svg').default,
    description: (
      <>
        Experience simplified procurement, providing a user-friendly platform for schools to access top-notch products at competitive prices.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
