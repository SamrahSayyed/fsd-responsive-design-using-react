import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, ProgressBar, Card } from 'react-bootstrap';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Navigation Logic
  const nextStep = () => {
  if (formData.firstName && formData.lastName) {
    setStep((prev) => prev + 1);
  } else {
    alert("Please fill in all required fields!");
  }
};
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Data:", formData);
    alert("Form Submitted!");
  };

  // Calculate Progress Percentage
  const progress = (step / 3) * 100;

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={7}>
          <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-4" />
          
          <Card className="p-4 shadow">
            <Form onSubmit={handleSubmit}>
              
              {/* STEP 1: Personal Info */}
              {step === 1 && (
                <div className="fade-in">
                  <h4>Step 1: Personal Information</h4>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange} 
                      required 
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange} 
                      required 
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={nextStep}>Next</Button>
                </div>
              )}

              {/* STEP 2: Address */}
              {step === 2 && (
                <div className="fade-in">
                  <h4>Step 2: Address Details</h4>
                  <Form.Group className="mb-3">
                    <Form.Label>Street Address</Form.Label>
                    <Form.Control 
                      name="address" 
                      value={formData.address} 
                      onChange={handleChange} 
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control name="city" value={formData.city} onChange={handleChange} />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>ZIP</Form.Label>
                        <Form.Control name="zip" value={formData.zip} onChange={handleChange} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={prevStep}>Back</Button>
                    <Button variant="primary" onClick={nextStep}>Review</Button>
                  </div>
                </div>
              )}

              {/* STEP 3: Review & Submit */}
              {step === 3 && (
                <div className="fade-in">
                  <h4>Step 3: Review Your Details</h4>
                  <ul className="list-group mb-4">
                    <li className="list-group-item"><strong>Name:</strong> {formData.firstName} {formData.lastName}</li>
                    <li className="list-group-item"><strong>Address:</strong> {formData.address}, {formData.city} {formData.zip}</li>
                  </ul>
                  <div className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={prevStep}>Back</Button>
                    <Button variant="success" type="submit">Submit</Button>
                  </div>
                </div>
              )}
              
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MultiStepForm;