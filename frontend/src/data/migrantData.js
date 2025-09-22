// This object holds all the details for our user.
const migrantData = {
  name: 'Rajesh Kumar',
  age: 40,
  gender: 'Male',
  migrantId: 'MIG09920',
  dob: '10/9/1985',
  language: 'English',
  aadhar: '883845982387',
  mobile: '1234567890',
  documents: [], // This can be empty initially
  hospital: null, // This can be empty initially
  request: { type: 'Financial Assistance', status: 'pending' }
};

// We export it so other files, like App.jsx, can import it.
export default migrantData;