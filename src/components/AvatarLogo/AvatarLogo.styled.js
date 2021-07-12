import styled from 'styled-components';

const AvatarImg = styled.img`
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  /* background: url(${(props) => props.src}); */
  /* background-image: url('../../../public/empty_avatar.png');
  background-position: 50% 50%;
  background-size: cover; */
  border-radius: 50%;
`;

const Styled = {
  AvatarImg,
};

export default Styled;
