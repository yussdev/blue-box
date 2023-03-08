import { Form, Row, Button } from "react-bootstrap";

export default function ReportPage() {
  return (
    <>
      <Row md="2" className="justify-content-md-center">
        <Form className="text-center">
          <Form.Group className="mb-3" controlId="reportValue">
            <Form.Label>Enter a value between 1 and 10</Form.Label>
            <Form.Control type="text" placeholder="Value" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Attach a JPG image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Button className="mx-auto" variant="primary" type="submit">
            {" "}
            Generate Report
          </Button>
        </Form>
      </Row>
      <Row className="flex-grow-1  mx-1">
        <iframe className="border bg-white my-5"  src="" frameborder="0"></iframe>
      </Row>
    </>
  );
}
