import Head from "next/head";
import Image from "next/image";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import { useState } from "react";
import {setInfo} from '../redux'
import { connect } from "react-redux";

function Home(props) {
  const {setInfo} = props;

  const [newName, setnewName] = useState("");
  const router = useRouter();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const handleLogin = () => {
    setInfo(newName);
    router.push("/beranda")

  };
  const handleInput =(e) =>{
    setnewName(e.target.value);
  }
  return (
    <>
      <div>
        {isDesktopOrLaptop && (
          <Layout pageTitle="Home">
            <Container style={{ marginTop: "5vh" }}>
              <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                  <div className="text-center position-static">
                    <Image
                      src="/icons/icon-512x512.png"
                      width="512"
                      height="512"
                      className="rounded "
                    />
                  </div>
                </Col>
                <Col>
                  <div>
                    <Card
                      style={{ width: "18rem" }}
                      className="p-3 mx-auto mt-5"
                    >
                      <div>
                        <h1>Opinia</h1>
                      </div>
                      <div>
                        <h3>Inspiring and Fun!</h3>
                      </div>
                      {/* <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="d-flex justify-content-between">
                          <Button variant="primary" type="submit">
                            Masuk
                          </Button>

                          <Button
                            variant="outline-primary"
                            type="submit"
                            style={{ border: "none" }}
                            onClick={handleLogin}
                          >
                            Lupa kata sandi?
                          </Button>
                        </div>
                      </Form> */}
                      <Form >
                        <Form.Group>
                          <Form.Control
                            type="email"
                            placeholder="Masukkan nama email"
                            value={newName}
                            onChange={handleInput}
                            required
                          />
                        </Form.Group>
                        <div className="text-center mt-2">
                          <Button onClick={handleLogin}>Masuk</Button> 
                        </div>
                      </Form>
                      <hr />
                      <div className="text-center">
                        <p>
                          Belum punya akun? <span>Daftar</span>
                        </p>
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </Layout>
        )}
        {isTabletOrMobile && (
          <Layout pageTitle="Home">
            <Container style={{ marginTop: "5vh" }}>
              <Row className="justify-content-md-center">
                <Col xs={12} md={8}>
                  <div className="text-center position-fixed">
                    <Image
                      src="/icons/icon-512x512.png"
                      width="512"
                      height="512"
                      className="rounded "
                    />
                  </div>
                </Col>
                <Col>
                  <div>
                    <Card
                      style={{ width: "18rem" }}
                      className="p-3 mx-auto mt-5"
                    >
                      <div>
                        <h1>Opinia</h1>
                      </div>
                      <div>
                        <h3>Inspiring and Fun!</h3>
                      </div>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Masukkan nama email"
                            value={newName}
                            onChange={handleInput}
                            required
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="d-flex justify-content-between">
                          <Button variant="primary" type="button" onClick={handleLogin}>
                            Masuk
                          </Button>

                          <Button
                            variant="outline-primary"
                            style={{ border: "none" }}
                            onClick={()=>console.log("lupa kata sandi")}
                          >
                            Lupa kata sandi?
                          </Button>
                        </div>
                      </Form>
                      <hr />
                      <div className="text-center">
                        <p>
                          Belum punya akun? <span>Daftar</span>
                        </p>
                      </div>
                    </Card>
                  </div>
                </Col>
              </Row>
            </Container>
          </Layout>
        )}
      </div>
    </>
  );
}

const mapDispatchToProps={
  setInfo,
}

export default connect(null, mapDispatchToProps)(Home);
