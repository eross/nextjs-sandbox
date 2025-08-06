import type { GetServerSideProps } from "next";
//import Image from "next/image";

export const getServerSideProps: GetServerSideProps = async () => {
  const userRequest = await fetch('https://example.com/api/user');
  console.log(await userRequest);
  //const userData ={name:"Eric"};
  const userData = "Eric";
 // const userData = await userRequest.json();
  return {
    props: {
      user: userData
    }
  };
};

interface Props {
  user: { name: string };
}

export default function IndexPage(props: Props) {
  return <div>Hello {props.user.name}!</div>;
}
