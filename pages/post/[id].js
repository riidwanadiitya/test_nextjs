import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDetailPost,getUser } from "../../redux";
import Layout from "../../components/layout/Layout";
import { connect } from "react-redux";
import { Card, Container } from "react-bootstrap";

function DetailPost(props) {
  const { getDetailPost, dataPost,getUser } = props;
  const [dataId, setDataId] = useState(null);
  const router = useRouter();
  const { id } = router.query;
//   useEffect(() => {
//     getDetailPost(Object.values(router.query));
//   }, []);
  return (
    <div>
      <Layout>
        <h1>Detail Post</h1>
        <hr />
        <Container>
          <Card className="p-3">
            <h3>{dataPost.detailPost.title}</h3>
            <p>{dataPost.detailPost.body}</p>
          </Card>
        </Container>
      </Layout>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dataPost: state.detailPost,
  };
};



export default connect(mapStateToProps,null)(DetailPost);
