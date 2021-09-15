import styled from 'styled-components'

const StyledForm = styled.div`
    display: flex;
    justify-content: center;
    height: 30vh;
    padding-top: 5%;

    .form-container h2{
        color: #846B8A;
    }

    .form-inputs {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 5%;
        padding-bottom: 5%;
        width: 30vw;
        height: 50%;
        background-color: #846B8A;
        color: #FAE3E3;
        border-radius: 10px;
    }
`
export default StyledForm;