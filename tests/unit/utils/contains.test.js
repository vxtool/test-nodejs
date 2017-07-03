const expect = require('chai').expect;
const utils = require('../../../utils');

describe('Contains', () => {
  describe('inArray', () => {
    const rule = ['CREATED', 'WAITING'];

    it('it should have parameters array as ARRAY and it as ARRAY/STRING', () => {
      expect(utils.contains.inArray()).to.be.false;
      expect(utils.contains.inArray([])).to.be.false;
      expect(utils.contains.inArray([], null)).to.be.false;
      expect(utils.contains.inArray(undefined, 'CREATED')).to.be.false;
    });

    it('it should have parameters array as ARRAY and it as ARRAY', () => {
      const array = ['CREATED', 'PAUSED'];
      const validArray = ['CREATED'];
      const invalidArray = ['PAUSED'];
      expect(utils.contains.inArray(rule, rule)).to.be.true;
      expect(utils.contains.inArray(rule, array)).to.be.true;
      expect(utils.contains.inArray(rule, validArray)).to.be.true;
      expect(utils.contains.inArray(rule, invalidArray)).to.be.false;
    });

    it('it should have parameters array as ARRAY and it as STRING', () => {
      const validString = 'CREATED';
      const invalidString = 'PAUSED';
      expect(utils.contains.inArray(rule, validString)).to.be.true;
      expect(utils.contains.inArray(rule, invalidString)).to.be.false;
    });
  });
});
