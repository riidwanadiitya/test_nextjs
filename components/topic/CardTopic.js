import Image from "next/image";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";

export default function CardTopic(props) {
    const {dataUser} = props;
  return (
    <div>
      <Card className="mt-3" style={{border:"none"}}>
        <Card.Body>
          <h3 className="text-center text-white p-1" style={{backgroundColor:'teal'}}>Topik </h3>
          {dataUser.map((data) => {
            return (
              <div key={data.id} className="d-inline-block">
                  <Button variant="outline-primary" style={{marginRight:5}}>{data.name}</Button>
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
}
