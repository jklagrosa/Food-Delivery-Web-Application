import styles from "../styles/FAQ.module.scss";
import { Container, Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <>
      <div className={styles.Wrapper} id="faq">
        <Container fluid="lg" className="p-0">
          <h1>
            <span>Frequently</span> Asked Questions
          </h1>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <p className={styles._faq_header}>
                  Do you have a minimum order to deliver?
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <p className={styles._faq_para}>
                  There&apos;s no minimum but you can make the best out of the
                  delivery fee by ordering more at a time.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <p className={styles._faq_header}>
                  Can I just walk in to at your office to order?
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <p className={styles._faq_para}>
                  Yes you can, but if you have specific products in mind, better
                  to at least call for availability.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <p className={styles._faq_header}>
                  What are your business hours?
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <p className={styles._faq_para}>
                  Our office is open between 7am til 7pm, from Monday to
                  Saturday. We&apos;re closed during Sundays and holidays,
                  sorry!
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <p className={styles._faq_header}>
                  What if I want my items right away?
                </p>
              </Accordion.Header>
              <Accordion.Body>
                <p className={styles._faq_para}>
                  We currently removed the Same day delivery option on our site
                  because of the situation. You may choose the Pick up option
                  though and book your own Delivery.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </>
  );
};

export default FAQ;
