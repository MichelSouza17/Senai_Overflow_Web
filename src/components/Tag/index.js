import { Chip } from "./styles";

function Tag({ info }) {
  return (
    <Chip>
      {info}
      <span>&times;</span>
      {/* <article>Backend</article>;<article>Frontend</article>; */}
    </Chip>
  );
}

export default Tag;
