import React from "react";
import "./style.css";
import Button from  "./components/Links.js"

export default function App() {
  return (
    <div>
      <Button id = "btn__zuri" href="https://training.zuri.team/" name="Zuri Team" />
      <Button id = "books" href="https://books.zuri.team/" name="Zuri Books" />
      <Button id = "books__python" href="https://boks.zuri.team/" name="Python Books" />
      <Button id = "pitch" href="https://background.zuri.team/" name="Background Check For Coders" />
      <Button id = "book__design" href="https://training.zuri.team/design-rules" name="Design Books" />
    </div>
  );
}
