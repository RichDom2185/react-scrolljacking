import "./App.css";
import { HItem, VItem } from "./components/SectionItem";
import { HSection, VSection } from "./components/SectionContainer";
import PopInImage from "./components/PopInImage";

function App() {
  return (
    <div className="page-content">
      <div className="text-section">
        <h1 className="title">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p>
          This website serves as a demo of scroll-jacking in React. I couldn't
          find a guide for it, so here it is for everyone. You can check out the
          GitHub repository for the template code. Enjoy!
        </p>
        <p>The following is a vertical section:</p>
      </div>
      <VSection>
        <VItem
          id="vitem-1"
          image={
            "https://doodleipsum.com/700x933/hand-drawn?bg=D98D63&i=5efe8d596efd1dd7c55507ac9aeaef95"
          }
        >
          <h2 className="item__title">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quas itaque dolores, iure ad dicta asperiores atque voluptates
            quibusdam laboriosam aut iste mollitia. Molestias itaque placeat,
            veritatis ad architecto adipisci.
          </p>
        </VItem>
        <VItem
          id="vitem-2"
          image={
            "https://doodleipsum.com/700x933/hand-drawn?bg=FF3C3C&i=dbc0f7a3fdb7a29bd3c3c91d2143f5bc"
          }
        >
          <h2 className="item__title">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quas itaque dolores, iure ad dicta asperiores atque voluptates
            quibusdam laboriosam aut iste mollitia. Molestias itaque placeat,
            veritatis ad architecto adipisci.
          </p>
        </VItem>
        <VItem
          id="vitem-3"
          image={
            "https://doodleipsum.com/700x933/hand-drawn?bg=c863d9&i=05ff6eed5dc7a75776423f118d7be810"
          }
        >
          <h2 className="item__title">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quas itaque dolores, iure ad dicta asperiores atque voluptates
            quibusdam laboriosam aut iste mollitia. Molestias itaque placeat,
            veritatis ad architecto adipisci.
          </p>
        </VItem>
      </VSection>
      <div className="text-section flex-container">
        <div className="left">
          <h2 className="item__title">Hey there! 😀</h2>
          <p>Here's a list of some random stuff.</p>
          <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ul>
          <p>
            You should see the image to the right slowly fade and slide into
            view 👀.
          </p>
        </div>
        <PopInImage
          from="right"
          src={
            "https://doodleipsum.com/700/abstract?bg=63C8D9&i=9e88b00d558613df9b31e2d3782244c3"
          }
        />
      </div>
      <div className="text-section">
        <h2 className="item__title">
          The quick brown fox jumps over a lazy dog.
        </h2>
        <p>The following is a horizontal section:</p>
      </div>
      <HSection>
        <HItem
          id="hitem-1"
          image={
            "https://doodleipsum.com/700/hand-drawn?bg=D96363&i=eb703e5ed11f81baa710587380587f25"
          }
        >
          <h2 className="item__title">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quas itaque dolores, iure ad dicta asperiores atque voluptates
            quibusdam laboriosam aut iste mollitia. Molestias itaque placeat,
            veritatis ad architecto adipisci.
          </p>
        </HItem>
        <HItem
          id="hitem-2"
          image={
            "https://doodleipsum.com/700/hand-drawn?bg=7463d9&i=278b34590ef6c60bd571dcd8b27e27ea"
          }
        >
          <h2 className="item__title">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quas itaque dolores, iure ad dicta asperiores atque voluptates
            quibusdam laboriosam aut iste mollitia. Molestias itaque placeat,
            veritatis ad architecto adipisci.
          </p>
        </HItem>
        <HItem
          id="hitem-3"
          image={
            "https://doodleipsum.com/700/hand-drawn?bg=EB765D&i=f1e89bf777357d4ac29c8ecbde156bb1"
          }
        >
          <h2 className="item__title">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quas itaque dolores, iure ad dicta asperiores atque voluptates
            quibusdam laboriosam aut iste mollitia. Molestias itaque placeat,
            veritatis ad architecto adipisci.
          </p>
        </HItem>
      </HSection>
      <div className="text-section">
        <h2 className="item__title">The End.</h2>
        <p>Illustrations by Doodle Ipsum. Website created using React.js.</p>
        <p>Richard Dominick © 2022</p>
      </div>
    </div>
  );
}

export default App;
