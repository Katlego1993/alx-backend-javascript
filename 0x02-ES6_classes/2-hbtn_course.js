export default class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the types of attributes
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new Error('Invalid attribute types');
    }

    // Store attributes with underscores
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and setter for the 'name' attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Invalid type for name');
    }
    this._name = newName;
  }

  // Getter and setter for the 'length' attribute
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new Error('Invalid type for length');
    }
    this._length = newLength;
  }

  // Getter and setter for the 'students' attribute
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new Error('Invalid type for students');
    }
    this._students = newStudents;
  }
}
