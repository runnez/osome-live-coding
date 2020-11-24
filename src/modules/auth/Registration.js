import React, { useState } from "react";
import styled from "styled-components";
import { register } from "api/auth";
import FormField from "components/FormField";

const Title = styled.h1`
  margin-bottom: 10px;
  fontWeight: 600;
`

const RegistrationStatus = {
  idle: "idle",
  submitting: "submitting",
  rejected: "rejected",
  resolved: "resolved",
};

const Registration = () => {
  const [status, setStatus] = useState(RegistrationStatus.idle);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatus(RegistrationStatus.submitting);
    setErrors({});

    register({
      name,
      password,
      email,
    })
      .then(() => setStatus(RegistrationStatus.resolved))
      .catch(({ errors }) => {
        if (errors) {
          setErrors(errors);
        }
        setStatus(RegistrationStatus.idle);
      });
  };

  const isSubmitting = status === RegistrationStatus.submitting;

  if (status === RegistrationStatus.resolved)
    return <div data-testid="flash">Win!</div>;

  return (
    <form onSubmit={handleSubmit}>
      <Title>Registration</Title>
      <FormField
        label="Name"
        value={name}
        testId="name"
        onChange={setName}
        errors={errors.name}
      />
      <FormField
        label="Email"
        testId="email"
        type="email"
        value={email}
        onChange={setEmail}
        errors={errors.email}
      />
      <FormField
        testId="password"
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        errors={errors.password}
      />
      <button data-testid="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Registration;
