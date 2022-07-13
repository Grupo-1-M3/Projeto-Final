import styled from "styled-components";
export const Container = styled.div`
  min-width: 90vw;
  min-height: 90vh;
  gap: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
  border: red;
  color: #fff h1 {
    text-align: center;
  }
`;
export const Card = styled.li`
  max-width: 400px;
  width: 100%;
  height: 350px;
  border: 1px solid var(--color-primary-dark);
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: justify;
  :hover {
    cursor: pointer;
  }
  h3 {
    color: #fff;
    width: 100%;
    max-width: 380px;
    margin: 10px 0;
    padding: 0 10px;
    line-height: 1.6rem;
    display: -webkit-box;
    -webkit-line-clamp: 2; /** número de linhas que você quer exibir */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: 0.5s;
    :hover {
      text-decoration: underline;
    }
  }
  p {
    box-sizing: border-box;
    font-size: 12px;
    line-height: 1.2rem;
    padding: 0 10px;
    color: var(--color-primary-dark);
    width: 100%;
    max-width: 380px;
    display: -webkit-box;
    -webkit-line-clamp: 3; /** número de linhas que você quer exibir */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: 0.5s;
    :hover {
      color: #fff;
    }
  }
  .Image {
    width: 100%;
  }
  img {
    width: 100%;
    height: 200px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    overflow: hidden;
    transition: transform 0.6s ease;
  }
  img:hover {
    transform: scale(1.05);
  }
`;
export const Post = styled.ul`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const ContainerPost = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
