interface ContainerProps {
  children: React.ReactNode;
}

const Container = (props: ContainerProps) => {
  return <div className="m-auto max-w-screen-lg">{props.children}</div>;
};

export default Container;
