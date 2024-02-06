export const withLogin = (loginData, role) => {
  return (values, navigate, authContext, isLoggedIn) => {
    const user = loginData.find(
      (user) => user.email === values.email && user.password === values.password
    );

    try {
      if (user && role === "Freelancer") {
        authContext.login(user.id);
        authContext.firsNameSetter(user.name);
        navigate("/freelancer");
      } else if (user && role === "Employer") {
        navigate("/employer");
      }
    } catch (error) {
      console.log("Unable to login", error);
    }
    console.log("isLoggedin from loginHOC", isLoggedIn);
  };
};
