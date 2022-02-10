import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import * as mongoose from 'mongoose';

import { AppModule } from '../../src/app.module';
import { userSignupRequestSuccess } from '../mocks/user-signup-request-success.mock';
import {
  userLoginRequestFailWrongPw,
  userLoginRequestFailWrongEmail,
} from '../mocks/user-login-request-fail.mock';

describe('Users Sign In (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    app.close();
  });

  /**
   * @Given firstName, email and password
   * @When
   * @Then returns created user
   */
  test('/auth/register (POST) - should create a valid user', (done) => {
    request(app.getHttpServer())
      .post('/auth/register')
      .send(userSignupRequestSuccess)
      .expect(201);
    done();
  });

  /**
   * @Given email and password
   * @When email is wrong
   * @Then returns error
   */
   test('/auth/login (POST) - should not create a token for invalid email', (done) => {
    request(app.getHttpServer())
      .post('/auth/login')
      .send(userLoginRequestFailWrongEmail)
      .expect(401)
      .expect({
        message: 'user_search_by_credentials_not_found',
        data: null,
        errors: null,
      });
    done();
  });

  test('/auth/login (POST) - should not create a token for invalid password', (done) => {
    request(app.getHttpServer())
      .post('/auth/login')
      .send(userLoginRequestFailWrongPw)
      .expect(401)
      .expect({
        message: 'user_search_by_credentials_not_match',
        data: null,
        errors: null,
      });
      done();
  });

  test('/auth/login (POST) - should not create a token for empty body', (done) => {
    request(app.getHttpServer())
      .post('/auth/login')
      .send()
      .expect(401)
      .expect({
        message: 'user_search_by_credentials_not_found',
        data: null,
        errors: null,
      });
    done();
  });

  test('/auth/login (POST) - should not create a token for string value in body', (done) => {
    request(app.getHttpServer())
      .post('/auth/login')
      .send(userSignupRequestSuccess.email)
      .expect(401)
      .expect({
        message: 'user_search_by_credentials_not_found',
        data: null,
        errors: null,
      });
    done();
  });

  test('/auth/login (POST) - should create a token for valid credentials', (done) => {
    request(app.getHttpServer())
      .post('/auth/login')
      .send(userSignupRequestSuccess)
      .expect(201)
      .expect((res) => {
        res.body.data.user.id = 'fake_value';
        res.body.data.token = 'fake_value';
      })
      .expect({
        message: 'token_create_success',
        data: {
          user: {
            role: 'user',
            email: userSignupRequestSuccess.email,
            id: 'fake_value'
          },
          token: 'fake_value'
        },
        errors: null
      });
    done();
  });
});