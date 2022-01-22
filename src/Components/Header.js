import Button from "./Button";

export default function Header() {
  return (
    <div className="header-row">
      <div className="title">Title</div>
      <ul>
        <li>Home</li>
        <li>Contact us</li>
        <li>Founder</li>
      </ul>
      <div style={{ width: "33%" }}>
        <Button title={"Get in Touch"} />
      </div>
    </div>
  );
}
