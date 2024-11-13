const useShare = () => {
  const shareContent = async ({ title, text, url }) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || "Check this out!",
          text: text || "",
          url: url || window.location.href,
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return shareContent;
};

export default useShare;
