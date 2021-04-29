/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: HighligthFragment
// ====================================================

export interface HighligthFragment_background {
  __typename: "UploadFile";
  url: string;
}

export interface HighligthFragment_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface HighligthFragment {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HighligthFragment_background | null;
  floatImage: HighligthFragment_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}
