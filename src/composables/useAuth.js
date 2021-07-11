const useAuth = () => {
  const baseUri = "http://localhost:8081/api/v1/members";

  const signUp = async (data) => {
    return await fetch(baseUri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err.message));
  };

  const signIn = async (data) => {
    return await fetch(`${baseUri}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err.message));
  };

  return {
    signUp,
    signIn,
  };
};
export default useAuth;
