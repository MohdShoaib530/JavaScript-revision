function check(age) {
  if (age < 18) {
    throw new Error('Age must be 18 or above');
  }
  console.log('Access granted');
}
try {
  check(16);
} catch (error) {
  console.error(error.message);
  // Age must be 18 or above
}
