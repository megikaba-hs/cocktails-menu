import React from "react";

interface FirstPageProps {
  imageUrl: string;
}

const FirstPage: React.FC<FirstPageProps> = ({ imageUrl }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <img src={imageUrl} className="w-full h-auto" />
    </div>
  );
};

export default FirstPage;
