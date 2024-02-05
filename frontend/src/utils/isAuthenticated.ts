export const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., by checking for a token in localStorage)
  return localStorage.getItem("jwtToken") !== null;
};
