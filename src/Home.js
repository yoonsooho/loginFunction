import React from "react";

const Home = ({ result }) => {
  console.log(result);

  return (
    <div>
      {result.isLoading && <div>로딩중</div>}
      {result.error && <div>에러</div>}
      {result.data && (
        <div>
          {/* <div>{result.data.products[0].id}</div> */}
          {/* <div>{result.data.email}</div> */}
          {result.data.products.map((data) => {
            return (
              <div key={data.id}>
                <div>이름: {data.title}</div>
                <div>설명: {data.description}</div>
                {/* <img
                  src={data.images[0]}
                  alt="이미지"
                  style={{ width: "100px" }}
                ></img> */}
                {data.images.map((img, i) => {
                  return (
                    <div key={img}>
                      {
                        <img
                          src={data.images[0]}
                          alt="이미지"
                          style={{ width: "100px" }}
                        ></img>
                      }
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
