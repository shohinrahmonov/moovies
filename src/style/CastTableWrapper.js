import styled from 'styled-components';

export const CastTableWrapper = styled.div`
    padding: 6rem 0;
    .inner-descripton{
        background-color: blue;
    }
    .ant-table{
        background: rgb(234, 232, 232);
    }
    .ant-table-thead > tr > th{
        background: #8b69d7;
        color: #fff;
        font-weight: bold;
    }
`;
export const TableDropdownContent = styled.div`
        a{
            display: flex;
            align-items: center;
            color: rgba(0, 0, 0, 0.65);
        }
        p{
            padding-left: 2rem;
            margin-bottom: 0;
        }
        img{
            height: 12rem;
            width: 8rem;
        }
`;
