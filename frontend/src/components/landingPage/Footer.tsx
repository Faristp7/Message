import {motion} from 'framer-motion'

export default function Footer() {

  return (
    <div className="p-0 sm:p-3">
      <motion.div className="chat chat-start" initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
        <div className="chat-bubble">
          Hello! you Heard about Ping,
          <br />
          the new chatting app?
        </div>
      </motion.div>

      <motion.div className="chat chat-end" initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }}>
        <div className="chat-bubble">
          Absolutely! Quick login, even with Google.
          <br />
          User search is a breeze, and messages are super secure.
        </div>
      </motion.div>

      <motion.div className="chat chat-start" initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }} transition={{ delay: 4 }}>
        <div className="chat-bubble">Nice! What about navigation?</div>
      </motion.div>

      <motion.div className="chat chat-end" initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }} transition={{ delay: 5.5 }}>
        <div className="chat-bubble">
          Seamless. Plus, you can choose a theme that
          <br />
          suits your style. It's all about customization.
        </div>
      </motion.div>

      <motion.div className="chat chat-start" initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }} transition={{ delay: 6 }}>
        <div className="chat-bubble">
          Great! Checking it out now. Anything else cool?
        </div>
      </motion.div>

      <motion.div className="chat chat-end" initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }} transition={{ delay: 7 }}>
        <div className="chat-bubble">
          Oh, the simplicity is refreshing. And you can switch
          <br />
          between chats effortlessly. Ping's my go-to app now!
        </div>
      </motion.div>

      <motion.div className="chat chat-start" initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }} transition={{ delay: 8 }}>
        <div className="chat-bubble">it's Cool let me check.</div>
      </motion.div>

      <motion.div className="chat chat-end" initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }} transition={{ delay: 8.5 }}>
        <div className="chat-bubble">Okay, Bye</div>
      </motion.div>
    </div>
  );
}
