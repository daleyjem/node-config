// Common configuration parameters
module.exports = {
  TestModule: {
    parm1:"value1",
    arr1: ["arrValue1"],
    buffer: Buffer.from([1,2,3,4,5]),
  },
  Customers: {
    dbHost:'base',
    dbName:'from_default_js',
    dbPort: 'this_is_overridden',
    get dbString() {
      return '' + this.dbName + ':' + this.dbPort;
    },
    get random() {
      return Math.random();
    }
  },
  EnvOverride: {
    parm_number_1: "from_default_js",
    parm2: 22
  },
  MuteThis: 'hello',
  get customerDbPort() {
    return '' + this.Customers.dbPort;
  },
  SomeMore: {
    regexp1: /This is a Regexp/g,
    regexp2: /This is another/g,
    date1: new Date('2024-12-18T04:54:56.118Z'),
  },

};
