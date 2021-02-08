import { Chip } from "./styles";

function Tag({ info, handleClose }) {
  return (
    <Chip>
      {info}
      <span onClick={handleClose}>&times;</span>
    </Chip>
  );
}

export default Tag;
