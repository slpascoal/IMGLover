import styled from 'styled-components'
import tags from './tags.json'

const AreaTag = styled.section`
   display: flex;
   width: 758px;
   justify-content: space-between;
   align-items: center;

   margin-top: 50px;
   margin-bottom: 20px;

   h2{
      margin: 0;
      color: #D9D9D9;
      font-weight: 400;
      font-size: 24px;
   }
`

const TagContainer = styled.div`
   display: flex;
   gap: 20px;
`

const TagEstilizada = styled.button`
   cursor: pointer;
   height: 49px;
   padding: 10px;
   border-radius: 10px;
   border: 2px solid transparent;
    &:hover {
      border-color: #906090;
    }
   background-color: #D9D9D94D;

   font-size: 24px;
   font-weight: 400;
   line-height: 28.8px;
   text-align: center;
   color: white;
`

const Tags = ({ setTag }) => {
   return(
      <AreaTag>
         <h2>Busque por tags:</h2>
         <TagContainer>
            {tags.map(tag => <TagEstilizada key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</TagEstilizada>)}
         </TagContainer>
      </AreaTag>
   )
}

export default Tags