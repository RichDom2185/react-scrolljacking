import "./App.css";
import PopInImage from "./components/PopInImage";
import { HSection, VSection } from "./components/SectionContainer";
import { HItem, VItem } from "./components/SectionItem";
import {
  HIMAGE_1,
  HIMAGE_2,
  HIMAGE_3,
  POP_IN_IMAGE,
  VIMAGE_1,
  VIMAGE_2,
  VIMAGE_3,
} from "./Constants";

function App() {
  const ourTeam = (
    <div className="flex-container" style={{ justifyContent: "center" }}>
      <div className="team-intro md">
        <h1 className="title">Meet our team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione omnis
          minus labore officia inventore exercitationem a ullam quaerat aut et.
        </p>
      </div>
    </div>
  );

  return (
    <div className="page-content">
      <div className="text-section intro-section lg">
        <h1 className="title">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p>
          This website serves as a demo of scroll-jacking in React. I
          couldn&rsquo;t find a guide for it, so here it is for everyone. You
          can check out the GitHub repository for the template code. Enjoy! The
          next few words are just filler text: Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nostrum iure excepturi vitae ipsa maxime
          est perspiciatis iusto sint! Consequuntur, neque!
        </p>
      </div>
      <VSection>
        <VItem id="vitem-1" image={VIMAGE_1}>
          <h2 className="heading">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quas itaque dolores, iure ad dicta asperiores atque voluptates
            quibusdam laboriosam aut iste mollitia. Molestias itaque placeat,
            veritatis ad architecto adipisci.
          </p>
        </VItem>
        <VItem id="vitem-2" image={VIMAGE_2}>
          <h2 className="heading">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quas itaque dolores, iure ad dicta asperiores atque voluptates
            quibusdam laboriosam aut iste mollitia. Molestias itaque placeat,
            veritatis ad architecto adipisci.
          </p>
        </VItem>
        <VItem id="vitem-3" image={VIMAGE_3}>
          <h2 className="heading">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quas itaque dolores, iure ad dicta asperiores atque voluptates
            quibusdam laboriosam aut iste mollitia. Molestias itaque placeat,
            veritatis ad architecto adipisci.
          </p>
        </VItem>
      </VSection>
      <div className="text-section flex-container">
        <div className="left sm">
          <h2 className="heading">Hey there! 😀</h2>
          <p>Here&rsquo;s a list of some random stuff.</p>
          <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ul>
          <p>You should see the image to the right slowly fade into view 👀.</p>
          <p>
            More specifically, it should start fading in about a quarter of the
            way through the image and stop about three quarters through the
            image as you scroll down.
          </p>
        </div>
        <PopInImage id="pop-in-image" src={POP_IN_IMAGE} />
      </div>
      <HSection leading={ourTeam}>
        <HItem id="hitem-1" image={HIMAGE_1}>
          <h2 className="heading">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quas itaque dolores, iure ad dicta asperiores atque voluptates
            quibusdam laboriosam aut iste mollitia. Molestias itaque placeat,
            veritatis ad architecto adipisci.
          </p>
        </HItem>
        <HItem id="hitem-2" image={HIMAGE_2}>
          <h2 className="heading">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quas itaque dolores, iure ad dicta asperiores atque voluptates
            quibusdam laboriosam aut iste mollitia. Molestias itaque placeat,
            veritatis ad architecto adipisci.
          </p>
        </HItem>
        <HItem id="hitem-3" image={HIMAGE_3}>
          <h2 className="heading">Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quas itaque dolores, iure ad dicta asperiores atque voluptates
            quibusdam laboriosam aut iste mollitia. Molestias itaque placeat,
            veritatis ad architecto adipisci.
          </p>
        </HItem>
      </HSection>
      <div className="text-section bg-gray">
        <div className="md">
          <h2 className="heading">The End</h2>
          <p>
            This is just some more text to fill up space. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Quod placeat illum distinctio
            consequuntur veniam aut nihil magni itaque quisquam obcaecati odit,
            ea, suscipit quia cum ut earum repellendus assumenda sint ipsa ullam
            alias eos id. Earum dicta quam corrupti deleniti saepe, ea quidem!
            CSS isn&rsquo;t using best practices but unfortunately no time.
          </p>
          <p>Illustrations by Doodle Ipsum. Website created using React.js.</p>
          <p style={{ fontWeight: "bold" }}>Richard Dominick © 2025</p>
        </div>
      </div>
    </div>
  );
}

export default App;
