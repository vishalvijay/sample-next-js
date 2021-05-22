import { useRouter } from "next/dist/client/router";

const UserPage: React.FC = () => {
  const router = useRouter();

  const userId = router.query.userId as string;

  return <div>Hello Mr.{userId}</div>;
};

export default UserPage;
