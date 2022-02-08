import * as request from 'supertest';
import * as mongoose from 'mongoose';
import { TestingModule, Test } from '@nestjs/testing';

import { AppModule } from '../../src/app.module';
import {
  userSignupRequestFailInvalidEmail,
  userSignupRequestFailNoPw,
  userSignupRequestFailShortPw
} from '../mocks/user-signup-request-fail.mock';
import { userSignupRequestSuccess } from '../mocks/user-signup-request-success.mock';

describe('Users Sign In (e2e)', () => {
  let app;

  afterAll(async () => {
    await mongoose.connect(process.env.MONGO_DSN, { useNewUrlParser: true, useUnifiedTopology: true });
    await mongoose.connection.dropDatabase();
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    app.close();
  });

  it('/auth/register (POST) - should not create user without request body', (done) => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send()
      .expect(412)
      .expect((res) => {
        res.body.errors.email.properties = 'fake_properties';
        res.body.errors.password.properties = 'fake_properties';
      })
      .expect({
        data: null,
        message: 'user_create_precondition_failed',
        errors: {
          password: {
            message: 'Password can not be empty',
            name: 'ValidatorError',
            properties: 'fake_properties',
            kind: 'required',
            path: 'password',
          },
          email: {
            message: 'Email can not be empty',
            name: 'ValidatorError',
            properties: 'fake_properties',
            kind: 'required',
            path: 'email',
          },
        },
      })
      .end(done);
  });

  it('/auth/register (POST) - should not create a user if request body is string', (done) => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send('test')
      .expect((res) => {
        res.body.errors.email.properties = 'fake_properties';
        res.body.errors.password.properties = 'fake_properties';
      })
      .expect({
        data: null,
        message: 'user_create_precondition_failed',
        errors: {
          password: {
            message: 'Password can not be empty',
            name: 'ValidatorError',
            properties: 'fake_properties',
            kind: 'required',
            path: 'password',
          },
          email: {
            message: 'Email can not be empty',
            name: 'ValidatorError',
            properties: 'fake_properties',
            kind: 'required',
            path: 'email',
          },
        },
      })
      .end(done);
  });

  it('/auth/register (POST) - should not create user without password', (done) => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send(userSignupRequestFailNoPw)
      .expect(412)
      .expect((res) => {
        res.body.errors.password.properties = 'fake_properties';
      })
      .expect({
        data: null,
        message: 'user_create_precondition_failed',
        errors: {
          password: {
            message: 'Password can not be empty',
            name: 'ValidatorError',
            properties: 'fake_properties',
            kind: 'required',
            path: 'password',
          },
        },
      })
      .end(done);
  });

  it('/auth/register (POST) - should not create user if password is short', (done) => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send(userSignupRequestFailShortPw)
      .expect(412)
      .expect((res) => {
        res.body.errors.password.properties = 'fake_properties';
      })
      .expect({
        data: null,
        message: 'user_create_precondition_failed',
        errors: {
          password: {
            message: 'Password should include at least 6 chars',
            name: 'ValidatorError',
            properties: 'fake_properties',
            kind: 'minlength',
            path: 'password',
            value: userSignupRequestFailShortPw.password,
          },
        },
      })
      .end(done);
  });

  it('/auth/register (POST) - should not create user without email', (done) => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send({
        password: 'test111',
      })
      .expect(412)
      .expect((res) => {
        res.body.errors.email.properties = 'fake_properties';
      })
      .expect({
        data: null,
        message: 'user_create_precondition_failed',
        errors: {
          email: {
            message: 'Email can not be empty',
            name: 'ValidatorError',
            properties: 'fake_properties',
            kind: 'required',
            path: 'email',
          },
        },
      })
      .end(done);
  });

  it('/auth/register (POST) - should not create user with invalid email', (done) => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send(userSignupRequestFailInvalidEmail)
      .expect(412)
      .expect((res) => {
        res.body.errors.email.properties = 'fake_properties';
      })
      .expect({
        data: null,
        message: 'user_create_precondition_failed',
        errors: {
          email: {
            message: 'Email should be valid',
            name: 'ValidatorError',
            properties: 'fake_properties',
            kind: 'regexp',
            path: 'email',
            value: userSignupRequestFailInvalidEmail.email,
          },
        },
      })
      .end(done);
  });

  it('/auth/register (POST) - should create a valid user', (done) => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send(userSignupRequestSuccess)
      .expect(201)
      .expect((res) => {
        res.body.data.user.id = 'fake_value';
        res.body.data.token = 'fake_value';
      })
      .expect({
        message: 'user_create_success',
        data: {
          user: {
            role: 'user',
            email: userSignupRequestSuccess.email,
            id: 'fake_value'
          },
          token: 'fake_value'
        },
        errors: null
      })
      .end(done);
  });

  it('/auth/register (POST) - should not create user with existing email', (done) => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send(userSignupRequestSuccess)
      .expect(409)
      .expect({
        message: 'user_create_conflict',
        data: null,
        errors: {
          email: {
            message: 'Email already exists',
            path: 'email',
          },
        },
      })
      .end(done);
  });
});