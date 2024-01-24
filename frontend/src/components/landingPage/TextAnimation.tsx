import { motion } from "framer-motion";
import Google from "./Google";

export default function TextAnimation() {
  const slogans = {
    "Connect with Ping -": "Swift Messaging Starts Here!",
    "Let's Ping -": "Sparking Instant Conversations!",
    "Chat Now with Ping -": "Let's Share Moments!",
    "Experience Let's Ping -": "Where Connections Begin!",
    "Let's Chat Faster -": "Ping Delivers Instantly!",
    "Join the Conversation -": "Let's Ping Together!",
    "Let's Communicate -": "Ping Brings Instant Joy!",
    "Start Talking Now -": "Let's Ping and Connect!",
    "Elevate Your Chats -": "Let's Ping to New Heights!",
    "Let's Begin -": "Ping for Instant Connections!",
  };

  const colorGradient = [
    "bg-red-300",
    "bg-green-300",
    "bg-blue-300",
    "bg-yellow-300",
    "bg-orange-300",
    "bg-purple-300",
    "bg-emerald-300",
    "bg-teal-300",
  ];

  const sloganKeys = Object.keys(slogans);

  const randomKey = sloganKeys[Math.floor(Math.random() * sloganKeys.length)];
  const randomColor =
    colorGradient[Math.floor(Math.random() * colorGradient.length)];

  const words = randomKey.split(" ");
  localStorage.setItem("appTheme" , randomColor)

  return (
    <>
      <div className="flex justify-between flex-col sm:flex-row p-3">
        <div className="">
          <h1 className="slogan-text text-6xl font-extrabold leading-tight sm:text-8xl">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className={
                  word.toLowerCase() === "ping"
                    ? `${randomColor} inline-block bg-clip-text text-transparent`
                    : ""
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index / 10,
                  ease: "easeInOut",
                }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </h1>
          <h1 className="slogan-text text-5xl font-extrabold leading-tight sm:text-7xl">
            {slogans[randomKey as keyof typeof slogans]
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  className={
                    word.toLowerCase() === "ping"
                      ? `${randomColor} inline-block bg-clip-text text-transparent`
                      : ""
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: index / 10,
                    ease: "easeInOut",
                  }}
                >
                  {word}{" "}
                </motion.span>
              ))}
          </h1>
        </div>
        <div className="order-first sm:order-last flex justify-end">
          <div>
            <Google/>
          </div>
        </div>
      </div>
    </>
  );
}
