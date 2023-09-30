import axios from "axios";

const BASE_URL = "http://localhost:4000/api/";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU3YTE0NDhiOWY3MDBmZDQxNjY3OCIsImlhdCI6MTY4NDEyOTU2NSwiZXhwIjoxNjg2NzIxNTY1fQ.TOeGPFuRXvNujbRmnlm8WbenHNB3f5yP7WdnBfP7ZSM'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${token}` }
});