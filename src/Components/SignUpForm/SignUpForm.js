import React, { Component } from 'react';
import shortid from 'shortid';
import {
  Form,
  Box,
  InputText,
  Checkbox,
  Label,
  Button,
} from './SignUpFormStiles';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
  message: '',
};

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

class SignUpForm extends Component {
  static defaultProps = {};

  state = {
    ...INITIAL_STATE,
  };

  id = {
    login: shortid.generate(),
    email: shortid.generate(),
    password: shortid.generate(),
    agreed: shortid.generate(),
    genderMale: shortid.generate(),
    genderFemale: shortid.generate(),
    age: shortid.generate(),
    message: shortid.generate(),
  };

  changeHandler = event => {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender, age, message } = this.state;

    return (
      <Form onSubmit={this.submitHandler}>
        <Box>
          <Label htmlFor={this.id.login}>Name</Label>
          <InputText
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            id={this.id.login}
            onChange={this.changeHandler}
          ></InputText>
        </Box>

        <Box>
          <Label htmlFor={this.id.email}>Email</Label>
          <InputText
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            id={this.id.email}
            onChange={this.changeHandler}
          ></InputText>
        </Box>

        <Box>
          <Label htmlFor={this.id.password}>Password</Label>
          <InputText
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            id={this.id.password}
            onChange={this.changeHandler}
          ></InputText>
        </Box>

        <Box radio>
          <Label as="div">Choose your gender</Label>
          <div>
            <input
              type="radio"
              checked={gender === Gender.MALE}
              value={Gender.MALE}
              name="gender"
              id={this.id.genderMale}
              onChange={this.changeHandler}
            ></input>
            <Label htmlFor={this.id.genderMale}>{Gender.MALE}</Label>

            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              value={Gender.FEMALE}
              name="gender"
              id={this.id.genderFemale}
              onChange={this.changeHandler}
            ></input>
            <Label htmlFor={this.id.genderFemale}>{Gender.FEMALE}</Label>
          </div>
        </Box>

        <Box>
          <Label htmlFor={this.id.age}>Choose your age</Label>
          <select
            name="age"
            value={age}
            onChange={this.changeHandler}
            id={this.id.age}
          >
            <option value="" disabled>
              {' '}
              ...{' '}
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </Box>

        <Box>
          <InputText
            as="textarea"
            name="message"
            value={message}
            onChange={this.changeHandler}
            id={this.id.message}
            placeholder="Enter your message"
          ></InputText>
        </Box>

        <Box>
          <Label checkbox checked={this.state.agreed} htmlFor={this.id.agreed}>
            Agree to terms
          </Label>
          <Checkbox
            type="checkbox"
            checked={agreed}
            name="agreed"
            id={this.id.agreed}
            onChange={this.changeHandler}
          ></Checkbox>
        </Box>

        <Button type="submit" disabled={!agreed}>
          Sign up as {login}
        </Button>
      </Form>
    );
  }
}

export default SignUpForm;
