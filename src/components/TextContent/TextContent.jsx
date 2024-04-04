import { Text } from "@chakra-ui/react"
import './textContent.css'

// eslint-disable-next-line react/prop-types
const TextContent = ({content}) => {
  return (
    <div className="text_container">
      <Text className="text_content">{content}</Text>
    </div>
  )
}


export default TextContent;