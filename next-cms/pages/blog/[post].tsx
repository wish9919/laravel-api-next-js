import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import Admin from "../../layouts/Admin";

const Post: NextPage = () => {
  const router = useRouter();

  return (
    <Admin>
      <div className="container py-5 px-5">
        <h1>Post {router.query.post}</h1>
      </div>
    </Admin>
  );
};

Post.getInitialProps = async (context: NextPageContext) => {
  return context;
};

export default Post;
