import Image from "next/image";
import { useEffect } from "react";
import { Card } from "react-bootstrap";

export default function CardTrending(props) {
    const {dataUser} = props;
  return (
    <div>
      <Card>
        <Card.Body>
          <h3 className="text-center text-white p-1" style={{backgroundColor:'teal'}}>Trending </h3>
          {dataUser.slice(0, 5).map((data) => {
            return (
              <div key={data.id}>
                <Image
                  src="/icons/icon-48x48.png"
                  width={48}
                  height={48}
                  className="img-thumbnail"
                />
                <div className="d-inline-block" style={{ marginLeft: 10 }}>
                  <h5>{data.username}</h5>
                  <p>{data.name}</p>
                </div>
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
}
