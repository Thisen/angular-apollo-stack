import { expect } from 'chai';
import * as sinon from 'sinon';
import { User as db } from '../../../connectors';
import { IUser, User } from '../../../models';

describe('Models.User', () => {
  let sandbox: sinon.SinonSandbox;
  let clock: sinon.SinonFakeTimers;
  let today: Date;
  let user: IUser;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    user = {
      name: 'test',
    };
  });

  afterEach(() => {
    sandbox.restore();
    clock.restore();
  });

  describe('findById()', () => {
    it('should call findById with id', () => {
      const id = 'thisisanid';
      const spy = sandbox.spy(db, 'findById');

      User.findById(id);

      expect(spy.calledWith(id)).to.be.true;
    });
  });
});
