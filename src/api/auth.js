export const register = (form) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Object.entries(form).every(([, value]) => value.includes('hack'))) {
        resolve()
        return
      }

      reject({
        errors: {
          email: ["Invalid value", "Too short"],
          password: ["Invalid value"],
          name: ["Too short"],
        },
      });
    }, 2000);
  });
