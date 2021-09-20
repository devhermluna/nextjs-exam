interface Props {
  src: string;
  size: number;
}

const Avatar = ({
  src,
  size,
}: Props) => (
  <div
    style={{
      width: size,
      height: size,
    }}
    className="rounded-full overflow-hidden"
  >
    <img
      src={src}
      alt="Avatar"
      className="object-cover object-center"
    />
  </div>
);

export default Avatar;
