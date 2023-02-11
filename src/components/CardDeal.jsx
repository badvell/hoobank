import Button from './Button';

import { card } from '../assets';

import styles, { layout } from '../style';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className='sm:block hidden' /> ease steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi natus
        praesentium nam dolorem vel optio dolor. Sit, numquam? Nisi voluptatem,
        repellendus numquam animi hic modi.
      </p>
      <Button styles='mt-10' />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w-[100%] h-[100%] object-contain' />
    </div>
  </section>
);

export default CardDeal;
