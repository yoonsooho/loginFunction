import React from "react";

const Bubble = () => {
  return (
    <div
      onClick={() => {
        alert("상위 요소도 클릭됨");
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          alert("버블링 버튼 클릭");
        }}
      >
        버블링 확인용
      </div>
    </div>
  );
};

export default Bubble;
