import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { chat, getUser } from "../../api";
import { historyActions, userActions } from "../../store";
import send from "../../assets/img/chat/send.png";

type ChatMessage = {
  type: "user" | "ai";
  message: string;
};

const Chat = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoadingChat, setIsLoadingChat] = useState<boolean>(true);
  const [isLoadingChatResponse, setIsLoadingChatResponse] =
    useState<boolean>(false);

  const questionRef = useRef(null);

  const history: ChatMessage[] = useSelector((state: any) => state.history);
  const user: number = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const sendQuestion = useCallback(async (e) => {
    e.preventDefault();
    const question = questionRef.current.value;
    if (!question) return;
    dispatch(
      historyActions.addHistory({
        type: "user",
        message: question,
      }),
    );
    setIsLoadingChatResponse(true);
    const res = await chat({ userId: user, question });
    if (res.answer) {
      setIsLoadingChatResponse(false);
      dispatch(
        historyActions.addHistory({
          type: "ai",
          message: res.answer,
        }),
      );
    }
    questionRef.current.value = "";
  }, [dispatch, user]);

  useEffect(() => {
    async function loadUser() {
      const res = await getUser();
      if (res.userId) dispatch(userActions.setUser(res.userId));
      if (res.history.length) dispatch(historyActions.setHistory(res.history));
      setIsLoadingChat(false);
    }
    if (isLoadingChat) {
      loadUser();
    }
  }, [isLoadingChat, dispatch]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-10 rounded-full bg-blue-600 text-white px-5 py-3 shadow-lg hover:bg-blue-700 transition"
      >
        💬 Chat
      </button>

      {/* Chat Box */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-10 left-4 sm:left-auto sm:right-6 z-10 min-w-75 w-[90vw] sm:w-95 bg-gray-100 rounded-2xl shadow-2xl flex flex-col overflow-hidden h-full max-h-150"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white shadow-lg border-b border-b-gray-300 rounded-b-lg">
              <h3 className="font-semibold text-gray-800">
                Ask about my resume
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3">

                {isLoadingChat && (<p className="h-full flex justify-center items-center font-semibold">
                  ⏳ Loading chats...
                  <br />
                  It will take a while to load be patient.
                  </p>)}

                {history.length === 0 ? <p className="text-center text-sm text-gray-500">
                    Ask me anything about my experience 👋
                  </p> : history.map((chat, index) => {
                  const isUser = chat.type === "user";

                  return (
                    <div
                      key={index}
                      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-xl px-4 py-2 text-sm leading-relaxed
                        ${
                          isUser
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 text-blue-700 border border-blue-300"
                        }`}
                      >
                        {chat.message}
                      </div>
                    </div>
                  );
                })}
                {isLoadingChatResponse && (
                  <div className="w-fit rounded-xl px-4 py-2 text-sm leading-relaxed border border-blue-500 bg-blue-50">
                    🔵🔵🔵
                  </div>
                )}
              </div>

            <form onSubmit={sendQuestion} className="p-3 bg-white shadow-2xl rounded-t-xl border-t border-t-gray-300 flex gap-3">
              <input
                type="text"
                placeholder="Type your question..."
                ref={questionRef}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit">
              <img
                className="border w-12 p-1 rounded-full border-blue-600 cursor-pointer"
                src={send}
                alt="Send"
                />
                </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chat;
