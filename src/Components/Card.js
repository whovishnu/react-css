import { Avatar } from "react-lorem-ipsum";

export default function Card({ image, header, headerClassName, discriptions }) {
  return (
    <div
      style={{
        width: "60%",
        // border: "1px solid white",
        padding: "0px 15px 0px"
      }}
    >
      {image ? <Avatar /> : null}
      <div className={headerClassName}>{header}</div>
      <p className="paragraph">{discriptions}</p>
    </div>
  );
}
