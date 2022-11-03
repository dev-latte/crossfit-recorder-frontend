import styled from "styled-components";

const AuthCardTemplate = styled.div`
  max-width: 414px;
  width: 100vw;
  max-height: 896px;
  height: 90vh;
  border: 1px solid #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0;
`;

type Props = {
    children: React.ReactNode;
}

export const AuthCard: React.FC<Props> = ({ children }) => {
    return (
        <AuthCardTemplate>
            {children}
        </AuthCardTemplate>
    );
}

