import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>This is heading 1</h1>
      <h2>This is heading 2</h2>
      <h3>This is heading 3</h3>


      <p>This is a paragraph.</p>
      <p>This is another paragraph.</p>

      <a href="https://www.w3schools.com">This is a link</a>

      <img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142"></img>

      <p>This is a <br/> paragraph with a line break.</p>
      <p title="I'm a tooltip">This is a paragraph.</p>

      <a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>


      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>


      <p>This is a paragraph.</p>
      <p>This is another paragraph.</p>


      <p>
      This paragraph
      contains a lot of lines
      in the source code,
      but the browser
      ignores it.
      </p>


      <p>
      This paragraph
      contains         a lot of spaces
      in the source         code,
      but the        browser
      ignores it.
      </p>


      <h1>This is heading 1</h1>
      <p>This is some text.</p>
      <hr/>
      <h2>This is heading 2</h2>
      <p>This is some other text.</p>
      <hr/>


      <p>This is<br/>a paragraph<br/>with line breaks.</p>


      <p>
      My Bonnie lies over the ocean.

      My Bonnie lies over the sea.

      My Bonnie lies over the ocean.

      Oh, bring back my Bonnie to me.
      </p>


      <pre>
      My Bonnie lies over the ocean.

      My Bonnie lies over the sea.

      My Bonnie lies over the ocean.

      Oh, bring back my Bonnie to me.
      </pre>



    

    </main>
  );
}
