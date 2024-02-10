export const withLogin = (loginData, role) => {
  return (values, navigate, authContext, isLoggedIn, setError) => {
    try {
      const user = loginData.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (user && role === "Freelancer") {
        authContext.login(user.id);
        authContext.userDataSetter(user.name, user.email, user.phone, role);
        navigate("/freelancerjobs");
      } else if (user && role === "Employer") {
        authContext.login(user.id);
        authContext.userDataSetter(user.name, user.email, user.phone, role);
        navigate("/employerprofile");
      } else {
        throw new Error("Incorrect email/password");
      }
    } catch (error) {
      setError("Incorrect email/password");
      console.log("Unable to login", error);
    }
    console.log("isLoggedin from loginHOC", isLoggedIn);
  };
};
