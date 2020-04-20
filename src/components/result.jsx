import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
  CardFooter,
} from "reactstrap";

const CardList = (props) => {
  const result = props.result.map((ele) => {
    return (
      <Col
        className="col-auto md-4 mb-4 d-flex align-item-stretch"
        key={ele.trackId}
      >
        <Card>
          <CardImg
            top
            width="100%"
            height="40%"
            src={ele.artworkUrl100}
            alt="Album Art"
          />
          <CardBody inverse color="primary">
            <CardTitle>
              <b>Song</b> : {ele.trackName}
            </CardTitle>
            <CardSubtitle>
              <b>Album</b> : {ele.collectionName}
            </CardSubtitle>
            <CardText>
              <b>Artist</b> : {ele.artistName}
            </CardText>
          </CardBody>
          <CardFooter>
            <Button href={ele.previewUrl} target="_blank" color="info" block>
              Preview
            </Button>
            <Button
              href={ele.collectionViewUrl}
              target="_blank"
              color="info"
              block
            >
              View Album
            </Button>
            <Button href={ele.artistViewUrl} target="_blank" color="info" block>
              View Artist
            </Button>
          </CardFooter>
        </Card>
      </Col>
    );
  });
  return (
    <Container>
      <Row md="4">{result}</Row>
    </Container>
  );
};

export default CardList;
