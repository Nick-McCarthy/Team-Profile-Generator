const Engineer = require('./classes/engineer');
const Intern = require('./classes/intern');
const Manager = require('./classes/manager');

describe('Engineer', () => {
  it('should create an instance of Engineer', () => {
    const engineer = new Engineer('John Doe', '1', 'johndoe@example.com', 'johndoe');
    expect(engineer).toBeInstanceOf(Engineer);
  });

  it('should return the correct name', () => {
    const engineer = new Engineer('John Doe', '1', 'johndoe@example.com', 'johndoe');
    expect(engineer.getName()).toEqual('John Doe');
  });

  it('should return the correct id', () => {
    const engineer = new Engineer('John Doe', '1', 'johndoe@example.com', 'johndoe');
    expect(engineer.getId()).toEqual('1');
  });

  it('should return the correct email', () => {
    const engineer = new Engineer('John Doe', '1', 'johndoe@example.com', 'johndoe');
    expect(engineer.getEmail()).toEqual('johndoe@example.com');
  });

  it('should return the correct gitHub username', () => {
    const engineer = new Engineer('John Doe', '1', 'johndoe@example.com', 'johndoe');
    expect(engineer.getGitHub()).toEqual('johndoe');
  });
});

describe('Intern', () => {
  it('should create an instance of Intern', () => {
    const intern = new Intern('Jane Doe', '2', 'janedoe@example.com', 'Harvard');
    expect(intern).toBeInstanceOf(Intern);
  });

  it('should return the correct name', () => {
    const intern = new Intern('Jane Doe', '2', 'janedoe@example.com', 'Harvard');
    expect(intern.getName()).toEqual('Jane Doe');
  });

  it('should return the correct id', () => {
    const intern = new Intern('Jane Doe', '2', 'janedoe@example.com', 'Harvest');
    expect(intern.getId()).toEqual('2');
  });

  it('should return the correct email', () => {
    const intern = new Intern('Jane Doe', '2', 'janedoe@example.com', 'Harvest');
    expect(intern.getEmail()).toEqual('janedoe@example.com');
  });

  it('should return the correct school', () => {
    const intern = new Intern('Jane Doe', '2', 'janedoe@example.com', 'Harvest');
    expect(intern.getSchool()).toEqual('Harvest');
  });
});

describe('Manager', () => {
    it('should create an instance of manager', () => {
      const manager = new Manager('Jane Doe', '2', 'janedoe@example.com', 'Harvard');
      expect(manager).toBeInstanceOf(Manager);
    });
  
    it('should return the correct name', () => {
      const intern = new Intern('Jane Doe', '2', 'janedoe@example.com', 'Harvard');
      expect(intern.getName()).toEqual('Jane Doe');
    });
  
    it('should return the correct id', () => {
      const intern = new Intern('Jane Doe', '2', 'janedoe@example.com', 'Harvest');
      expect(intern.getId()).toEqual('2');
    });
  
    it('should return the correct email', () => {
      const intern = new Intern('Jane Doe', '2', 'janedoe@example.com', 'Harvest');
      expect(intern.getEmail()).toEqual('janedoe@example.com');
    });
  
    it('should return the correct phone number', () => {
      const intern = new Intern('Jane Doe', '2', 'janedoe@example.com', '3214569876');
      expect(intern.getSchool()).toEqual('3214569876');
    });
  });