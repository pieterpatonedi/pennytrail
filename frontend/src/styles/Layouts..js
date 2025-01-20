const { default: styled } = require("styled-components");

export const MainLayout = styled.div`
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 2rem;
    height: 100%;
    display: flex;
    gap: 2rem;
`;

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;
`;