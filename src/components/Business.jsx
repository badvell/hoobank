import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, id }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      id !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex flex-1 flex-col ml-3'>
      <h3 className='font-poppins font-semibold text-[18px] leading-[23px] text-white'>
        {title}
      </h3>
      <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the bussines, <br className='sm:block hidden' /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles='mt-10' />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, id) => (
          <FeatureCard key={feature.id} {...feature} id={id} />
        ))}
      </div>
    </section>
  );
};

export default Business;
