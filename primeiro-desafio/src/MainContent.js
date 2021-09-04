import Heading2 from './Heading2';
import Heading3 from './Heading3';

function MainContent() {
  return (
    <main className="content">
      <article>
        <Heading2>1. Lorem Ipsum</Heading2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          consequatur consectetur nobis aspernatur eius! Dicta odio sit sapiente
          nostrum magnam nulla iste? Sapiente quos aperiam totam? Praesentium
          iusto debitis facilis enim possimus delectus corporis eos ipsam, id
          tenetur, dolor quaerat.
        </p>
        <Heading2>2. Lorem Ipsum</Heading2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          consequatur consectetur nobis aspernatur eius! Dicta odio sit sapiente
          nostrum magnam nulla iste? Sapiente quos aperiam totam? Praesentium
          iusto debitis facilis enim possimus delectus corporis eos ipsam, id
          tenetur, dolor quaerat.
        </p>
        <Heading3>2.1 Lorem Ipsum</Heading3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
          pariatur, cumque quod, quibusdam eos facere omnis assumenda corporis
          earum eveniet reprehenderit exercitationem ducimus ipsam veritatis?
        </p>
        <Heading3>2.2 Lorem Ipsum</Heading3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
          pariatur, cumque quod, quibusdam eos facere omnis assumenda corporis
          earum eveniet reprehenderit exercitationem ducimus ipsam veritatis?
        </p>
      </article>
    </main>
  );
}

export default MainContent;
