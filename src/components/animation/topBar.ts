const topBarAnimation = {
  normal: {
    backdropFilter: "blur(0px)",
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderBottomWidth: 0,
    transition: { duration: 0.3 },
  },
  blur: {
    backdropFilter: "blur(15px)",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderBottomWidth: 1,
    transition: { duration: 0.3 },
  },
};

export default topBarAnimation;
