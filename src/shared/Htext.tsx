import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Htext = ({ children }: Props) => {
  return (
    <h1 className="text-3xl basis-3/5 font-montserrat font-bold">{children}</h1>
  );
};

export default Htext;
