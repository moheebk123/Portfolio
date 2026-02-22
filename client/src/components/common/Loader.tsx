import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-12 h-12 border-4 border-t-transparent border-white rounded-full"
      />
      <span className="ml-4 text-white text-lg">Loading...</span>
    </div>
  );
};

export default Loader;
