import axios from "axios";

export default function Home() {
  const handleSendingEmail = async () => {
    try {
      const payload = {
        user: "Mr Nobody",
        userMail: "nobody@gmail.com",
        message: "lorem ipsum",
      };

      const { data } = await axios.post("api/sendEmail", payload);
      console.log("data", data);
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <>
      <button onClick={handleSendingEmail}>send email</button>
    </>
  );
}
