import Image from "next/image";
import Link from "next/link";
import { Button, Container, Navbar } from "react-bootstrap";

export default function HeaderComp() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <div className="d-inline-block align-top">
              <span style={{ marginRight: 10 }}>...</span>
            </div>
            <Image src="/icons/icon-512x512.png" width="36" height="36" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Button variant="outline" style={{marginRight:10}}>
        <Link href="/">Home</Link>
      </Button>
      <Button variant="outline" style={{marginRight:10}}>
        <Link href="/profile">Profile</Link>
      </Button>
      <Button variant="outline" style={{marginRight:10}}>
        <Link href="/beranda">Beranda</Link>
      </Button>
      {/* <ul>
        <div>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/beranda">Beranda</Link>
          </li>
        </div>
      </ul> */}
    </div>
  );
}
