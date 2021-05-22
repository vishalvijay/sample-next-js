import { NextPage } from "next";

const SuperPage: NextPage<{ name: string }> = ({ name }) => {
  return <div>This is something awesome.... Mr {name}</div>;
};

SuperPage.getInitialProps = () => {
  return Promise.resolve({ name: "Sukumara Kuruppu" });
};

export default SuperPage;
