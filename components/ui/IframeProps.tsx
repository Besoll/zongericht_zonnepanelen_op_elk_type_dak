interface IframeProps {
  src: string;
  width: string;
  height: string;
}

const IframeComponent: React.FC<IframeProps> = ({ src, width, height }) => {
  return (
    <iframe
      style={{ border: '1px solid transparent' }}
      allowTransparency={true}
      src={src}
      width={width}
      height={height}
    />
  );
};

export default IframeComponent;

