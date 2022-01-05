import Image from "next/image";
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Layout from "../../components/layout/Layout";
import { setInfo, getPosts, getUsers,getPost } from "../../redux";
import { useRouter } from 'next/router'
import CardTrending from "../../components/trending/CardTrending";
import CardTopic from "../../components/topic/CardTopic";

function homePage(props) {
  const { name, setInfo, posts, getPosts, getUsers, users, getPost } = props;
  const router= useRouter();

  const getDetailPost =(data,id) =>{
    // console.log(data,id)
    getPost(data),
    router.push(`/post/${id}`)
  }

  useEffect(() => {
    getPosts(), getUsers();
  }, []);

  return (
    <>
      <Layout>
        <h1>Beranda</h1>
        <h3>Hai, {name}</h3>
        <hr />
        <div>
          <Container>
            <Row>
              <Col md={8}>
                {posts.map((data) => {
                  return (
                    <Card key={data.id} className="mb-3" onClick={()=>getDetailPost(data,data.id)}>
                      <Card.Body>
                        <h3>{data.title}</h3>
                        <p>{data.body}</p>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Col>
              <Col md={4}>
                <CardTrending dataUser={users}/>
                <CardTopic dataUser={users}/>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.main.name,
    posts: state.allPost.posts,
    users: state.allUser.users,
  };
};

const mapDispatchToProps = {
  setInfo,
  getPosts,
  getUsers,
  getPost
};

export default connect(mapStateToProps, mapDispatchToProps)(homePage);
