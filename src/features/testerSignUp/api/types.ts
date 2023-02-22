import React from "react";

export type TesterSignupFormType = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  password: string;
  confirmPassword: string;
};

export type CountryData = {
  label: string | React.ReactNode;
  value: string;
};
