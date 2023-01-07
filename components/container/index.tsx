type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-center">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Container;
