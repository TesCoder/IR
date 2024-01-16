const { ENDATO_API_KEY_NAME, ENDATO_API_KEY_PASSWORD } = process.env;

export const getAddress = async ({ fname, lname, phone, email }) => {
  const body = {
    FirstName: fname,
    LastName: lname,
  };

  if (!phone && !email) {
    return null;
  }

  if (phone) {
    body.Phone = phone;
  }

  if (email) {
    body.Email = email;
  }

  const response = await fetch("https://devapi.endato.com/Contact/Enrich", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "galaxy-search-type": "DevAPIContactEnrich",
      "galaxy-ap-name": ENDATO_API_KEY_NAME,
      "galaxy-ap-password": ENDATO_API_KEY_PASSWORD,
    },
    body: JSON.stringify(body),
  });

  const res = await response.json();

  console.log("Request Body:", body);
  console.dir(res, { depth: null });
  return res.person?.addresses[0];
};
