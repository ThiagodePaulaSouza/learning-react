import * as S from "./styled";

export const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://github.com/thiagodepaulasouza.png"
        alt="avatar of user"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Thiago de Paula Souza</h1>
          <S.WrapperUserName>
            <h3>Username:</h3>
            <span>thiagodepaulasouza</span>
          </S.WrapperUserName>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>starred</h4>
            <span>5</span>
          </div>
          <div>
            <h4>followings</h4>
            <span>5</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};
