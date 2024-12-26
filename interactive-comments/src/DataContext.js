import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    // Try to get data from localStorage
    const savedData = localStorage.getItem("commentsData");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [userScores, setUserScores] = useState(() => {
    // Try to get user scores from localStorage
    const savedScores = localStorage.getItem("userScores");
    return savedScores ? JSON.parse(savedScores) : {};
  });
  useEffect(() => {
    // Fetch data from an API or local file if localStorage is empty
    if (data.length === 0) {
      const fetchData = async () => {
        try {
          const response = await fetch("/data.json"); // Replace with your data source
          const result = await response.json();
          setData(result["comments"]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [data]);

  useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem("commentsData", JSON.stringify(data));
  }, [data]);

  const deleteCommentById = (id) => {
    const updatedData = data
      .filter((comment) => comment.id !== id)
      .map((comment) => ({
        ...comment,
        replies: deleteCommentByIdRecursive(comment.replies || [], id),
      }));
    setData(updatedData);
  };

  const deleteCommentByIdRecursive = (comments, id) => {
    return comments
      .filter((comment) => comment.id !== id)
      .map((comment) => ({
        ...comment,
        replies: deleteCommentByIdRecursive(comment.replies || [], id),
      }));
  };

  const addReply = (id, reply) => {
    console.log("Added reply:", reply);
    console.log("To comment with id:", id);
    if (id === 0) {
      console.log("Added reply to main comment");
      const updatedData = [...data, reply];
      setData(updatedData);
    } else {
      const updatedData = data.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            replies: [...(comment.replies || []), reply],
          };
        }
        return {
          ...comment,
          replies: addReplyRecursive(comment.replies || [], id, reply),
        };
      });
      console.log("Added reply to nested comment");
      setData(updatedData);
    }
  };

  const addReplyRecursive = (comments, id, reply) => {
    return comments.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          replies: [...(comment.replies || []), reply],
        };
      }
      return {
        ...comment,
        replies: addReplyRecursive(comment.replies || [], id, reply),
      };
    });
  };

  const updateCommentById = (id, updatedContent) => {
    const updatedData = data.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          content: updatedContent,
        };
      }
      return {
        ...comment,
        replies: updateCommentByIdRecursive(
          comment.replies || [],
          id,
          updatedContent
        ),
      };
    });
    setData(updatedData);
  };

  const updateCommentByIdRecursive = (comments, id, updatedContent) => {
    return comments.map((comment) => {
      if (comment.id === id) {
        return {
          ...comment,
          content: updatedContent,
        };
      }
      return {
        ...comment,
        replies: updateCommentByIdRecursive(
          comment.replies || [],
          id,
          updatedContent
        ),
      };
    });
  };

  const updateScoreById = (id, scoreChange, userId) => {
    const updatedData = data.map((comment) => {
      if (comment.id === id) {
        const userScore = userScores[userId] || {};
        const commentScore = userScore[id] || 0;

        if (
          (scoreChange === 1 && commentScore < 1) ||
          (scoreChange === -1 && commentScore > -1)
        ) {
          const newScore = comment.score + scoreChange;
          const newUserScore = {
            ...userScore,
            [id]: commentScore + scoreChange,
          };
          setUserScores({ ...userScores, [userId]: newUserScore });

          return {
            ...comment,
            score: newScore,
          };
        }
      }
      return {
        ...comment,
        replies: updateScoreByIdRecursive(
          comment.replies || [],
          id,
          scoreChange,
          userId
        ),
      };
    });
    setData(updatedData);
  };

  const updateScoreByIdRecursive = (comments, id, scoreChange, userId) => {
    return comments.map((comment) => {
      if (comment.id === id) {
        const userScore = userScores[userId] || {};
        const commentScore = userScore[id] || 0;

        if (
          (scoreChange === 1 && commentScore < 1) ||
          (scoreChange === -1 && commentScore > -1)
        ) {
          const newScore = comment.score + scoreChange;
          const newUserScore = {
            ...userScore,
            [id]: commentScore + scoreChange,
          };
          setUserScores({ ...userScores, [userId]: newUserScore });

          return {
            ...comment,
            score: newScore,
          };
        }
      }
      return {
        ...comment,
        replies: updateScoreByIdRecursive(
          comment.replies || [],
          id,
          scoreChange,
          userId
        ),
      };
    });
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        deleteCommentById,
        addReply,
        updateCommentById,
        updateScoreById,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
